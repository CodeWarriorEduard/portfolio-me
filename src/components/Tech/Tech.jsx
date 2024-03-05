import React, { useEffect } from 'react';
import './TechStyle.css';
import Card from '../CardSkills/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importa las imágenes utilizando rutas relativas
import javaLogo from '../../assets/javalogo.png';
import javascriptLogo from '../../assets/javascript.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import reactLogo from '../../assets/react.png';
import springLogo from '../../assets/spring.png';
import nodejsLogo from '../../assets/nodejs.png';

function Tech() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const technologies = [
    { name: "Java", image: javaLogo },
    { name: "JavaScript", image: javascriptLogo },
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "React", image: reactLogo },
    { name: "Spring Boot", image: springLogo },
    { name: "Node.js", image: nodejsLogo }
  ];
      
  return (
    <div className='tech-container'>
      <h2 data-aos="fade-up">SKILLS</h2>
      <div className="skills-cards">
        {
          technologies.map((tech, index) => {
            return <Card key={index} name={tech.name} image={tech.image} />;
          })
        }
      </div>
    </div>
  );
}

export default Tech;
