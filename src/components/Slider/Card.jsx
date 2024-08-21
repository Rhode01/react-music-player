import React from 'react'
import "./card.css"
export default function Card({data, id}) {
    const Style = {
        fontSize:"14px",
        color: "#f2f2f2",
        lineHeight: "160px",
        textAlign: "center",
      };
      console.log(data.artist);   
  return (
    <div key={id} style={Style} className='card'>
       <div className='hero-artist'>
            <h4 className='title'>{data.artist}</h4>
            <p className='song'>{data.song}</p>
            {/* <p className='desc'>{data.description}</p> */}
       </div>
       <div className='hero-artist-image'>
            <img src={data['cover-image']} alt="Song artist"  />
       </div>
    </div>
  )
}