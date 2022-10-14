import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (
    <div className='video'>
        <h1>Watch Our Video!</h1>
        <ReactPlayer 
            width='100%'
            height='50vh'
            autoPlay={true}
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
        />
    </div>
  )
}

export default Video