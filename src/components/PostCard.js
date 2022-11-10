import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { usePost } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export default function ({ post }) {

  const { deletePost } = usePost();
  const navigate = useNavigate()
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-center text-3xl">
            Ta seguro?<strong>{id}</strong>
          </p>
          <div className="mt-5">
            <button
            //cuando haga click devolvera las funciones.
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
              className="bg-red-600 text-white p-2 rounded text-lg mx-4"
            >
              Borrar
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-white bg-blue-400 p-2 rounded text-lg mx-4"
            >
              Canelar
            </button>
          </div>
        </div>
      ),
      {
        style: {
          padding: "20px",
          width: "600px",
          height: "200px",
        },
      }
    );
  };

  return (
    <div className="bg-slate-300 mx-6 my-2 px-3 py-3 text-black">
      <h3 className="text-center">{post.title}</h3>
      <p className="text-center">{post.description}</p>
      {post.image && <img src={post.image.url} />}
      <div className="flex justify-center justify-evenly mt-6">
        <button
          className="bg-red-500 text-white p-3"
          onClick={() => handleDelete(post._id)}
        >
          borrar
        </button>
        <button className="bg-green-600 text-white p-3" 
        onClick={()=> navigate('/posts/'+post._id)}>editarr</button>
      </div>
    </div>
  );
}
