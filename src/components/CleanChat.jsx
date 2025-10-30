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

  const avatars={client:'https://bootdey.com/img/Content/avatar/avatar1.png',
    support:'https://bootdey.com/img/Content/avatar/avatar2.png'
  };
  return (
    
<div className="container bootstrap snippets">
<div className="col-md-7 col-xs-12 col-md-offset-2">
  
  <div className="panel" id="chat">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</div>
</div>
  )
}
