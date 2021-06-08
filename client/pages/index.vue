<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">
        <AppPostForm />
    </div>

    <AppPost  v-for="post in posts" :post="post" />
    <div v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
            page: 1
        }
    },
    computed: {
        ...mapGetters({
            posts: 'posts/posts',
        })
    },
    methods: {
        ...mapActions({
             getPosts: 'posts/getPosts',
             getMorePosts: 'posts/getMorePosts'
        }),
        visibilityChanged (isVisible) {
            if (!isVisible) {
                return
            } 
            ++this.page 
            this.getMorePosts(this.page)
        }
    },
    mounted () {
        this.getPosts()
    }
  }
</script>