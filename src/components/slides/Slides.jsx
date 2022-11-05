import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './slides.css';

const Slides = ({slides}) => {
  const [myestates, setMyEstates] = useState([]);
  useEffect(()=>{
    axios.get('/estates').then(res=>{
      setMyEstates(res.data);
    })
  },[])
  // console.log(myestates)
  return (
    <div className="slider__main">
      <div className = 'slider' >
          {
            myestates.filter(item=>item.photos.length>0).map((item, index)=>(
              <div key={index} className='slides'>
                <input type="radio" name="radio-btn" id={`radio${index}`} />
                <div className="slide">
                  <img src={item.photos[0]} alt="" />
                </div>
                <div className="navigation-auto">
                  <div className="auto-btn"></div>
                </div>
              </div>
            ))
          }
          {myestates.filter(item=>item.photos.length>0).map((item, index)=>(
            <label className='manual-btn' htmlFor={`radio${index}`}></label>
          ))}

      </div>
    </div>
  )
}

export default Slides