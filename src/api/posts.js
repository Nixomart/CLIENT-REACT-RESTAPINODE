import axios from 'axios'

export const getPostRequest = async () =>
    await axios.get('http://localhost:4000/posts')
export const createPostRequest = async (post) =>
    await axios.post('http://localhost:4000/addPost', post)
export const deletePostRequest = async (id) =>
    await axios.delete('http://localhost:4000/posts/' + id)
