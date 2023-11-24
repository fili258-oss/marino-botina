import { BsArrowRight, BsFillPersonCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useNavbarStore } from '../store/navbarStore';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const { selectedItemNavbar } = useNavbarStore();
    return (
                    
        <section className="grid rows bg-app-greenprimary-50 pt-36 px-9">
            <h2 className="font-inter font-bold text-[4rem]  text-app-heading">¡Hola, soy Marino!</h2>
            <h3 className="font-inter font-bold text-[32px] text-app-greenprimary-400">
            <Typewriter 
                options={{
                    strings: ['Desarrollo frontend con Angular', 'Desarrollo backend con Laravel','Administración de bases de datos'],
                    autoStart: true,
                    loop: true,
                    
                }} 
            />
            </h3>
            
            <p>Soy ingeniero de software, amante del deporte y los viajes en moto. Me dedico a crear aplicaciones que viven en la web, con tecnologías como: PHP, Laravel, Livewire, Django, React JS, Angular y Vite JS.</p>
            
            <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                <li>
                    <NavLink
                    to='/aboutme'
                    onClick={() => {
                        selectedItemNavbar(2);
                    }}
                    className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold"
                    >
                    Más sobre mí
                    <BsArrowRight  className="w-5 h-5 ml-4"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/skills'
                    onClick={() => {
                        selectedItemNavbar(3);
                    }}
                    className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold"
                    >
                    Habilidades
                    <BsFillPersonCheckFill  className="w-5 h-5 ml-4"/>
                    </NavLink>
                </li>                                
            </ul>
        </section>
        
    )
}

export default Home
