import React, { useState } from 'react'
import "./cards.css";
import {Estates} from "../dummy/imageData";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Cards = ({search, setSearch}) => {
    // const [search, setSearch] = useState([]);
    const [myestates, setMyEstates] = useState([]);
    const [photo, setPhoto] = useState([]);
    const fetchData = ()=>fetch('/estates').then(res=>res.json());
    useEffect(()=>{
        fetchData().then(data=>{
            setMyEstates(data);
        })
    },[]);

    //result =  myestates.filter(item=>item.photos.length>0).map(item=>item.photos);
    
    //console.log(photo);
    return (
        <div className='cards'>
            {myestates.filter((item)=>{
                return search.toLowerCase() === '' ? item : 
                item.name.toLowerCase().includes(search) || item.city.toLowerCase().includes(search)
            }).map(estate=>(
                <div className="container" key={estate._id}>
                    <h2>{estate.name}</h2>
                    <div className="image__container">
                        {/* <h5>{estate.name}</h5> */}
                        <img src={estate?.photos[0]} alt="" />
                        
                    </div>
                    <div className="card__bot">
                        <div className="cbleft">
                            <h4 className='city'>{estate.city }</h4>
                            <Link to={`/check/${estate._id}`} style={{textDecoration:"none"}}>
                                <div className="button">Check</div>
                            </Link>
                        </div>
                        <h4>GHC {estate.price}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
