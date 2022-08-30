import React, { useEffect, useRef, useState } from 'react'
//import { useState } from 'react';
import {Estates} from '../dummy/imageData';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import "./slider.css";

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide =()=>{
        setCurrent(current === length-1 ? 0 : current +1);
    }
    const prevSlide =()=>{
        setCurrent(current === 0 ? length-1 : current -1);
    }

    const delay = 2500;
    const timeoutRef = useRef(null);

    function resetTinout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(()=>{
        resetTinout();
        timeoutRef.current = setTimeout(()=>
        setCurrent((prevIndex)=>
        prevIndex === length - 1 ? 0 : prevIndex + 1
        ),
        delay
        );
        return ()=>{
            resetTinout();
        };
    },[current]);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

  return (
    <section className='slider'>
        <AiOutlineLeft className='icon' onClick={prevSlide}/>
        {Estates.map((item, index)=>{
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index===current &&
                        <div className="current__slide">
                            <img  src={item.image} alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
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