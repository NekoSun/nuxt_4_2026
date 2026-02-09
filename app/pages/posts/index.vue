<template>
  <div class="mx-auto w-1/2 p-4">
    <div>
      <PostItem></PostItem>
      <div v-for="post in postsData" class="bg-white w-full p-4 border border-gray-200 mb-4">
        <h3 class="mb-2 text-lg text-gray-700">
          <NuxtLink :to="{name:'posts-id', params: {id: post.id}}">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="text-xs text-gray-500">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'main'
})

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
  bodyAttrs: {
    class: 'test',
  }
})

interface postsData {
  id: string
  title: string
  content: string
}

const {data: postsData} = await useFetch<postsData[]>('http://localhost:5000/poste');

</script>

<style scoped></style>