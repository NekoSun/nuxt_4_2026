<template>
  <div class="mx-auto w-1/2 p-4">
      <div class="mb-4">
          <input
            v-model="postData.title"
            type="text"
            placeholder="title"
            class="w-full border border-gray-200 p-4"
          >
      </div>
      <div class="mb-4">
          <textarea
            v-model="postData.content"
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

const route = useRoute()

const { data: post  } = await useFetch<PostsData>(`http://localhost:5000/poste/${route.params.id}`);

const postData = reactive({
  title: '',
  content: '',
  ...post.value
})

const updatePost = async () => {
  await $fetch(`http://localhost:5000/poste/${route.params.id}`, {
    method: 'PATCH',
    body: postData,
  });
};
</script>

<style scoped></style>