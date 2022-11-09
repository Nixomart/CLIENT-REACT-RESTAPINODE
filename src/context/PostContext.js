import { createContext, useContext, useState, useEffect } from "react";
import { createPost, getPostRequest } from "../api/posts";

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  
  //CREAR POST
  const newPost = async (post) => {
    const res = await createPost(post);
    //setea el estado con los post anterior y agrega el nuevo desde el res.data
    setPosts([...posts, res.data])
  };


  //OBTENER POST
  const getPosts = async () => {
    const res = await getPostRequest();
    setPosts(res.data)

  };
  
  useEffect(() => {
     getPosts();
  }, []);
  
  return (
    <postContext.Provider value={{ posts, newPost  }}>
      {children}
    </postContext.Provider>
  );
};
