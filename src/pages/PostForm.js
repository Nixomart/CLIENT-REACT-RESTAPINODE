import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
//formularios de una forma facil usando formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function PostForm() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  const { newPost, getPost, updatePost } = usePost();
  const navigate = useNavigate();
  //para ver el parametro de la URL
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        //params.id lleva el id del objeto a traer
        const res = await getPost(params.id);
        setPost(res);
      }
    })();
  }, []);

  return (
    <>
      <Formik
        initialValues={post}
        //Validaciones con YUP
        validationSchema={Yup.object({
          title: Yup.string().required("El titulo es requerido"),
          description: Yup.string().required("La descripcion es requerida"),
        })}
        onSubmit={async (values, actions) => {
          //values obtiene los valores de los field
          //condicional para ver si es para actualizar o para guardar
          //si existe el id en la url etc..

          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await newPost(values);
          }
          actions.resetForm();
          navigate("/");
        }}
        //para reinicar los datos que llegan, por defecto toma el post vacio no usa el useEffect
        enableReinitialize
      >
        {/*  funcion {()=>()} y se desectructura para recibir la funcion handlesubmit*/}
        {/* setFieldValue Es porque Formik no puede setear los campos de tipo field*/}
        {({ handleSubmit, setFieldValue }) => (
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
                {/* Etiquetas genericas hay que indicarle que tipo de elementos son */}
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
                />
                <ErrorMessage
                  className="text-red-500 text-sm"
                  component={"p"}
                  name="description"
                />
              </div>
              {/* labael para la subida de imagenes */}

              <input
                type="file"
                name="image"
                className='mb-5 block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size'
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              {post.image && <img src={post.image.url} />}
              <div className="flex justify-center">
              <button
                className="rounded-lg py-2 bg-gray-800 text-white w-1/2"
                
                type="submit"
                >
                Guardar
              </button>
                </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
