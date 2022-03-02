import React from "react"

export const GifGridItem = ({title,url, id}) => {

  return (
    
      <div className="card animate__animated animate__bounce animate__delay-2s">
    <li  key= {id}>
      <h3>{title}</h3>
<img src={url} alt= {title} />            
            </li>
        </div>
  )
}