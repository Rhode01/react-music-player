import React, { useState } from 'react'
import HotList from "./HotList.json"
import MusicCard from './MusicCard'
import "./style.css"
export default function HotListCard() {
  const [showMoreBtn, setShowMoreBtn]= useState(false)
  return (
    <div className='hotlist-row'>
      {HotList.length > 6 ? HotList.slice(0,6).map((data, index)=>(
        <MusicCard data={data} key={index} id={index} />
      )):
        HotList.map((data, index)=>(
        <MusicCard data={data} key={index} id={index} />
      ))}
      
    </div>
  )
}
