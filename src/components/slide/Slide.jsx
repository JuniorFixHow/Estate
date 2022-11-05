import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './slide.css';

const Slide = ({slides}) => {
    const navigate = useNavigate()
    const [myestates, setMyEstates] = useState([])
    // const fetchData= () => axios.get('/estates')
    useEffect(()=>{
        axios.get('/estates').then(res=>{
            setMyEstates(res.data)
        })
    },[]);
// console.log(myestates)

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

    return (
        <div className='slide__main'>
            <div className="slider">
                {myestates.filter(item=>item.photos.length>0).map((item, index)=>(
                    index === current &&
                    <div key={index} className="slide">
                        <img src={item.photos[0]} alt="" onClick={()=>navigate(`/check/${item._id}`)} />
                        <div className="info">
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
                <div className="navigation">
                    <MdKeyboardArrowLeft onClick={prevSlide} className='icon' />
                    <MdKeyboardArrowRight onClick={nextSlide} className='icon' />
                </div>

                <div className="naviagation__visibility">
                    {myestates.filter(item=>item.photos.length>0).map((item, index)=>(
                        <div key={index}  className={index === current ? "slide__icon__color" : "slide__icon"}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slide
