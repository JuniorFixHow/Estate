import React from 'react'
import Cards from '../../components/card/Cards';
import { Estates } from '../../components/dummy/imageData';
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider';
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Slider slides={Estates}/>
        <Cards/>
    </div>
  )
}

export default Home