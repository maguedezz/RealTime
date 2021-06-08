export default {
    state() {
        return {
            posts: [],
            prependedPosts: [],
            likes: {}
        }
    },

    getters: {
        posts (state) {
            return [ ...state.prependedPosts, ...state.posts]
        },

        likes (state) {
            return state.likes
        }
    },

    mutations: {
        SET_POSTS (state, posts) {
            state.posts = posts
        },
        PREPEND_POST (state, post) {
            state.prependedPosts = [ post, ...state.prependedPosts]
        },
        APPEND_POST (state, posts) {
            state.posts = [ ...state.posts, ...posts ]
        },

        APPEND_LIKES (state, likes) {
            state.likes = Object.assign({}, state.likes, likes)
        } 
    },
    actions: {

        async getPosts ({ commit })  {
          let posts = await this.$axios.$get('api/posts')

          commit('SET_POSTS', posts.data)
          commit('APPEND_LIKES', posts.likes)
        },

        async getMorePosts ({ commit, state }, page)  {
          let posts = await this.$axios.$get('api/posts?page=${page}&skip=${state.prepdendedPosts.length}')

          commit('APPEND_POST', posts.data)
          commit('APPEND_LIKES', posts.likes)

        },

        async createPost ({ commit }, post) {
            let prependedPosts = await this.$axios.$post('api/posts', post)

          commit('PREPEND_POST', prependedPosts.data)
        },

        async createLike ({ commit }, postid) {
            let like = await this.$axios.$post('api/posts/{postId}/likes')
            console.log(like)
          //commit('PREPEND_POST', prependedPosts.data)
        }
    }
}