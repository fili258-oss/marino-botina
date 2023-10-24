import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './screens/Home';
import Aboutme from './screens/Aboutme';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import Contact from './screens/Contact';

function App() { 
  return (
    <div className='grid grid-cols-[83px_1fr] w-screen h-screen'>
      <Navbar />
      <section>
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

  )
}

export default App
