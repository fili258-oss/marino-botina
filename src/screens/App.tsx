import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Home from '../screens/Home';
import Aboutme from '../screens/Aboutme';
import Skills from '../screens/Skills';
import Projects from '../screens/Projects';
import Experience from '../screens/Experience';
import Contact from '../screens/Contact';
import ParticlesBackground from '../components/ParticlesBackground';
import HomeMarino from '../assets/imgs/MarinoBotina.png';


function App() { 
  return (
    <main>
      <div className='grid grid-cols-[100px_1fr] w-screen h-screen '>            
      <Navbar />    
      <section className='grid grid-cols-[50%_1fr] '>
      
          <article className="grid col items-center justify-center ">  
            <ParticlesBackground/>              
              <img src={ HomeMarino} className="h-[469px] w-[469px]" alt="Imagen Perfil" />
          </article>
                
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<Aboutme />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
      </section>            
    </div>
    </main>
    
    
    

  );
}

export default App
