import React, { useEffect, useState } from 'react'
import Cards from '../../components/card/Cards';
import { Estates } from '../../components/dummy/imageData';
import Header from '../../components/header/Header'
import Slide from '../../components/slide/Slide';
import {BiSearch} from 'react-icons/bi'
import "./home.css";
import Footer from '../../components/footer/Footer';


const Home = () => {
  const [search, setSearch] = useState('');
  
  //console.log(photos);
  return (
    <div className="main__home">     
    <div className='home'>
        <Header/>
        <div className='notice'>
          <h1>DISCOVER YOUR MOST <br/> COMFORTABLE PLACE <br/> FOR YOUR FUTURE LIFE</h1>
          <h4>Made for your convenience; for a beautiful future and for your family</h4>
        </div>
        <Slide slides={Estates}/>
        <div className="search">
          <div className="searchcontainer">
            <input type="text" placeholder='Enter estate name or city' onChange={(e)=>setSearch(e.target.value)} />
            <div className="searchicon">
              <BiSearch className='icon'/>
            </div>
          </div>
        </div>
        <div className="down">
          <Cards search={search} setSearch={setSearch} />
        </div>
    </div>
    </div>
  )
}

export default Home