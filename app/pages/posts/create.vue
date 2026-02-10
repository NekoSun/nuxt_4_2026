<template>
  <div class="mx-auto w-1/2 p-4">
    <div class="mb-4">
      <NuxtLink
        :to="{ name: 'posts-create' }"
        class="inline-block text-xs text-white px-3 py-2 bg-sky-600 border border-sky-700"
      >
        CREATE POST
      </NuxtLink>
    </div>

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
          v-model="post.contecst"
          placeholder="content"
          class="w-full border border-gray-200 p-4"
        ></textarea>
      </div>
      <div class="mb-4">
        <a
          href="#"
          @click.prevent="storePost"
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
  layout: 'main'
})

const post = reactive({
  title: '',
  contecst: ''
})

const storePost = async () => {
  await $fetch('http://localhost:5000/poste', {
    method: 'POST',
    body: post
  })
}

</script>

<style scoped></style>