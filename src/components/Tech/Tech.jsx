import React, { useEffect } from 'react'
import './TechStyle.css'
import Card from '../CardSkills/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tech() {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  }, [])

    const technologies = [
        {
          name: "Java",
          image: "src/assets/javalogo.png"
        },
        {
          name: "JavaScript",
          image: "src/assets/javascript.png"
        },
        {
          name: "HTML",
          image: "src/assets/html.png"
        },
        {
          name: "CSS",
          image: "src/assets/css.png"
        },
        {
          name: "React",
          image: "src/assets/react.png"
        },
        {
          name: "Spring Boot",
          image: "src/assets/spring.png"
        },
        {
          name: "Node.js",
          image: "src/assets/nodejs.png"
        }
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
  )
}

export default Tech