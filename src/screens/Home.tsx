import { BsArrowRight, BsFillPersonCheckFill } from "react-icons/bs";


const Home = () => {
    return (
                    
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">¡Hola, soy Marino!</h2>
            <h3 className="font-inter font-bold text-[32px] text-app-greenprimary-400">Desarrollo de aplicaciones web|</h3>
            <p>Soy ingeniero de software, amante del deporte y los viajes en moto. Me dedico a crear aplicaciones que viven en la web, con tecnologías como: PHP, Laravel, Livewire, Django, React JS, Angular y Vite JS.</p>
            
            <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                <li><button type="button" className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold">Más sobre mí <BsArrowRight  className="w-5 h-5 ml-4"/></button></li>                
                <li><button type="button" className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold">Habilidades <BsFillPersonCheckFill  className="w-5 h-5 ml-4"/></button></li>                
            </ul>
        </article>
        
    )
}

export default Home
