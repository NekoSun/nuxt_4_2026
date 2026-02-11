export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('hello', (name) => {
    console.log(name); 
  })
})