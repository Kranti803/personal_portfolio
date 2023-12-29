
import About from '@/components/About';
import Hero from '../components/Home';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from './../components/Services';
import Contact from '@/components/Contact';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  return (
    <main className="bg-primary-color text-white">
      <ToastContainer />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}
