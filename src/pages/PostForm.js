import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from "yup";

export default function PostForm() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null
  });
  
  const { newPost, getPost, updatePost } = usePost();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    (async () => {
      if (params.id) {
       
        const res = await getPost(params.id);
        setPost(
          res
        );

      }
    })();
  },[]);

  

  return (
    <>
      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("El titulo es requerido"),
          description: Yup.string().required("La descripcion es requerida"),
        })}
        
        onSubmit={async (values, actions) => {
          
          if (params.id) {
            if(values.image.name){
              await updatePost(params.id, values);
            }else{
              let newpost = getPost(params.id)
                newpost = {
                title: values.title,
                description: values.description,
               
              }
              await updatePost(params.id, newpost) 
              console.log('values del newpost despues del condicional', newpost)
            }

          } else {
            await newPost(values);
          }
          actions.resetForm();
          actions.setSubmitting(false)
          navigate("/");
        }}
        enableReinitialize
      >
      
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <div className="h-screen flex justify-center items-center text-white ">
            <Form
              className="bg-gray-600 rounded-lg shadow-lg px-6 py-6 flex flex-col w-1/3"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between">
                <Link className="text-gray hover:outline-current" to={"/"}>
                  Volver al inicio
                </Link>
                <Link to={"/"} className="text-gray-400 hover:text-gray-600">
                  ir al home
                </Link>
              </div>

              <div className="mb-6">
                <Field
                  className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="title"
                  placeholder="Titulo"
                  id="title"
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  component={"p"}
                  name="title"
                />
              </div>

              <div className="mb-6">
                <Field
                  rows={"2"}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name="description"
                  placeholder="description"
                  component={"textArea"}
                >{post.description}</Field>
                <ErrorMessage
                  className="text-red-500 text-sm"
                  component={"p"}
                  name="description"
                />
              </div>

              <input
              id="input"
                type="file"
                name="image"
                className='mb-5 block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size'
                onChange={(e) => setFieldValue("image", 
                e.target.files[0], console.log(e.target.files))}
              />
              {post.image && <img src={post.image.url} />}
              <div className="flex justify-center ">
              <button
                className="rounded-lg py-2 bg-gray-800 text-white w-1/2 justify-items-center"
                disabled={isSubmitting}
                type="submit"
                >
                  {isSubmitting ? (
                <div className="flex justify-center">
                  <AiOutlineLoading3Quarters className="animate-spin text-center h-5 w-5"/>
                </div>
                  ):(
                    "Guardar"
                  )}
              </button>
                </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
