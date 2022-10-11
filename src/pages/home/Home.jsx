import React from 'react'
import Cards from '../../components/card/Cards';
import { Estates } from '../../components/dummy/imageData';
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider';
import {BiSearch} from 'react-icons/bi'
import "./home.css";


const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Slider slides={Estates}/>
        <div className="search">
          <div className="searchcontainer">
            <input type="text"  />
            <div className="searchicon">
              <BiSearch className='icon'/>
            </div>
          </div>
        </div>
        <Cards/>
    </div>
  )
}

export default Home