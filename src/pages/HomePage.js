import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import {  usePost } from '../context/PostContext'

export default function HomePage() {

  const {setPost} = usePost()
useEffect(()=>{
},[])  
  return (
    <div>HomePage

      <button onClick={()=>setPost([1,2,3])}>
        boton
      </button>
      <Link to={'/newPost'}>
      ir al newPost
      </Link>
    </div>
  )
}
