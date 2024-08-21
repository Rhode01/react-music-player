import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaP } from 'react-icons/fa6'
export default function MusicCard({data, index}) {
    const [showPlayIcon, setShowPlayIcon] = useState(false)
  return (
    <div className='hotlist'>
        <div className='hotlist-card'>
            <img src={data["cover-image"]} alt="" onMouseEnter={()=>setShowPlayIcon(true)} onMouseLeave={()=>setShowPlayIcon(false)} />
            {showPlayIcon && <div className='play-show'><FaPlay /></div>}
        </div>
        <div className="hotlist-link">
            <p>{data.title}</p>
        </div>
    </div>
  )
}
