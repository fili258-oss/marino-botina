function App() { 
  return (
    <>
    <div className='grid grid-cols-[200px_1fr] w-screen h-screen bg-gray-700 font-roboto'>
      <section className=' bg-blue-300'>
        <p>menu</p>
      </section>


      <main className='grid grid-rows-[60px_1fr_40px]'>
        <header className=' bg-app-test'>
          <p>header</p>
        </header>
        <section className='grid grid-cols-[1fr_350px] bg-red-400'>
          <section className="grid grid-rows-[250px_1fr]">
            <p>Marino Botina</p>
            <p className="bg-red-300">2</p>
          </section>
          <section className="grid grid-rows-[350px_1fr] bg-red-200">
            <p>1</p>
            <p className="bg-red-100">2</p>
          </section>
        </section>
        <footer className=' bg-green-300'>
          <p>footer</p>
        </footer>
      </main>


    </div>

      <h1 className='text-3xl font-bold text-app-greenprimary-600'>
        Hello world!
      </h1>
    </>
  )
}

export default App
