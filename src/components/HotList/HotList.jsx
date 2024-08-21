import React from 'react'
import HotList from "./HotList.json"
import MusicCard from './MusicCard'
export default function HotList() {
    console.log(HotList);
    
  return (
    <div>
         {HotList.map((data, index)=>(
            <p>G</p>
            // <MusicCard data={data} key={index} id={index} />
        ))}
    </div>
  )
}
