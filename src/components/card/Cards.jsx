import React from 'react'
import "./cards.css";
import {Estates} from "../dummy/imageData";
const Cards = () => {
    return (
        <div className='cards'>
            {Estates.map(estate=>(
                <div className="container" key={estate.id}>
                    <h2>{estate.name}</h2>
                    <div className="image__container">
                        <h5>{estate.name}</h5>
                        <img src={estate.image} alt="" />
                        
                    </div>
                    <div className="card__bot">
                        <div className="cbleft">
                            <h4 className='city'>{estate.city }</h4>
                            <div className="button">Check</div>
                        </div>
                        <h4>{estate.price}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
