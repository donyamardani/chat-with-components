import React, { useState } from 'react'

export default function Footer({handleMessage,isType}) {
  const [inp,setInp]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    handleMessage(inp,isType)
    setInp('')
  }
  return (
    <>
      
<div className="panel-footer">
<form onSubmit={handleSubmit}>
  <div className="input-group">
    <input
    value={inp}
    onChange={e=>setInp(e.target?.value)}
    type="text" className="form-control" placeholder="Say something"/>
    <span className="input-group-btn">
      <button className="btn btn-primary" type="submit"  disabled={!inp}>Send</button>
    </span>
  </div>
</form>
</div>
    </>
  )
}
