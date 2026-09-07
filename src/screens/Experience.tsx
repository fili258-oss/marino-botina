import { Tab } from '@headlessui/react'
import {     
    BsFillCalendar2CheckFill,
    BsBriefcaseFill
     } from "react-icons/bs";
     import { FaRocket } from "react-icons/fa";

const Experience = () => {
    return (
        <section className="grid rows bg-app-greenprimary-50 pt-32 px-9">
            <h2 className="font-inter font-bold text-[30px] md:text-[32px] lg:text-[38px] xl:text-[38px]  text-app-heading">Mi experiencia</h2>
            <hr className="mb-4"></hr>
            <Tab.Group>
                <Tab.List className="flex flex-row ">
                    <Tab className="basis-1/2 inline-flex ml-3 p-3 text-[24px] text-app-gray-500 border-b focus:border-app-greenprimary-400 border-app-gray-100 transition duration-200 ease-in hover:text-app-greenprimary-400 focus:text-app-greenprimary-400 focus:outline-none font-semibold"><FaRocket className="mr-3 mt-2 text-app-gray-600" />Acádemica</Tab>
                    <Tab className="basis-1/2 inline-flex ml-3 p-3 text-[24px] text-app-gray-500 border-b focus:border-app-greenprimary-400 border-app-gray-100 transition duration-200 ease-in hover:text-app-greenprimary-400 focus:text-app-greenprimary-400 focus:outline-none font-semibold"><BsBriefcaseFill className="mr-3 mt-2 text-app-gray-600" />Laboral</Tab>                    
                </Tab.List>
                <Tab.Panels className="p-4 mb-20">
                    <Tab.Panel>
                        <ul className="">
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Agosto 2021 - Agosto 2025</span>
                                <h3 className="font-bold">Pregrado Ing de Software UCC</h3>
                                <p>Ingeniero de Software graduado en la Universidad Cooperativa de Colombia - Campus Pasto</p>
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Agosto 2023</span>
                                <h3 className="font-bold">Bootcamp Desarrollo FullStack</h3>
                                <p>Participe de un bootcamp de desarrollo full stack con los stacks: Nest JS, Angular y desarrollo de aplicaciones móviles con Flutter y Dart</p>
                            </li>                                                        
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Mayo - Junio 2021</span>
                                <h3 className="font-bold">Master en PHP, SQL, POO, MVC, Laravel, Symfony y WordPress</h3>
                                <p>Formación online a través de la academia de aprendizaje Udemy</p>
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Noviembre 2019 - Agosto 2020</span>
                                <h3 className="font-bold">Técnico en desarrollo de software</h3>
                                <p>Formación académica realizada con el Servicio Nacional de Aprendizaje SENA, en convenio con ParqueSoft Nariño</p>
                            </li>
                        </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                        <ul className="">
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Febrero 2024 - Enero 2026</span>
                                <h3 className="font-bold">Desarrollador Full-Stack Findcor S.A.S</h3>     
                                <p>- Desarrolle una plataforma web, para el transporte de carga pesada en Colombia, utilizando principios SOLID, conectada a un chatbot de WhatsApp, simple y con un menú fácil de utilizar, tanto para conductores como para clientes.</p>
                                <p>- Implementé prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de entrega bajando los tiempos de despliegue más de un 80%.</p>
                                <p>- Implementé una arquitectura de microservicios, una aplicación Codeigniter, para el dashboard y una aplicación para el motor conversacional cada sistema se comunicaba mutuamente y estaba conectado a su propia base de datos y a la API de Twilio.</p>
                                <p>- Implementé la pasarela de pagos Wompi.</p>
                                <p>- Optimicé la conexión a la API de Siigo Nube para gestión de la facturación electrónica en los servicios ofrecidos en la plataforma, reduciendo en un 90% los errores al momento de crear facturas de venta electrónica.</p>
                                <p>- Implementé pruebas de carga y estrés y test unitario de módulos para garantizar un correcto funcionamiento de la plataforma.</p>
                                <p>- Desarrollé y optimicé interfaces gráficas utilizando CSS, JS y Vue js, utilizando el principio Mobile First, lo que mejoró la experiencia del usuario en un 90%.</p>
                                <p>- Desarrollé un plugin de Wordpress para realizar la creación de Facturas de venta a través de la API de Siigo Nube, sincronización de precios, gestión de clientes, gestión de stock en inventario y encriptación de claves de autenticación.</p>
                                <p>- Administré y desplegué aplicaciones web en servidores Ubuntu/Alma Linux y Nginx Web Server.</p>                                
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Agosto 2020 - Diciembre 2023</span>
                                <h3 className="font-bold">Desarrollador Full-Stack ParqueSoft Nariño</h3>
                                <p>- Desarrollé una plataforma web LMS, Diseñada especialmente para emprendedores y empresarios del departamento de Nariño.</p>
                                <p>- Desarrollamos la aplicación utilizando el marco Laravel + Livewire, PHP, Mysql, CSS y JS.</p>
                                <p>- Aplicamos el patrón de arquitectura MVC para obtener una aplicación robusta, escalable y fácil de mantener, lo que mejoró la facilidad de integración de nuevos desarrolladores en el equipo en un 85%.</p>
                                <p>- Desarrollé varios chatbots empresariales utilizando herramientas como BootPress, diseñadas específicamente para el servicio de atención al cliente, que funcionaban a través de sitios web, WhatsApp, Messenger e Instagram. Esto mejoró la tasa de respuesta en un 90 % para las empresas y emprendimientos.</p>
                                <p>- Implementé varias plataformas de comercio electrónico personalizadas utilizando herramientas como WordPress y WooCommerce: desarrollé plugins y temas personalizados, lo que mejoró en un 95 % el proceso de facturación electrónica en ventas realizadas a través de tiendas online implementadas con WooCommerce.</p>
                                <p>- Administré y desplegué aplicaciones web en servidores Ubuntu/Nginx Web Server.</p>
                            </li>
                            
                        </ul>                        
                    </Tab.Panel>                    
                </Tab.Panels>
            </Tab.Group>            
                
        </section>
    )
}

export default Experience



