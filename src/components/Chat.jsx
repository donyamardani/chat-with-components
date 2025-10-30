import React from 'react'

export default function Chat() {
  return (
  
        <div className="chat">
          <div className="chat-avatar">
            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
              <i></i>
            </a>
          </div>
          <div className="chat-body">
            <div className="chat-content">
              <p>
                Good morning, sir.
                <br/>What can I do for you?
              </p>
              <time className="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
            </div>
          </div>
        </div>
  )
}
