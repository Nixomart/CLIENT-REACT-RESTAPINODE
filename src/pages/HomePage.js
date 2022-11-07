import React, { useEffect, useContext } from "react";
import { usePost } from "../context/PostContext";

export default function HomePage() {
  const { getPosts, posts } = usePost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="text-white">
      {posts.map(post =>(
        <div key={post._id}> 
          {post.title}
        </div>
      ))}
    </div>
  );
}
