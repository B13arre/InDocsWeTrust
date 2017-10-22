<template>
  <div>
    <modal title="Create a topic" name="setCategory">
      <label v-if="!addCategory" >
        <span> Category </span>
        <el-select v-model="category" filterable placeholder="Select">
          <el-option
            v-for="(index, key) in list"
            :key="key"
            :label="key"
            :value="key">
          </el-option>
        </el-select>
        <el-button 
          size="mini"
          class="regular-btn"
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
        <el-input v-model="topic" placeholder="Topic"></el-input>
      </label>
    </modal>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import Modal from '@/components/shared/Modal'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'markdown',
  components: { Modal },
  data() {
    return {
      input: '# Hello',
      category: '',
      topic: '',
      addCategory: false
    }
  },
  mounted() {
    this.openModal('setCategory')
    this.fetchList()
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, {
        sanitize: true
      })
    },
    ...mapGetters({
      list: 'getList'
    })
  },
  methods: {
    ...mapMutations({
      edit: 'IS_EDITED'
    }),
    ...mapActions({
      openModal: 'handleOpenModal',
      fetchList: 'handleFetchList'
    }),
    update(e) {
      this.input = e.target.value
      const topic = {
        text: e.target.value,
        category: this.category,
        topic: this.topic
      }
      this.$store.commit('SET_TEXT', { topic })
    }
  }
}
</script>
<style lang="stylus" scoped>
  #editor
    margin 0
    height 100vh
    font-family 'Helvetica Neue', Arial, sans-serif
    color #333
    height 650px
    text-align left
    
  .regular-btn
    margin-left 15px
    height 35px
    width 60px
    
  textarea, #editor div
    display inline-block
    width 49%
    height 100vh
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

  label 
   display flex
   margin-bottom 10px
   
  span 
    padding-top 9px
    margin-right 10px

  code 
    color #f66

  img
    width 100%
</style>