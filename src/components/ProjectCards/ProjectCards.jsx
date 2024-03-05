import React from 'react'
import './ProjectCardsStyle.css'
import { Link } from 'react-router-dom'
function ProjectCards(props) {
  return (
    <Link to={"/project"}>
      <div data-aos="fade-left" className='project-cards' onClick={props.onClick} >
        <h3 data-aos="fade-left">{props.titulo}</h3>
        <p data-aos="fade-left">{props.descripcion}</p>
        <p data-aos="fade-left" id='tecnologia-usada'>{props.tech}</p>
      </div>
    </Link>
  )
}

export default ProjectCards