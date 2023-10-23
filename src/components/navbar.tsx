import { NavLink } from 'react-router-dom';

import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
const Navbar = () => {
    const { navbarItemActive, selectedItemNavbar } = useNavbarStore();
    return (
        <nav className=' bg-app-greenprimary-50 py-5 text-center'>
            <NavLink to='/'>
                <h1 className='py-14 border-b text-center text-app-blue-dark text-[1.625rem] border-app-gray-100'>
                    MB
                </h1>
            </NavLink>
            <ul className='flex flex-col gap-y-6 pt-10 pl-8'>
                {dataNavbar(navbarItemActive).nav.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className='flex flex-row items-center text-app-gray-700'
                        onClick={() => {
                            selectedItemNavbar(item.id);
                        }}
                    >
                        {item.icon}
                        {/* <span
                            className={`ml-3 text-base font-medium ${item.id === navbarItemActive
                                ? 'text-app-primary'
                                : 'text-app-gray-700'
                                }`}
                        >
                            {item.title}
                        </span> */}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar
