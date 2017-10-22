import firebase from 'firebase'
import * as types from '../mutation-types'

const state = {
  isEdited: false,
  modal: '',
  topic: {},
  text: {},
  list: {}
}

const getters = {
  handleIsEdited: () => state.isEdited,
  getModal: () => state.modal,
  getList: () => state.list,
  getText: () => state.text
}

const mutations = {
  [types.IS_EDITED]() {
    state.isEdited = !state.isEdited
  },
  [types.SET_TEXT](sub, { topic }) {
    state.topic = {
      ...topic
    }
  },
  [types.SET_CONTENT](sub, { topic }) {
    state.text = {
      ...topic
    }
  },
  [types.OPEN_MODAL](sub, { modal }) {
    state.modal = modal
  },
  [types.GET_TEXT](sub, { text }) {
    state.text = text
  },
  [types.GET_LIST](sub, { list }) {
    state.list = list
  }
}

const actions = {
  handleUpdateText() {
    const { text, category, topic } = state.text
    const ref = firebase.database().ref()
    ref.child('list').child(category.toLowerCase()).child(topic.toLowerCase())
    .update({
      key: topic.toLowerCase(),
      name: topic,
      category: category.toLowerCase()
    })
    .then(() => {
      ref.child(category.toLowerCase()).child(topic.toLowerCase())
      .update({
        text
      })
    })
  },
  handleSaveText() {
    const { text, category, topic } = state.topic
    const ref = firebase.database().ref()
    ref.child('list').child(category.toLowerCase()).child(topic.toLowerCase())
    .set({
      key: topic.toLowerCase(),
      name: topic,
      category: category.toLowerCase()
    })
    .then(() => {
      ref.child(category.toLowerCase()).child(topic.toLowerCase())
      .set({
        text
      })
    })
  },
  handleOpenModal({ commit }, modal) {
    commit('OPEN_MODAL', { modal })
  },
  handleFetchTopic({ commit }, { index }) {
    const { category, key } = index
    const ref = firebase.database().ref(category).child(key)
    ref.once('value').then((data) => {
      const text = data.val()
      commit('GET_TEXT', { text })
    })
  },
  handleFetchList({ commit }) {
    const ref = firebase.database().ref('list')
    ref.on('value', (data) => {
      const list = data.val()
      commit('GET_LIST', { list })
    })
  },
  handleRemovePage({ commit }, { category, topic }) {
    firebase.database().ref(category).child(topic).remove()
    .then(() => {
      firebase.database().ref('list').child(category).child(topic)
      .remove()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
