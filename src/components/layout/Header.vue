<template>
  <header class="container">
    <el-row :gutter="20">
      <el-col :span="4">
        <h4 class="logo" @click="goTo('/')">PROJECT LOGO</h4>
      </el-col>
      <el-col :span="20">
        <el-button
          v-if="!isEdited && $route.name === 'Content'"
          class="btn-left red"
          type="text"
          @click="handleRemove()">
            Remove this page
            <i class="fa fa-trash"></i>
        </el-button>
        <el-button
          v-if="!isEdited && $route.name === 'Content'"
          class="btn-left"
          type="text"
          @click="goTo(`/edit/${$route.params.category}/${$route.params.topic}`)">
            Edit this page
            <i class="fa fa-pencil"></i>
        </el-button>
        <el-button
          v-if="!isEdited"
          class="btn-left"
          type="text"
          @click="handleChangePage('/add/')">
            Add new page 
            <i class="fa fa-plus"></i>
        </el-button>
        <el-button 
          v-if="isEdited || $route.name === 'Edit'"
          class="btn-left"
          type="text"
          @click="handleSave()">
            Save
            <i class="fa fa-save"></i>
        </el-button>
        <el-button
          v-if="isEdited || $route.name === 'Edit'"
          class="btn-left"
          type="text"
          @click="handleChangePage('/')">
            Close
            <i class="fa fa-close"></i>
        </el-button>
      </el-col>
    </el-row>

  </header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'header',
  props: {
    category: String,
    topic: String
  },
  methods: {
    ...mapMutations({
      edit: 'IS_EDITED'
    }),
    ...mapActions({
      saveText: 'handleSaveText',
      removePage: 'handleRemovePage',
      updateText: 'handleUpdateText'
    }),
    handleRemove() {
      const { category, topic } = this.$route.params
      this.removePage({
        category, topic
      })
      this.goTo('/')
    },
    handleChangePage(url) {
      this.goTo(url)
      this.edit()
    },
    handleSave() {
      const { category, topic } = this.$route.params
      this.edit()
      if (this.$route.name === 'Add') {
        this.saveText()
      } else {
        this.updateText()
        this.goTo(`/view/${category}/${topic}/`)
      }
    },
    goTo(url) {
      this.$router.push(url)
    }
  },
  computed: {
    ...mapGetters({
      isEdited: 'handleIsEdited'
    })
  }
}
</script>

<style lang="stylus">
  header
    position sticky
    background #fff
    
  .btn-left
    float right
    padding 13px
    text-transform uppercase
    i
      vertical-align initial
      
  .red
    color #d23232
    
  .logo
    float left
    margin 10px 20px
    cursor pointer
    
  .el-row 
    margin 0!important
</style>
