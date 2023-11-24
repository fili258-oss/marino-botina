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
    <div className='grid xl:grid-cols-[90px_1fr] sm:grid-cols-[70px_1fr] w-screen h-screen '>
      <Navbar />
                          
        <main className='grid grid-rows-2 xl:grid-cols-[50%_1fr] sm:grid-rows-none order-2'>
        
            <section className="grid rows justify-items-center sm:px-4">  
              <ParticlesBackground/>              
                <img src={ HomeMarino} className="xl:h-[469px] xl:w-[469px] " alt="Imagen Perfil" />
            </section>
                  
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutme' element={<Aboutme />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
        </main>            
      
    </div>
    
    
    

  );
}

export default App
