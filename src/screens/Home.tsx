import { BsArrowRight, BsFillPersonCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useNavbarStore } from '../store/navbarStore';
import Typewriter from 'typewriter-effect';
import HomeMarino from '../assets/imgs/MarinoBotina.png';

const Home = () => {
    const { selectedItemNavbar } = useNavbarStore();
    return (
                    
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[50%_1fr] items-center mx-4">
            <article>
            <section className="justify-items-center py-10">                                          
                <img src={ HomeMarino} className="h-[200px] md:h-[270px] xl:h-[369px] w-auto" alt="Imagen Perfil" />
            </section>
            </article>
            <article className ="flex flex-col gap-12 p-8 bg-app-greenprimary-100/90 rounded-lg shadow-lg shadow-app-greenprimary-600/60">
                <h2 className="font-inter font-bold text-[30px] md:text-[32px] lg:text-[38px] xl:text-[38px]  text-app-heading">¡Hola, soy Marino!</h2>
                <h3 className="font-inter font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-app-greenprimary-600">
                <Typewriter 
                    options={{
                        strings: ['Desarrollo frontend con Angular', 'Desarrollo backend con Laravel','Administración de bases de datos'],
                        autoStart: true,
                        loop: true,
                        
                    }} 
                />
                </h3>
                
                <p className="text-[17px] md:text-[19px] lg:text-[21px] xl:text-[23px]">Soy ingeniero de software, amante del deporte y los viajes en moto. Me dedico a crear aplicaciones que viven en la web, con tecnologías como: PHP, Laravel, Livewire, Django, React JS, Angular y Vite JS.</p>            
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
            </article>
            
        </section>
        
    )
}

export default Home
