import React from 'react'
import HomeImage from '../Assets/HomeImage.png'
import './Home.css';


const Home = () => {
  return (
    <div className='container'>
       <div className='homeimage'>
      <img src={HomeImage} alt="" id='homeimage' />
    </div>
   

    </div>
  )
}

export default Home;