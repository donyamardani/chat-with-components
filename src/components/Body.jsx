import React from 'react'
import Chat from './Chat'

export default function Body({messages,avatars,isType}) {
   const items = messages.map((msg, index) => {
  const isOwnMessage = msg.type === isType;

  return (
    <Chat
      key={index}
      isLeft={!isOwnMessage}
      avatar={msg.type=='send' ? avatars.client : avatars.support}
      message={msg.message}
      time={msg.time}
    />
  );
});

  return (
    <>
    
<div className="panel-body">
<div className="chats">
 {items}

</div>
</div>
    </>
  )
}
