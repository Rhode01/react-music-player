import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { useState } from 'react'
const Header = () => {
    const [searchInput, setSearchInput] = useState("")
  return (
    <div className='nav-container'>
        <div className='left-side'>
            <div className='logo'>
                <img src="./images/logo/audio-player.png" alt="Logo of the company" className='site-logo'  />
                <span className='site-name'>Rhode Music Player</span>
            </div>  
        </div>
        <div className='search-bar'>
            <input type="text" name="" id="" className='search-field' placeholder='Search Artist, Music,Videos,Albums'  onChange={(e)=>(()=>setSearchInput(e.target.value))}/>
        </div>
        <div className='nav-menu'>
            <div>
                <Link to="/download" className='download-btn'>Download</Link>
            </div>
        </div>
    </div>
  )
}

export default Header