import { wrapFunctional } from './utils'

export { default as AppNav } from '../../components/AppNav.vue'
export { default as AppPost } from '../../components/AppPost.vue'
export { default as AppPostForm } from '../../components/AppPostForm.vue'
export { default as AppPostLikes } from '../../components/AppPostLikes.vue'

export const LazyAppNav = import('../../components/AppNav.vue' /* webpackChunkName: "components/app-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyAppPost = import('../../components/AppPost.vue' /* webpackChunkName: "components/app-post" */).then(c => wrapFunctional(c.default || c))
export const LazyAppPostForm = import('../../components/AppPostForm.vue' /* webpackChunkName: "components/app-post-form" */).then(c => wrapFunctional(c.default || c))
export const LazyAppPostLikes = import('../../components/AppPostLikes.vue' /* webpackChunkName: "components/app-post-likes" */).then(c => wrapFunctional(c.default || c))
