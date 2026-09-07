import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import Logo from '/Favicon.png';

//import { useTranslation } from 'react-i18next';
//import { languageData } from '../data/data';

const Navbar = () => {
    const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
    /*const { i18n, t } = useTranslation();*/

    /*const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };*/
    return (
        <nav className='flex flex-col bg-app-greenprimary-50 sm:order-1'>                        
            <NavLink to='/' className='flex flex-col border-b-2 border-app-greenprimary-600 h-[30%] justify-center items-center'>                
                <img src={Logo} alt="Ing Marino Botina" className="w-16 h-16 mx-auto" />                
            </NavLink>
            <ul className='flex flex-col justify-center items-center gap-6  border-b-2 h-[70%] border-app-greenprimary-600 py-4'>
                {dataNavbar(navbarItemActive).nav.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className='flex items-center text-app-greenprimary-600'
                        onClick={() => {
                            selectedItemNavbar(item.id);
                        }}>
                        {item.icon}                        
                    </NavLink>
                ))}
            </ul>                        
        </nav>
    );
}

export default Navbar
