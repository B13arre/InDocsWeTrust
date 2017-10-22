<template>
  <div>
    <modal  
      title="Create a topic" 
      name="setCategory"
    >
      <label v-if="!addCategory" >
        <span> Category </span>
        <el-select 
          v-model="category" 
          filterable 
          placeholder="Select"
        >
          <el-option
            v-for="(index, key) in list"
            :key="key"
            :label="key"
            :value="key">
          </el-option>
        </el-select>
        <el-button 
          size="mini"
          class="regular-btn a"
          @click="addCategory = true">
            <i class="fa fa-plus"></i>
        </el-button>
      </label>
      <label v-if="addCategory">
        <span>Category</span>
        <el-input 
          v-model="category" 
          placeholder="Category Name">
        </el-input>
        <el-button 
          size="mini" 
          class="regular-btn"
          @click="addCategory = false">
            <i class="fa fa-close"></i>
        </el-button>
      </label>
      <label>
        <span>Topic</span>
        <el-input 
          v-model="topic" 
          placeholder="Topic" 
        />
      </label>
    </modal>
    <div id="editor">
      <textarea 
        :value="content.text" 
        @input="update">
      </textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Modal from '@/components/shared/Modal'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'editContent',
  components: { Modal },
  data() {
    return {
      addCategory: false
    }
  },
  props: {
    topic: {
      type: String
    },
    category: {
      type: String
    }
  },
  mounted() {
    if (this.category) {
      const { category, topic } = this
      const index = {
        category,
        key: topic
      }
      this.fetchText({ index })
      this.edit()
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content.text, {
        sanitize: true
      })
    },
    ...mapGetters({
      list: 'getList',
      content: 'getText'
    })
  },
  methods: {
    ...mapMutations({
      edit: 'IS_EDITED'
    }),
    ...mapActions({
      openModal: 'handleOpenModal',
      fetchList: 'handleFetchList',
      fetchText: 'handleFetchTopic'
    }),
    update(e) {
      const topic = {
        text: e.target.value,
        category: this.category,
        topic: this.topic
      }
      this.$store.commit('SET_CONTENT', { topic })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #editor
    margin 0
    font-family 'Helvetica Neue', Arial, sans-serif
    color #333
    text-align left

  .regular-btn
    margin-left 15px
    height 35px
    width 60px

  textarea, #editor div
    display inline-block
    width 49%
    vertical-align top
    box-sizing border-box
    padding 0 20px

  textarea
    border none
    border-right 1px solid #ccc
    resize none
    outline none
    background-color #f6f6f6
    font-size 14px
    font-family 'Monaco', courier, monospace
    padding 20px
    height 100vh

  label 
   display flex
   margin-bottom 10px
    span 
      padding-top 9px
      margin-right 10px

  code 
    color #f66  
</style>