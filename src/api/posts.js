import axios from 'axios'

export const getPostRequest = async () =>
    await axios.get('http://localhost:4000/posts')
export const createPost = async (post) =>
    await axios.post('http://localhost:4000/addPost', post)
