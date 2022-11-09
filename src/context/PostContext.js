import { createContext, useContext, useState, useEffect } from "react";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
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

  //OBTENER POST
  const getPosts = async () => {
    const res = await getPostRequest();
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, newPost, deletePost }}>
      {children}
    </postContext.Provider>
  );
};
