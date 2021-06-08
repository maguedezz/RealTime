<template>
    <div class="flex items-center justify-between border-b border-gray-300 p-3">
        <div class="flex">
            <img src="https://secure.gravatar.com/avatar/6c0fde293c382f3316af0cd997e55f2c" :alt="post.user.name" class="w-12 h-12 rounded-full mr-4">
            <div>
                {{ post.id }}
                <span class="font-semibold">{{ post.user.name }}</span> <span class="text-sm text-gray-500">{{ post.created_at }}</span>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <div>
            <AppPostLikes :post="post" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
            required: true,
            type: Object
            }
        }
    }
</script>