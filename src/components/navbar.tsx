import { NavLink } from 'react-router-dom';
import { dataNavbar } from '../data/data';
import { useNavbarStore } from '../store/navbarStore';
import Logo from '/Favicon.png';
// @ts-expect-error Tooltip is a JavaScript module without a TypeScript declaration.
import Tooltip from './shared/Tooltip';

const Navbar = () => {
    const { navbarItemActive, selectedItemNavbar } = useNavbarStore();

    return (
        <nav className='flex flex-row h-full md:max-h-screen md:min-h-screen items-center justify-around p-2 md:flex-col bg-app-greenprimary-50 sticky top-0 z-40 md:order-1'>

            <NavLink to='/' className='flex flex-col md:flex-col h-full md:h-[30%] md:justify-center'>
                <Tooltip content={<div>Inicio</div>} placement="right">
                    <img
                        src={Logo}
                        alt="Ing Marino Botina"
                        className="w-14 md:w-16 h-14 md:h-16 mx-auto"
                    />
                </Tooltip>
            </NavLink>

            <ul className='flex flex-row md:flex-col justify-center items-center gap-6 h-full md:h-[70%] py-2'>
                {dataNavbar(navbarItemActive).nav.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className='flex items-center text-app-greenprimary-600'
                        onClick={() => selectedItemNavbar(item.id)}
                    >
                        <Tooltip content={<div>{item.title}</div>} placement="right">
                            <li id={item.title}>{item.icon}</li>
                        </Tooltip>
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;