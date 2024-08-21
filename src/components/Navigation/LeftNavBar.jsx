import React from 'react'
import { FaUser, FaHome,FaFire, FaCompactDisc, FaVideo, FaPlay } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { PiPlaylistBold } from 'react-icons/pi'
const LeftNavBar = () => {
  return (
    <div>
        <div className='left-nav' >
            <div className="user-profile">
             <span>  <FaUser className='icon2' /> <Link to="/login" className='link' >Login</Link> / 
               <Link to="/signup" className='link' >Signup</Link> </span>
            </div>
            <div className="navlinks">
                <span className="sm-title">Music</span>
                <div className="links">
                    <ul>
                        <li>
                          <span className='icon'> <FaHome /> <Link to="/home" className='link'>Home</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <FaFire /> <Link to="/home" className='link'>Trending</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <FaCompactDisc /> <Link to="/home" className='link'>New</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <FaUser /> <Link to="/home" className='link'>Artists</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <FaVideo /> <Link to="/home" className='link'>Video</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <PiPlaylistBold /> <Link to="/home" className='link'>PlayLists</Link> </span>
                        </li>
                        <li>
                         <span className='icon'> <FaChartSimple /> <Link to="/home" className='link'>Charts</Link> </span>
                        </li>
                        <li>
                        <span className='icon'> <FaCompactDisc /> <Link to="/home" className='link'>Genres</Link> </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftNavBar