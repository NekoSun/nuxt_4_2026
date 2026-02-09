<template>
  <div class="mx-auto w-1/2 p-4">
    <div>
      <div
        class="bg-white w-full p-4 border border-gray-200 mb-4"
      >
        <h3 class="mb-2 text-lg text-gray-700">{{ postData.title }} </h3>
        <p class="text-xs text-gray-500">{{ postData.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "nuxt/app"; 

const routre = useRoute()
const {data: postData} = await useFetch(`http://localhost:5000/poste/${routre.params.id}`)
</script>

<style scoped></style>