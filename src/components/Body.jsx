import React from 'react'
import Chat from './components/Chat'

export default function Body(messages,avatars,isType) {
 const items= messages.map((msg,index)=>{
    const isOwnmessage=msg.type===isType;
    return(
      <Chat
      key={index}
      avatars={msg.type='send'?avatars.client:avatars.support}
      message={msg.message}
      isleft={!isOwnmessage}
      time={msg.time}
      />
    )
  })
  return (
    
    <div className="panel-body">
      <div className="chats">
        {items}
      </div>
    </div>
  )
}
