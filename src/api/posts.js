import axios from 'axios'

export const getPostRequest = async () =>
    await axios.get('http://localhost:4000/posts')
