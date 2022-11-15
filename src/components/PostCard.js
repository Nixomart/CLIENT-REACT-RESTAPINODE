import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { usePost } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export default function ({ post }) {
  const { deletePost } = usePost();
  const navigate = useNavigate();
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
    <>
      /* */
      <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md rounded-lg max-w-sm  ">
          <a href="#">
            <img
              class="rounded-t-lg p-8"
              src={post.image.url}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h3 class="text-gray-900 font-semibold text-xl tracking-tight">
                {post.title}
              </h3>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                5.0
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 ">
                $599
              </span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      /* */
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
          <button
            className="bg-green-600 text-white p-3"
            onClick={() => navigate("/posts/" + post._id)}
          >
            editarr
          </button>
        </div>
      </div>
    </>
  );
}
