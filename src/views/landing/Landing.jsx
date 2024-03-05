import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Tech from "../../components/Tech/Tech"


function Landing() {
  return (
    <div className="landing">
      <Hero/>
      <Tech/>
      <Projects/>
    </div>
  )
}

export default Landing