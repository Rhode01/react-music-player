import React from 'react'
import Header from '../components/Navigation/Header'
import LeftNavBar from '../components/Navigation/LeftNavBar'
import "./nav.css"
import HotList from '../components/HotList/HotList'
import Slider from './Slider'

const HomePage = () => {
  return (
    <div className='container'>
        <Header />
        <div className="content">
            <LeftNavBar />
            <div className="body">
              <div className="slider-section">
                <Slider />
              </div>
              <div className="hotlist-section">
                <h4>HotList</h4>
                {/* <HotList /> */}
              </div>
            </div>   
        </div>
    </div>
  )
}

export default HomePage