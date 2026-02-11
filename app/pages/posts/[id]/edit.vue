<template>
  <div class="mx-auto w-1/2 p-4">
      <div class="mb-4">
          <input
            v-model="post.title"
            type="text"
            placeholder="title"
            class="w-full border border-gray-200 p-4"
          >
      </div>
      <div class="mb-4">
          <textarea
            v-model="post.content"
            placeholder="content"
            class="w-full border border-gray-200 p-4"
          ></textarea>
      </div>
      <div class="mb-4">
          <a
            href="#"
            @click.prevent="updatePost"
            class="inline-block text-xs text-white px-3 py-2 bg-emerald-600 border border-emerald-700"
          >
            UPDATE
          </a>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { PostsData } from '@/types/posts';

definePageMeta({
  layout: 'main',
});

const {updatePost, getPost} = usePost();

const post = await getPost();

</script>

<style scoped></style>