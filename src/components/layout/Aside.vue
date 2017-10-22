<template>
  <div class="aside-nav">
    <div class="nav">
      <ul>
        <li 
          v-for="(index, key) in list" 
          :key="key">
            <a>{{key}}</a>
            <Listing 
              @handleChangeView="changeView"
              :items="index"
            />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Listing from '@/components/shared/Listing'

export default {
  name: 'aside-nav',
  components: { Listing },
  computed: {
    list() {
      return this.$store.getters.getList
    }
  },
  mounted() {
    this.$store.dispatch('handleFetchList')
  },
  methods: {
    changeView(index) {
      this.view = index
    }
  }
}
</script>


<style scoped lang="stylus">
 .aside-nav
   position fixed
   z-index 900
   top 0
   bottom 0
   left 0
   width 200px  
    
  .nav
    height 100%
    padding-top 60px
    background-color #2b333e
   
    ul li
      color #fff
      cursor pointer
      padding 5px
      text-align left
      padding-left 25px
      font-size 16px
      
      a
        text-transform capitalize 
</style>