
import About from '@/components/About';
import Hero from '../components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from './../components/Services';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main className="bg-[rgb(32,33,36)] text-white">
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
    </main>
  )
}
