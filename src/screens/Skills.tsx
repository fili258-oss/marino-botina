import { Tab } from '@headlessui/react'
import DjangoIcon from '../assets/imgs/django.svg'
import JavaIcon from '../assets/imgs/java.svg'
import PhpIcon from '../assets/imgs/php-logo.svg'
import LaravelIcon from '../assets/imgs/laravel.svg'
import TypescriptIcon from '../assets/imgs/typescript.svg'
import PythonIcon from '../assets/imgs/python.svg'
import NestJsIcon from '../assets/imgs/nestjs.svg'
import AngularIcon from '../assets/imgs/logo-nav@2x.png'
import WordpressIcon from '../assets/imgs/WordPress.png'

const Skills = () => {
    return (
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9 overflow-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Mis habilidades</h2>
            <hr></hr>
            <Tab.Group>
                <Tab.List>
                    <Tab className="inline-flex items-center ml-3 p-3 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-300 text-center rounded-full font-semibold">Backend</Tab>
                    <Tab className="inline-flex items-center ml-3 p-3 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-300 text-center rounded-full font-semibold">Frontend</Tab>
                    <Tab className="inline-flex items-center ml-3 p-3 text-base text-white shadow-md transition duration-200 ease-in hover:bg-app-greenprimary-400 focus:bg-app-greenprimary-400 focus:outline-none bg-app-greenprimary-300 text-center rounded-full font-semibold">Otros</Tab>
                </Tab.List>
                <Tab.Panels className="bg-app-white rounded-lg p-4 mb-20">
                    <Tab.Panel>
                    <ul className="flex flex-col-12 text-app-greenprimary-50 gap-3">
                        <li className="flex flex-col-4"><img src={ PhpIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ JavaIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ PythonIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ NestJsIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ LaravelIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ DjangoIcon }  /></li>                
                        <li className="flex flex-col-4"><img src={ TypescriptIcon }  /></li>                
                        
                    </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                    <ul className="flex flex-col-12 text-app-greenprimary-50 gap-3">
                        <li className="flex flex-col-4"><img src={ AngularIcon } className="h-[60px]"  /></li>                                                                              
                    </ul>
                    </Tab.Panel>
                    <Tab.Panel>
                    <ul className="flex flex-col-12 text-app-greenprimary-50 gap-3">
                        <li className="flex flex-col-4"><img src={ WordpressIcon } className="h-[60px]" /></li>                                                                              
                    </ul>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>                                    
                
        </article>
    )
}

export default Skills
