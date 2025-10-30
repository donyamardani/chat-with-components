import React, { useEffect, useState } from 'react'

export default function Header({isType}) {
  const [title,setTitle]=useState()
  useEffect(()=>{
    setTitle(isType==="send"?"chat client" : "chat support")
  },[isType])
  return (
   
       <div className="panel-heading">
         <h3 className="panel-title">
           <i className="icon wb-chat-text" aria-hidden="true"></i>  {title}
         </h3>
       </div>
  )
}
