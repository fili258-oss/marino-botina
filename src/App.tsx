import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Aboutme from './screens/Aboutme';




function App() { 
  return (
    <div className='grid grid-cols-[100px_1fr] w-screen h-screen font-roboto'>
      <Navbar />
      <section>
          <Routes>
            <Route path='/' element={<Aboutme />} />
          </Routes>
      </section>
    </div>

  )
}

export default App
