import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { usePost } from "../context/PostContext";
//formularios de una forma facil usando formik
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function PostForm() {
  
  const {newPost} = usePost()
  const navigatation = useNavigate()
  

  return (
    <div>
      PostForm
      <Formik 
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={ async (values, actions) =>{
        //values obtiene los valores de los field
         await newPost(values)
         navigatation('/')
      }}>
         {/*  funcion {()=>()} y se desectructura para recibir la funcion handlesubmit*/}
          {({handleSubmit})=>(
           <Form onSubmit={handleSubmit}>
           <Field name='title' placeholder='title' />
           <Field name='description' placeholder='description' />
           <button type="submit">Guardar</button>
           </Form>
          )}
        </Formik>
      <Link to={"/"}>ir al home</Link>
    </div>
  );
}
