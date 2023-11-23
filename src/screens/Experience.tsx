import { Tab } from '@headlessui/react'
import { 
    BsBookHalf, 
    BsBriefcaseFill,
    BsFillCalendar2CheckFill
     } from "react-icons/bs";

const Experience = () => {
    return (
        <article className="grid col bg-app-greenprimary-50 pt-32 px-9 overflow-y-auto h-screen">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Mi experiencia</h2>
            <hr></hr>
            <Tab.Group>
                <Tab.List className="text-center">
                <Tab className="ml-3 p-3 text-base text-app-gray-500 border-b focus:border-app-greenprimary-400 border-app-gray-100 transition duration-200 ease-in hover:text-app-greenprimary-400 focus:text-app-greenprimary-400 focus:outline-none font-bold">Acádemica</Tab>
                    <Tab className="ml-3 p-3 text-base text-app-gray-500 border-b focus:border-app-greenprimary-400 border-app-gray-100 transition duration-200 ease-in hover:text-app-greenprimary-400 focus:text-app-greenprimary-400 focus:outline-none font-bold">Laboral</Tab>                    
                </Tab.List>
                <Tab.Panels className="p-4 mb-20">
                    <Tab.Panel>
                        <ul className="">
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Agosto 2023</span>
                                <h3 className="font-bold">Bootcamp Desarrollo FullStack</h3>
                                <p>Participe de un bootcamp de desarrollo full stack con los stacks: Nest JS, Angular y desarrollo de aplicaciones móviles con Flutter y Dart</p>
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Ago 2021 - Actual</span>
                                <h3 className="font-bold">Pregrado Ing de Software UCC</h3>
                                <p>Formación académica en proceso en la Universidad Cooperativa de Colombia - Campus Pasto</p>
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Nov 2019 - Ago 2020</span>
                                <h3 className="font-bold">Técnico en desarrollo de software</h3>
                                <p>Formación académica realizada con el Servicio Nacional de Aprendizaje SENA, en convenio con ParqueSoft Nariño</p>
                            </li>
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> May - Jun 2021</span>
                                <h3 className="font-bold">Master en PHP, SQL, POO, MVC, Laravel, Symfony y WordPress</h3>
                                <p>Formación online a través de la academia de aprendizaje Udemy</p>
                            </li>
                        </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                        <ul className="">
                            <li className="bg-app-white rounded-lg p-4 mt-4 mb-4">
                                <span className="flex flex-line text-app-gray-600"><BsFillCalendar2CheckFill className="mr-3 mt-1 text-app-gray-600"/> Agosto 2020 - Actual</span>
                                <h3 className="font-bold">Desarrollador web ParqueSoft Nariño</h3>
                                <p>Me encargo de la implementación de portales web e implementación de ChatBots empresariales capaces de brindar atención personalizada a los clientes </p>
                            </li>
                            
                        </ul>                        
                    </Tab.Panel>                    
                </Tab.Panels>
            </Tab.Group>            
                
        </article>
    )
}

export default Experience



