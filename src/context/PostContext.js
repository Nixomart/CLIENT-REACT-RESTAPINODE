import { createContext, useContext, useState } from "react";
import { getPostRequest } from "../api/posts";

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostRequest();
    setPosts(res.data)
  };


  return (
    <postContext.Provider value={{ posts, getPosts  }}>
      {children}
    </postContext.Provider>
  );
};
