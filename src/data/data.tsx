import { FaHome } from "react-icons/fa";
import { 
  BsEnvelopeAtFill,
  BsFillPersonLinesFill,
  BsFillFolderFill,
  BsFillPersonCheckFill,
  BsBriefcaseFill,
   } from "react-icons/bs";

type NavItemType = {
    id: number;
    title: string;
    icon: JSX.Element;
    to: string;
  };
  
  type NavbarType = {
    logo: {
      title: string;
    };
    nav: NavItemType[];
  };
  
  type LanguageType = {
    label: string;
    code: string;
  };

export const dataNavbar = (navItem: number): NavbarType => {

    return {
        logo: {
            title: 'MB',
          },
          nav: [
            {
              id: 1,
              title: 'Inicio',
              icon: (
                <FaHome
                  className={navItem === 1 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]' }
                />
              ),
              to: '/',
            },
            {
              id: 2,
              title: 'Sobre mi',
              icon: (
                <BsFillPersonLinesFill
                  className={navItem === 2 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]'}
                />
              ),
              to: '/aboutme',
            },
            {
              id: 3,
              title: 'Proyectos',
              icon: (
                <BsFillFolderFill
                  className={navItem === 3 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]'}
                />
              ),
              to: '/projects',
            },
            {
              id: 4,
              title: 'habilidades',
              icon: (
                <BsFillPersonCheckFill 
                  className={navItem === 4 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]'}
                />
              ),
              to: '/skills',
            },
            {
              id: 5,
              title: 'Experiencia',
              icon: (
                <BsBriefcaseFill 
                  className={navItem === 5 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]'}
                />
              ),
              to: '/experience',
            },
            {
              id: 6,
              title: 'Contacto',
              icon: (
                <BsEnvelopeAtFill 
                  className={navItem === 6 ? 'text-app-greenprimary-400 w-[37px] h-[37px]' : 'w-[37px] h-[37px]'}
                />
              ),
              to: '/contact',
            },
          ],
    }
}

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];
