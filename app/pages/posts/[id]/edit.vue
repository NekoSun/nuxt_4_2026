<template>
  <div class="mx-auto w-1/2 p-4">
      <div class="mb-4">
          <input
            v-model="postStore.post.title"
            type="text"
            placeholder="title"
            class="w-full border border-gray-200 p-4"
          >
      </div>
      <div class="mb-4">
          <textarea
            v-model="postStore.post.content"
            placeholder="content"
            class="w-full border border-gray-200 p-4"
          ></textarea>
      </div>
      <div class="mb-4">
          <a
            href="#"
            @click.prevent="postStore.updatePost"
            class="inline-block text-xs text-white px-3 py-2 bg-emerald-600 border border-emerald-700"
          >
            UPDATE
          </a>
      </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
});

const postStore = usePostStore();

await postStore.getPost(useRoute())

</script>

<style scoped></style>