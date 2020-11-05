import React from 'react'
import { useState, useEffect } from 'react'

export default function WeatherDayComponent({ day, dayNo, weatherClass, iconSource, minimumTemp, maximumTemp, id, today }){
    
    const [isToday, setIsToday] = useState(false)
    
    useEffect(() => {
        if (dayNo==today){
            setIsToday(true);
        }
        else{
            setIsToday(false);
        }
    })
    

    return(   
        <div>
            <li className={`Day-Card ${isToday ? 'Day-Card-Today': ''}`}>
                <h3 className='Day-Of-The-Week'>{day}</h3>
                <div className='Image-Container'>
                    <img className='Weather-Image' src={iconSource} alt='weather'/>              
                </div>
                <div className='Min-Max-Container'>
                    <div className='Min-Container'>
                        <h4 className='Minimum-Temperature'>{minimumTemp}</h4>
                    </div>
                    <div className='Max-Container'>
                        <h4 className='Maximum-Temperature'>{maximumTemp}</h4>
                    </div>
                </div>
            </li>
        </div>
    )
    }
