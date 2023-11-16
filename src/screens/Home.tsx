

const Home = () => {
    return (
        <section className='grid grid-cols-[50%_1fr] h-screen'>
            <article className="grid col bg-app-sections items-center justify-center">                
            <img src="../src/assets/imgs/MarinoBotina.png" className="mx-auto " alt="Imagen Perfil" />
            </article>
            <article className="grid col bg-app-greenprimary-50 pt-36 px-9">
                <h2 className="font-inter font-bold text-[4rem] text-app-heading">¡Hola, soy Marino!</h2>
                <h3 className="font-inter font-bold text-[32px] text-app-greenprimary-400">Desarrollo de aplicaciones web|</h3>
                <p>Soy ingeniero de software, amante del deporte y los viajes en moto. Me dedico a crear aplicaciones que viven en la web, con tecnologías como: PHP, Laravel, Livewire, Django, React JS, Angular y Vite JS.</p>
                <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                    <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Sobre mí</button></li>
                    <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Mis habilidades</button></li>                    
                </ul>
            </article>
        </section>
    )
}

export default Home
