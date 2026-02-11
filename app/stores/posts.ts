import { reactive, ref } from 'vue';
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router';
import type { PostsData } from '@/types/posts';

export const usePostStore = defineStore('postStore', () => {
    const posts = ref<PostsData[]>([]);
    const post = reactive<PostsData>({
        id: '',
        title: '',
        content: '',
    });

    const getPosts = async () => {
        const { data } = await useFetch<PostsData[]>('http://localhost:5000/poste');

        if (data.value?.length) {
            posts.value = data.value;
        }
    };

    const getPost = async (route: RouteLocationNormalizedLoadedGeneric) => {
        const { data } = await useFetch<PostsData>(
            `http://localhost:5000/poste/${route.params.id}`,
        );

        if (data.value) {
            Object.assign(post, data.value);
        }
    };

    const storePost = async (post: PostsData) => {
        await $fetch('http://localhost:5000/poste', {
            method: 'POST',
            body: post,
        });

        Object.assign(post, {
            title: '',
            content: '',
        });
    };

    const updatePost = async () => {
        await $fetch(`http://localhost:5000/poste/${post.id}`, {
            method: 'PATCH',
            body: post,
        });
    };

    const deletePost = async (post: PostsData) => {
        await $fetch(`http://localhost:5000/poste/${post.id}`, {
            method: 'DELETE',
        });

        // await refreshPosts();

        posts.value = posts.value?.filter((postItem) => postItem !== post);
    };

    return { post, posts, getPosts, getPost, storePost, updatePost, deletePost };
});
