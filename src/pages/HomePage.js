import React from "react";
import { usePost } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const { posts } = usePost();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center text-white text-lg">
        <VscEmptyWindow className="w-40 h-40" />
        <h1>No hay posts.</h1>
        <Link to={"/newPost"}>Agrega uno.</Link>
      </div>
    );
  return (

    <div className="text-black w-auto ">

      <Link to={"/newPost"}>Crea una nueva publi</Link>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {posts.map((post) => (
          <PostCard id={post._id} key={post._id} post={post}  />
        ))}
      </div>
    </div>
  );
}
