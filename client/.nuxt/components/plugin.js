import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppNav: () => import('../../components/AppNav.vue' /* webpackChunkName: "components/app-nav" */).then(c => wrapFunctional(c.default || c)),
  AppPost: () => import('../../components/AppPost.vue' /* webpackChunkName: "components/app-post" */).then(c => wrapFunctional(c.default || c)),
  AppPostForm: () => import('../../components/AppPostForm.vue' /* webpackChunkName: "components/app-post-form" */).then(c => wrapFunctional(c.default || c)),
  AppPostLikes: () => import('../../components/AppPostLikes.vue' /* webpackChunkName: "components/app-post-likes" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
