import type { PostsData } from '@/types/posts';


export const usePost = () => {
    const route = useRoute()

    const posts = useState<PostsData[]>('posts', () => []);
    const post = useState<PostsData>('post', () => {
        return {
            id: '',
            title: '',
            content: ''
        }
    });

    const getPosts = async () => {

        const { data } = await useFetch<PostsData[]>(
            "http://localhost:5000/poste",
        )

        if (data.value?.length) {
            posts.value = data.value;
        }

        return posts;
    }

    const getPost = async () => {
        const { data } = await useFetch<PostsData>(
            `http://localhost:5000/poste/${route.params.id}`,
        )

        if (data.value) {
            post.value = data.value
        }

        return post
    }

    const storePost = async (post: PostsData) => {
        await $fetch('http://localhost:5000/poste', {
            method: 'POST',
            body: post
        })

        Object.assign(post, {
            title: '',
            content: ''
        })
    }

    const updatePost = async () => {
        await $fetch(`http://localhost:5000/poste/${route.params.id}`, {
            method: 'PATCH',
            body: post.value,
        });
    };

    const deletePost = async (post: PostsData) => {
        await $fetch(`http://localhost:5000/poste/${post.id}`, {
            method: 'DELETE'
        })

        // await refreshPosts();

        posts.value = posts.value?.filter(postItem => postItem !== post);
    }


    return { posts, getPosts, getPost, storePost, updatePost, deletePost }
}



