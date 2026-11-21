import Senderismo from "../assets/imgs/senderismo.svg";
import Volleybol from "../assets/imgs/volley-ball.svg";
import Football from "../assets/imgs/football.svg";
import Swimming from "../assets/imgs/swimming.svg";
import SobreMi from "../assets/imgs/MiExperiencia.png";
// @ts-ignore Tooltip is a JavaScript component without a TypeScript declaration.
import Tooltip from '../components/shared/Tooltip';

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Aboutme = () => {
    return (
        <section className="bg-app-greenprimary-50 px-9 py-9 my-8 max-w-[95%] mx-auto rounded-lg shadow-lg shadow-app-greenprimary-600/60">
            <h2 className="font-inter font-bold text-[30px] md:text-[32px] lg:text-[38px] xl:text-[38px]  text-app-heading">Sobre mí</h2>
            <hr></hr>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 my-8">
                <article className="p-4 md:p-2 order-2 lg:order-2">
                    
                    <p>Ingeniero de Software y desarrollador web Full Stack.
                    Me apasiona construir soluciones de software personalizadas que se adapten a las necesidades de las empresas, en mi trayecto como desarrollador web he tenido la oportunidad de trabajar con las siguientes tecnologías y lenguajes de programación: PHP, Laravel, SpringBoot, Codeigniter, Vue JS, Django, Angular, Bootsrap, jQuery.
                    Me especializo en el desarrollo de APIS con frameworks como: SpringBoot, Laravel, Codeigniter y Django.
                    Desarrollo frontend con frameworks como Vue js, Angular y Tailwind CSS.
                    En mis tiempos libres disfruto leer libros, practicar natación, hacer senderismo, jugar futbol, salir a rodar en moto, compartir con mi familia y aprender nuevas tecnologías para desarrollo web 👨‍💻💻🚀
                    Siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y creciendo tanto personal como profesionalmente en el campo de desarrollo web.
                    ¡Para mi la programación es como un super poder!</p>
                                                            
                    <ul className="flex flex-wrap md:flex items-center gap-3 mb-4 mt-4">
                        <h2 className="font-inter font-bold text-[18px] py-4">Mis deportes favoritos:</h2>
                        <div className="flex flex-wrap gap-2">
                            <Tooltip content={<div>Senderismo</div>} placement="top">
                                <li className="border-solid cursor-pointer border-app-greenprimary-500 border-2 rounded-full py-2 px-2"><img src={ Senderismo } className="w-[25px] h-[25px]" alt="" /></li>
                            </Tooltip>
                            <Tooltip content={<div>Volleybol</div>} placement="top">
                                <li className="border-solid cursor-pointer border-app-greenprimary-500 border-2 rounded-full py-2 px-2"><img src={ Volleybol } className="w-[25px] h-[25px]" alt="" /></li>
                            </Tooltip>
                            <Tooltip content={<div>Fútbol</div>} placement="top">
                                <li className="border-solid cursor-pointer border-app-greenprimary-500 border-2 rounded-full py-2 px-2"><img src={ Football } className="w-[25px] h-[25px]" alt="" /></li>
                            </Tooltip>
                            <Tooltip content={<div>Natación</div>} placement="top">
                                <li className="border-solid cursor-pointer border-app-greenprimary-500 border-2 rounded-full py-2 px-2"><img src={ Swimming } className="w-[25px] h-[25px]" alt="" /></li>
                            </Tooltip>
                        </div>
                    </ul>                                      
                    <ul className="flex text-app-greenprimary-50 gap-3 py-3">
                        <li><a download="HojaDeVidaMarinoBotina.pdf" href="https://drive.google.com/uc?export=download&id=1mYEM5u6DJhjDQ_m-EPzbjC0c1AqI8PPG" className="inline-flex items-center  p-4 text-[12px] md:text-[14px] text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold">Descargar CV <BsFileEarmarkArrowDownFill className="w-5 h-5 ml-4"/></a></li>                
                    </ul>
                </article>
                <article className="flex justify-center p-4 lg:p-10 order-1 lg:order-1">
                    <img src={ SobreMi } className="h-[230px] md:h-[270px] xl:h-[369px] w-auto object-contain" alt="Marino Botina" />
                </article>
            </div>
            
                                        
        </section>

    )
}

export default Aboutme
