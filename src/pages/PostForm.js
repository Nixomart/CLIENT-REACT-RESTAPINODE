import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
//formularios de una forma facil usando formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function PostForm() {
  const [post, setPost] = useState({
    title: "",
    description: ""
  })


  const { newPost, getPost, updatePost } = usePost();
  const navigate = useNavigate();
  //para ver el parametro de la URL
  const params = useParams()

  useEffect(()=>{
    (async()=>{
      if(params.id){
        //params.id lleva el id del objeto a traer
        const res = await getPost(params.id)
        setPost(res)
      }
    })()
  },[])

  return (
    <div>
      PostForm
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
          if(params.id){
            const res = await updatePost(params.id, values)
          }else{
            await newPost(values)
          }
          navigate("/");
        }}
        //para reinicar los datos que llegan, por defecto toma el post vacio no usa el useEffect
        enableReinitialize  
      >
        {/*  funcion {()=>()} y se desectructura para recibir la funcion handlesubmit*/}
        {({ handleSubmit }) => (
          <Form 
          className="bg-gray-300 px-6 py-6 flex flex-col"
          onSubmit={handleSubmit}>
            <Link to={'/'}>Volver al inicio</Link>
            <Field 
            className='px-3 py-4 focus:outline-none bg-gray-600 text-white rounded'
            name="title" 
            placeholder="title" />
            {/* Etiquetas genericas hay que indicarle que tipo de elementos son */}
            <ErrorMessage
              className="text-red-500 text-sm"
              component={"p"}
              name="title"
            />
            <Field 
            className='px-3 py-4 focus:outline-none bg-gray-600 text-white rounded mt-6'
            name="description" 
            placeholder="description" />
            <ErrorMessage
              className="text-red-500 text-sm"
              component={"p"}
              name="description"
            />
            <button 
            className="bg-gray-600 text-white w-1/2"
            type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
      <Link to={"/"}>ir al home</Link>
    </div>
  );
}
