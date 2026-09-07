import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Home from '../screens/Home';
import Aboutme from '../screens/Aboutme';
import Skills from '../screens/Skills';
import Projects from '../screens/Projects';
import Experience from '../screens/Experience';
import Contact from '../screens/Contact';
import ParticlesBackground from '../components/ParticlesBackground';



function App() { 
  return (    
    <div className='grid'>
      <ParticlesBackground />
      <div className='grid grid-cols-1 md:grid-cols-[90px_1fr] w-screen h-screen '>
          <Navbar />                                
          <main className='grid grid-rows-1 overflow-y-auto h-screen order-2'>                                      
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
    </div>
    
    
    
    

  );
}

export default App
