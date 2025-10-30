import React, { useState } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default function CleanChat() {
  let isType;
const[messages,setMessages]=useState(
  [
    {type:'send',message:'hello frind',time:'11:37:00'},
    {type:'receive',message:'hi,can i help you',time:'11:38:00'},
    {type:'send',message:'yes,you can,',time:'11:39:00'},
]);
  const handleMessage=(msg,isType)=>
    {setMessages([...messages,{type:isType,message:msg,time:new Date().toLocaleTimeString()}])};
  

  const avatars={client:'https://bootdey.com/img/Content/avatar/avatar1.png',
    support:'https://bootdey.com/img/Content/avatar/avatar2.png'
  };
  return (
    
<div className="container bootstrap snippets">
<div className="w-100  col-md-7 col-xs-12 col-md-offset-2 d-flex flex-wrap align-items-center justify-content-between">
  
  <div className="panel p-5" id="chat">
    <Header isType={'send'}/>
    <Body messages={messages} avatars={avatars} isType={'send'}/>
    <Footer handleMessage={handleMessage} isType={'send'}/>
  </div>
   <div className="panel p-5">
     <Header isType={'receive'}/>  
      <Body messages={messages} avatars={avatars} isType={'receive'}/>
      <Footer handleMessage={handleMessage} isType={'receive'}/>
   </div>
</div>
</div>
  )
}
