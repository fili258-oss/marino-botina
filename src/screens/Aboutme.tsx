import Senderismo from "../assets/imgs/senderismo.svg";
import Volleybol from "../assets/imgs/volley-ball.svg";
import Football from "../assets/imgs/football.svg";
import Swimming from "../assets/imgs/swimming.svg";

import { BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Aboutme = () => {
    return (
        <section className="grid rows bg-app-greenprimary-50 pt-36 px-9 overflow-y-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Sobre mí</h2>
            <hr></hr>
            <p className="">Soy una persona  proactiva y empatica, con más de 2 años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web y CMS, he trabajado con empresas de Nariño y de otros departamentos de Colombia. Me gusta tanto backend como el frontend, lo que me ha permitido crear interfaces de usuario atractivas y funcionales. Además, mi experiencia en frameworks web me ha permitido construir aplicaciones web dinámicas y escalables con un backend robusto.</p>
            <p>¡Para mi la programación es como un super poder!</p>
            <h2 className="font-inter font-bold text-[18px] py-4">Mis deportes favoritos</h2>
            <ul className="flex flex-row  gap-3 mb-4">
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Senderismo } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Volleybol } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Football } className="w-[30px] h-[30px]" alt="" /></li>
                <li className="border-solid border-app-greenprimary-500 border-2 rounded-lg py-4 px-4"><img src={ Swimming } className="w-[30px] h-[30px]" alt="" /></li>                                
            </ul>
            <ul className="flex flex-row text-app-greenprimary-50 gap-3 py-3">
                <li><a download="HojaDeVidaMarinoBotina.pdf" href="https://drive.google.com/uc?export=download&id=132xxioTauvyKCMXc0ybdMrcSmfT8991x" className="inline-flex items-center  p-4 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-600 text-center rounded-full font-semibold">Descargar CV <BsFileEarmarkArrowDownFill className="w-5 h-5 ml-4"/></a></li>                
            </ul>
            
                
        </section>

    )
}

export default Aboutme
