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
        <nav className='flex flex-row items-center justify-around p-2 md:flex-col bg-app-greenprimary-50 sticky top-0 z-50 md:order-1'>                        
            <NavLink to='/' className='flex flex-col md:flex-col h-full md:h-[30%]  md:justify-center'>                
                <img src={Logo} alt="Ing Marino Botina" className="w-14 md:w-16 h-14 md:h-16 mx-auto" />                
            </NavLink>
            <ul className='flex flex-row md:flex-col justify-center items-center gap-6 h-full md:h-[70%] py-2'>
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
