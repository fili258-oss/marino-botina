import Senderismo from "../assets/imgs/senderismo.svg";
import Volleybol from "../assets/imgs/volley-ball.svg";
import Football from "../assets/imgs/football.svg";
import Swimming from "../assets/imgs/swimming.svg";

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Aboutme = () => {
    return (
        <section className="grid rows bg-app-greenprimary-50 pt-36 px-9 max-w-7xl mx-auto">
            <h2 className="font-inter font-bold text-[30px] md:text-[32px] lg:text-[38px] xl:text-[38px]  text-app-heading">Sobre mí</h2>
            <hr></hr>
            <p className="">Ingeniero de Software y desarrollador web Full Stack.</p>
            <p>Me apasiona construir soluciones de software personalizadas que se adapten a las necesidades de las empresas, en mi trayecto como desarrollador web he tenido la oportunidad de trabajar con las siguientes tecnologías y lenguajes de programación: PHP, Laravel, SpringBoot, Codeigniter, Vue JS, Django, Angular, Bootsrap, jQuery.</p>
            <p>Me especializo en el desarrollo de APIS con frameworks como: SpringBoot, Laravel, Codeigniter y Django. </p>
            <p>Desarrollo frontend con frameworks como Vue js, Angular y Tailwind CSS.</p>            
            <p>En mis tiempos libres disfruto leer libros, practicar natación, hacer senderismo, jugar futbol, salir a rodar en moto, compartir con mi familia y aprender nuevas tecnologías para desarrollo web 👨‍💻💻🚀</p>            
            <p>Siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y creciendo tanto personal como profesionalmente en el campo de desarrollo web.</p>
            <p>¡Para mi la programación es como un super poder!</p>
            <h2 className="font-inter font-bold text-[18px] py-4">Mis deportes favoritos</h2>
            <ul className="flex flex-row  gap-3 mb-4">
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Senderismo } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Volleybol } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Football } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Swimming } className="w-[30px] h-[30px]" alt="" /></li>                                
            </ul>
            <ul className="flex flex-row text-app-greenprimary-50 gap-3 py-3">
                <li><a download="HojaDeVidaMarinoBotina.pdf" href="https://drive.google.com/uc?export=download&id=1uR7dFbGXi14RYF6Vw1jYcb8lpKqnz9Mb" className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold">Descargar CV <BsFileEarmarkArrowDownFill className="w-5 h-5 ml-4"/></a></li>                
            </ul>                            
        </section>

    )
}

export default Aboutme
