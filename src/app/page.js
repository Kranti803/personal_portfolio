
import About from '@/components/About';
import Hero from '../components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from './../components/Services';


export default function Home() {
  return (
    <main className="bg-[#0a192f] text-white">
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Services/>
    </main>
  )
}
