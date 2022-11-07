import { createContext, useContext, useState } from "react";
import { getPostRequest } from "../api/posts";

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    const posts = await getPostRequest();
  };


  return (
    <postContext.Provider value={{ getPosts, setPost   }}>
      {children}
    </postContext.Provider>
  );
};
