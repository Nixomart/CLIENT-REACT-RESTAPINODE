import { createContext, useContext, useState, useEffect } from "react";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  getPostsRequest,
  updatePostRequest,
} from "../api/posts";

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  //CREAR POST
  const newPost = async (post) => {
    const res = await createPostRequest(post);
    //setea el estado con los post anterior y agrega el nuevo desde el res.data
    setPosts([...posts, res.data]);
  };

  //BORRAR POST
  const deletePost = async (id) => {
    await deletePostRequest(id);
    //seteamos un nuevo arreglo de objetos pero filtrando cuando cada post._id sea igual al id del body
    setPosts(posts.filter((post) => post._id !== id));
  };

  //OBTENER POSTS
  const getPosts = async () => {
    try {
      const res = await getPostsRequest();
      setPosts(res.data);
    } catch (error) {
  console.log('error', error)      
    }
  };

  //OBTENER POST POR ID
  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
    return res.data;
    } catch (error) {
      console.log('error', error)
    }
  };

  //ACTUALIZAR POST
  const updatePost = async(id, post) =>{
    try {
      const res = await updatePostRequest(id, post)
      /* console.log('res', res) */
      setPosts(posts.map((post) => (post._id === id ? res.data : post)))
      
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, newPost, deletePost, getPost, updatePost }}>
      {children}
    </postContext.Provider>
  );
};
