import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router';
import type { PostsData } from '@/types/posts';

interface State {
    post: PostsData;
    posts: PostsData[] | [];
}

export const usePostStore = defineStore('postStore', {
    state: (): State => ({
        post: {
            title: '',
            content: '',
        },
        posts: [],
    }),
    actions: {
        async getPosts() {
            const { data } = await useFetch<PostsData[]>(
                'http://localhost:5000/poste',
            );

            if (data.value?.length) {
                this.posts = data.value;
            }
        },

        async getPost(route: RouteLocationNormalizedLoadedGeneric) {
            const { data } = await useFetch<PostsData>(
                `http://localhost:5000/poste/${route.params.id}`,
            );

            if (data.value) {
                this.post = data.value;
            }
        },

        async storePost() {
            await $fetch('http://localhost:5000/poste', {
                method: 'POST',
                body: this.post
            })

            this.post = {
                title: '',
                content: '',
            }
        },
        async updatePost() {
            await $fetch(`http://localhost:5000/poste/${this.post.id}`, {
                method: 'PATCH',
                body: this.post,
            });
        },

        async deletePost(post: PostsData) {
            await $fetch(`http://localhost:5000/poste/${post.id}`, {
                method: 'DELETE'
            })

            // await refreshPosts();

            this.posts = this.posts?.filter(postItem => postItem !== post);
        }
    },
});
