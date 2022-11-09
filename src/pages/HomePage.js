import React from "react";
import { usePost } from "../context/PostContext";
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

export default function HomePage() {
  const { posts } = usePost();

  if (posts.length === 0) return (
    <div className="flex flex-col justify-center items-center text-white text-lg">
      <VscEmptyWindow className="w-40 h-40"/>
      <h1>No hay posts.</h1>
      <Link to={"/newPost"} >Agrega uno.</Link>
    </div>
  )
    console.log('posts', posts)
  return (
    <div className="text-white">
      <Link to={'/newPost'}>Crea una nueva publi</Link>
      {posts.map(post =>(
        <div key={post._id}> 
          {post.title}
        </div>
      ))}
    </div>
  );
}
