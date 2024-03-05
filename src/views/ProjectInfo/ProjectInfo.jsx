import React from 'react'
import './ProjectInfoStyle.css'
import Header from '../../components/Header/Header'
import ornes from '../../assets/ornes.jpeg'
import classes from '../../assets/classes.png'
function ProjectInfo() {
  return (
    <div className='container-project'>
      <Header/>
      <div className="wrapper content-project">
        <h1 style={{color:"black", textAlign:"center"}}>WEB SCRAPER CON PYTHON PARA NOTICIAS</h1>
       <div className='project-img'>
        <img style={{width:"800px", height:"400px", marginTop:"20px"}} src={ornes} alt="project-img" />
          <p style={{color:"black"}}>Interfaz gráfica del proyecto.</p>
       </div>
        <div className='text-content'>
          <p style={{color:"black"}}>Este proyecto usa Python para extraer noticias de "El Colombiano". Utiliza un patrón de diseño llamado adaptador para organizar y acceder a los datos de la página web de manera eficiente. El scraper recopila las noticias automáticamente y las guarda para su análisis o visualización posterior.</p>
        </div>
      <div className='project-img'>
        <img style={{width:"200px", height:"400px", marginTop:"20px"}} src={classes} alt="project-img" />
          <p style={{color:"black"}}>Diagrama UML del proyecto.</p>
       </div>
      </div>

    </div>
  )
}

export default ProjectInfo