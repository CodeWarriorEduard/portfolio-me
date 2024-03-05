import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectsStyle.css'
import ProjectCards from '../ProjectCards/ProjectCards'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
      }, [])

    const project = [{
        titulo: "Web Scrapper con Python para Noticias",
        descripcion: "Un proyecto que utiliza Python para recopilar noticias de varios sitios web mediante técnicas de web scrapping. El objetivo es extraer datos estructurados de noticias y presentarlos de manera útil para el usuario.",
        tecnologias: ["Python ", "Beautiful Soup ", "Requests ", "JSON "],
        funcionalidades: ["Recopilación de noticias de varios sitios web", "Extracción de datos estructurados", "Presentación de noticias en formato legible para el usuario"],
        autor: {
          nombre: "Nombre del autor",
          email: "email@example.com"
        },
        fecha_creacion: "2024-03-04",
        version: "1.0"
        },
        {
            titulo: "Coming Soon..."
        }
    ]   
 


  return (
    <div className='projects-container'>
        <h2 data-aos="fade-left">PROJECTS</h2>
        <div className="projects-cards-container">
            {
                project.map((pro, index) => {
                    return <ProjectCards  key={index} titulo={pro.titulo} descripcion={pro.descripcion} tech={pro.tecnologias} />;
                })
            }
        </div>
    </div>
  )
}

export default Projects