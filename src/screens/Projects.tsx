import Unimetrics  from '../assets/imgs/SoftwareUnimetricsUCCV2.jpg';
import PortalHeroica  from '../assets/imgs/PortalWebCervezaHeroica.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Projects = () => {
    return (
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9 overflow-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Proyectos</h2>
            <hr></hr>
            
                           
        <Swiper navigation={true} modules={[Navigation]} className="w-[100%] px-6">
            <SwiperSlide>
            <ul className="grid cols-1 items-center justify-items-center gap-y-10 py-14 px-10 ">
                    <img className="w-[80%] rounded-xl  sm:h-48 object-cover" src={ PortalHeroica }  alt="article" />
                    <li className="py-2">
                    <h3 className="text-[18px] font-semibold text-slate-800">Heroica</h3>
                    <p className="text-[15px] text-gray-500">eCoommerce para una cervecería de Nariño llamada Heroica, los usuarios pueden registrarse y realizar sus pedidos</p>
                    </li>
                    <ul className="flex">
                    <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">Wordpress</li>
                    <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">PHP</li>
                    </ul>
            </ul>                
            </SwiperSlide>
            <SwiperSlide>
            <ul className="grid cols-1 items-center justify-items-center gap-y-10 py-14 px-10 ">
                    <img className="w-[80%] rounded-xl  sm:h-48 object-cover" src={ Unimetrics }  alt="article" />
                    <li className="py-2">
                    <h3 className="text-[18px] font-semibold text-slate-800">Software Unimetrics UCC</h3>
                    <p className="text-[15px] text-gray-500">Sistema para analizar los diferentes reportes que se tienen en el sistema de información OPS en la universidad Cooperativa de Colombia Campus Pasto</p>
                    </li>
                    <ul className="flex">
                    <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">PHP</li>
                    <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Laravel</li>
                    </ul>
            </ul>                 
            </SwiperSlide>
            
        </Swiper>
        </article>
    )
}

export default Projects
