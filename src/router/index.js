import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/pages/Content'
import Welcome from '@/components/pages/Welcome'
import Add from '@/components/shared/Markdown'
import EditContent from '@/components/pages/EditContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/edit/:category/:topic',
      name: 'Edit',
      component: EditContent,
      props: true
    },
    {
      path: '/view/:category/:topic',
      name: 'Content',
      component: Content,
      props: true
    }
  ]
})
