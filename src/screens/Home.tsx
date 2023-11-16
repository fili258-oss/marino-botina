

const Home = () => {
    return (
        <section className='grid grid-cols-[50%_1fr]'>
            <article className="grid col bg-app-sections items-center text-center">                
            <img src="../src/assets/imgs/MarinoBotina.png" alt="Imagen Perfil" />
            </article>
            <article className="grid col bg-app-greenprimary-50 pt-36 px-9">
                <h2 className="font-inter font-bold text-[4rem] text-app-heading">¡Hola, soy Marino!</h2>
                <p>Soy ingeniero de software, amante del deporte y los viajes en moto. Me dedico a crear aplicaciones que viven en la web, con tecnologías como: PHP, Laravel, Livewire, Django, React JS, Angular y Vite JS.</p>
            </article>
        </section>
    )
}

export default Home
