<template>
  <div class="content">
    <vue-markdown 
      :source="text.text" 
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
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
      this.$store.dispatch('handleFetchTopic', {
        index
      })
    }
  },
  computed: {
    ...mapGetters({
      text: 'getText'
    })
  }
}

</script>

<style lang="stylus" scoped>
  #app code
    color #d23232
    
  .content
    text-align left
    margin-left 50px
    width 650px
    
    div>h1
      font-size 25px!important
      
  #editor
    margin 0
    height 100%
    font-family 'Helvetica Neue', Arial, sans-serif
    color #333
    text-align left
    height 100vh
    
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
    
  label span 
    padding-top 9px
    margin-right 10px
</style>