export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to);
    console.log(from);

    const isAuth = true;

    if(!isAuth && to.fullPath !== '/') {
        return navigateTo('/')
    }


})
