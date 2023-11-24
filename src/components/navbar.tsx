import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
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
        <nav className='order-3 bg-app-greenprimary-50 xl:justify-center sm:justify-center sm:order-1'>
            <NavLink to='/'>
                <h1 className='py-14 text-center border-b text-app-blue-dark text-[1.625rem] border-app-gray-100'>
                    MB
                </h1>
            </NavLink>
            <article className='py-4'>
                <ul className='flex xl:flex-col sm:flex-row gap-y-6 gap-x-6'>
                    {dataNavbar(navbarItemActive).nav.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.to}
                            className=' flex flex-col items-center text-app-gray-700'
                            onClick={() => {
                                selectedItemNavbar(item.id);
                            }}>
                            {item.icon}
                            
                        </NavLink>
                    ))}
                </ul>
            </article>
            
        </nav>
    );
}

export default Navbar
