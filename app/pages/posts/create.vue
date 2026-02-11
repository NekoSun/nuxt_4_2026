<template>
  <div class="mx-auto w-1/2 p-4">
    <div>
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
          @click.prevent="postStore.storePost(post)"
          class="inline-block text-xs text-white px-3 py-2 bg-emerald-600 border border-emerald-700"
        >
          STORE
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

definePageMeta({
  layout: 'main',
});

const post = reactive({
  title: '',
  content: '',
});

const postStore = usePostStore();
</script>

<style scoped></style>