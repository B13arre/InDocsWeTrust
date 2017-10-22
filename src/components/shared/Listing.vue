<template>
  <ul>
    <li
      v-for="(index, key) in items"
      :key="key"
      @click="changeView(index)"
      :class="{'is-active': $route.params.topic === index.key}"
      >
        {{index.name}}
      </li>
  </ul>
</template>

<script>
export default {
  name: 'listing',
  props: {
    items: Object
  },
  methods: {
    changeView(index) {
      this.$router.push(`/view/${index.category}/${index.key}`)
      this.$store.dispatch('handleFetchTopic', { index })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .is-active
    background-color #d23232
    
  ul li
    color #fff
    cursor pointer
    padding 5px
    text-align left
    padding-left 15px
    font-size 13px
    &:hover
      background-color gray
</style>