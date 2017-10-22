<template>
  <div id="app">
    <Heading />
    <AsideNav />
    <div class="content"> 
      <router-view />
    </div>
  </div>
</template>

<script>
import Heading from '@/components/layout/Header'
import AsideNav from '@/components/layout/Aside'

export default {
  components: { Heading, AsideNav },
  name: 'app',
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="stylus">
  img
    width 100%
    
  .content
    margin-left 200px
    
  .el-menu-item-group__title
    padding 0!important
  
  .el-submenu__title
    padding 0!important
    
  ul, menu, dir
    display block
    list-style-type none
    -webkit-margin-before 0em
    -webkit-margin-after 0em
    -webkit-margin-start 0px
    -webkit-margin-end 0px
    -webkit-padding-start 0px!important

  .el-menu
    background-color #2b333e

  .toggle-button
    float left
    margin-left 25px
    font-size 1.2em

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50

  body
    margin 0

  header
    border-bottom 1px solid #000
    z-index 991
</style>