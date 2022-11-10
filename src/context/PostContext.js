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
    console.log('res from context', res)
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
    const res = await getPostsRequest();
    setPosts(res.data);
  };

  //OBTENER POST POR ID
  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  //ACTUALIZAR POST
  const updatePost = async(id, post) =>{
    const res = await updatePostRequest(id, post)
    /* console.log('res', res) */
    setPosts(posts.map((post) => (post._id === id ? res.data : post)))
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
