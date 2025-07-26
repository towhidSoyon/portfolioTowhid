import './App.css'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
 

  return (
    <>
    <Header />
     <Hero />
     <About />
     <Project />
      <Experience />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
