import React from 'react'

export default function Chat({isLeft,avatar,message,time}) {
  return (
    <>
    
  <div className={`chat ${isLeft && 'chat-left'}`}>
    <div className="chat-avatar">
      <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
        <img src={avatar} alt="..."/>
        <i></i>
      </a>
    </div>
    <div className="chat-body">
      <div className="chat-content">
        {message}
        <time className="chat-time" >{time}</time>
      </div>
    </div>
  </div>
    </>
  )
}
