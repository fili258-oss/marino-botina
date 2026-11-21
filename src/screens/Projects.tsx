import Unimetrics  from '../assets/imgs/SoftwareUnimetricsUCCV2.jpg';
import PortadaBlueStudies  from '../assets/imgs/projects/PortadaBlueStudies.avif';
import PortadaPasesBoda  from '../assets/imgs/projects/PasesBodasAngeloCaro.png';
import PortadaSistemaQRS  from '../assets/imgs/projects/SistemaQRSBlueStudies.avif';
import RinconMascotas  from '../assets/imgs/projects/RinconDeLasMascotas.avif';
import DltVirtualTraining  from '../assets/imgs/projects/DltVirtualTraining.avif';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const classCardProjects = 'flex flex-wrap md:flex lg:flex items-center pt-4 pb-4 bg-app-greenprimary-200 h-full p-4 rounded-lg shadow-lg shadow-app-greenprimary-600/40 gap-2';
const Projects = () => {    
    return (
        <section className="grid rows bg-app-greenprimary-50 px-9 py-9 my-8 max-w-[95%] mx-auto rounded-lg shadow-lg shadow-app-greenprimary-600/60">
            <h2 className="font-inter font-bold text-[30px] md:text-[32px] lg:text-[38px] xl:text-[38px] text-app-heading">Proyectos</h2>
            <hr></hr>
                                                   
            <Swiper rewind={true} spaceBetween={30} autoplay={{ delay: 2500, disableOnInteraction: true,}} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} pagination={{ clickable: true }} modules={[Autoplay, Navigation, Pagination]} className="flex w-[100%]">                
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl sm:h-48 object-cover" src={ Unimetrics }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">Software Unimetrics UCC</h3>
                            <p className="text-[15px] text-gray-500">Sistema web para administrar citas psicologicas y analizar los diferentes reportes que se tienen en el sistema de información OPS en la universidad Cooperativa de Colombia Campus Pasto</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">PHP</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Laravel</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Livewire</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Mysql</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Apex Charts Js</li>
                            </ul>
                            <a href='https://unimetrics-ucc.com/' target='__blank' className="mt-10 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl  sm:h-48 object-cover" src={ PortadaBlueStudies }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">Portal web Blue Studies</h3>
                            <p className="text-[15px] text-gray-500">Portal web para la gestión de múltiples sitios web de la empresa Blue Studies</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">PHP</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">WordPress Headless</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">WPGraphQL</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">React Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Next Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Typescript</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Mysql</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                            </ul>
                            <a href='https://bluestudies.com/' target='__blank' className="mt-4 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide> 
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl  sm:h-48 object-cover" src={ PortadaPasesBoda }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">Invitaciones digitales para pases de boda</h3>
                            <p className="text-[15px] text-gray-500">Proyecto de invitaciones digitales para pases de boda</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">Node Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">React Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Next Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Tailwind CSS</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Typescript</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Vercel</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                            </ul>
                            <a href='https://boda-pases.vercel.app/' target='__blank' className="mt-4 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide> 
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl  sm:h-48 object-cover" src={ PortadaSistemaQRS }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">Sistema de gestión de QRS</h3>
                            <p className="text-[15px] text-gray-500">Sistema de gestión de códigos QR para la empresa Blue Studies</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">PHP</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Laravel</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">MySQL</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Vue Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Pinia Js</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Typescript</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Tailwind CSS</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                            </ul>
                            <a href='https://front-qr.btntechnology.com/auth/login' target='__blank' className="mt-4 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl  sm:h-48 object-cover" src={ RinconMascotas }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">El rincon de las mascotas</h3>
                            <p className="text-[15px] text-gray-500">Plataforma web para la publicación y búsqueda de mascotas en adopción</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">Supabase</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Next Js</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">React Js</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Typescript</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                            </ul>
                            <a href='https://bluestudies.com/' target='__blank' className="mt-4 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={classCardProjects}>
                            <img className="w-full rounded-xl  sm:h-48 object-cover" src={ DltVirtualTraining }  alt="article" />
                            <li className="py-2">
                            <h3 className="text-[18px] font-semibold text-slate-800">Dlt Virtual Training</h3>
                            <p className="text-[15px] text-gray-500">Plataforma web LMS para la gestión de cursos virtuales para la empresa Drummond LTD</p>
                            </li>
                            <ul className="flex flex-wrap gap-2">
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 text-base text-white">Laravel</li>
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Livewire</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Tailwind CSS</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">Nwidart</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">AWS Bucket S3</li>                                
                                <li className="rounded-full bg-app-greenprimary-400 px-4 py-1 ml-2 text-base text-white">JavaScript</li>
                            </ul>
                            <a href='https://dltdvirtualtraining.co/login' target='__blank' className="mt-4 bg-app-greenprimary-600 hover:bg-app-greenprimary-700 text-white font-bold py-2 px-4 rounded-full w-auto">Ver proyecto</a>
                    </article>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}

export default Projects
