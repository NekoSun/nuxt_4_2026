<template>
  <div class="mx-auto w-1/2 p-4">
    <div>
      <div class="mb-4">
        <NuxtLink
          :to="{ name: 'posts-create' }"
          class="inline-block text-xs text-white px-3 py-2 bg-sky-600 border border-sky-700"
        >
          CREATE POST
        </NuxtLink>
      </div>
      <div
        v-for="post in postStore.posts"
        class="bg-white w-full p-4 border border-gray-200 mb-4"
      >
        <h3 class="mb-2 text-lg text-gray-700">
          <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="text-xs text-gray-500">{{ post.content }}</p>
        <div>
          <NuxtLink :to="{ name: 'posts-id-edit', params: { id: post.id } }">EDIT</NuxtLink>
        </div>
        <div><a
            @click="postStore.deletePost(post)"
            href="#"
            class="text-red-600"
          >DELETE</a></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "main",
});

useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

const postStore = usePostStore();

await postStore.getPosts();


</script>

<style scoped></style>