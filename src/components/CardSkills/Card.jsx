import React from 'react'
import './CardStyle.css'


function Card(props) {
  return (
    <div data-aos="fade-left" className='card-container'>
            <img src={props.image} alt="tech"/>  
            <p>{props.name}</p>      
    </div>
  )
}

export default Card