import React, { useEffect, useRef, useState } from 'react'
//import { useState } from 'react';
import {Estates} from '../dummy/imageData';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import "./slider.css";
import { useNavigate } from 'react-router-dom';

const Slider = ({slides}) => {
    const [myestates, setMyEstates] = useState([]);
  const [photos, setPhotos] = useState('');
  const fetchData = ()=>fetch('/estates').then(res=>res.json());
  useEffect(()=>{
      fetchData().then(data=>{
          setMyEstates(data);
      })
  },[]);

  const navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide =()=>{
        setCurrent(current === length-1 ? 0 : current +1);
    }
    const prevSlide =()=>{
        setCurrent(current === 0 ? length-1 : current -1);
    }

    const delay = 5000;
    const timeoutRef = useRef(null);

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(()=>{
        resetTimeout();
        timeoutRef.current = setTimeout(()=>
        setCurrent((prevIndex)=>
        prevIndex === length - 1 ? 0 : prevIndex + 1
        ),
        delay
        );
        return ()=>{
            resetTimeout();
        };
    },[current]);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

// const result = myestates.filter(item=>item.photos.length>1).map(item=>item.photos)
//console.log(result);

  return (
    <section className='slider'>
        <AiOutlineLeft className='icon' onClick={prevSlide}/>
        {myestates.filter(item=>item.photos.length>0).map((item, index)=>{
            return(
                <div className='slide__active' key={index}>
               
                    {index===current &&
                        <div  className="current__slide">
                            <img hidden ={index!==current} src={item.photos[0]} alt="" onClick={()=>navigate(`/check/${item._id}`)} />
                            <h3>{item.desc}</h3>
                        </div>
                    }
                </div>
                
            )
        })}
        <AiOutlineRight className='icon' onClick={nextSlide}/>
    </section>
  )
}

export default Slider