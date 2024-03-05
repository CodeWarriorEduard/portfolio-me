import { useEffect, useState } from 'react'
import './HeroStyle.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])

    return (
    <section className="hero-container bg-animation">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='stars4'></div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Proyectos</li>
            </ul>
           
        </nav>
        <div className='hero-text'>
            <p id='name'>Hi, i'm Rafael.</p>
            <p data-aos="fade-up">I'm a Software Developer</p>
            <button data-aos="fade-up" className='see-proyects'>Ver Proyectos</button>
        </div>
    </section>
  )
}

export default Hero