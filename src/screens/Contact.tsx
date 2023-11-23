import { BsGeoAltFill, BsGithub, BsEnvelopeFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
const Contact = () => {    
    return (
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9 overflow-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Contacto</h2>
            <hr></hr>
            <p>Gracias por visitarme, si crees que mis habilidades pueden contribuir a tu proyecto o empresa, puedes contactarme a través de los siguientes links de contacto: </p>                
            
                       
            <ul className="flex flex-col text-app-greenprimary-50 gap-3">
                <li><a className="inline-flex items-center  p-4 text-base text-app-heading hover:text-app-greenprimary-400 focus:outline-none text-center  font-semibold"><BsEnvelopeFill  className="w-5 h-5 mr-2"/>marinorubianobotina@gmail.com</a></li>                
                <li><a href="https://github.com/fili258-oss" className="inline-flex items-center  p-4 text-base text-app-heading hover:text-app-greenprimary-400 focus:outline-none text-center  font-semibold"><BsGithub  className="w-5 h-5 mr-2"/>https://github.com/fili258-oss</a></li>                
                <li><a className="inline-flex items-center  p-4 text-base text-app-heading hover:text-app-greenprimary-400 focus:outline-none text-center  font-semibold"><BsGeoAltFill  className="w-5 h-5 mr-2"/>Pasto, Nariño Colombia 🇨🇴</a></li>                
            </ul>   
            <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                <li><a href="mailto:marinorubianobotina@gmail.com" className="inline-flex items-center text-base text-white font-semibold py-2 px-6 bg-app-greenprimary-600 text-center rounded-full">Envíame un mensaje <FaTelegramPlane className="w-5 h-5 ml-2"/></a></li>                

            </ul>              
        </article>
    )
}

export default Contact
