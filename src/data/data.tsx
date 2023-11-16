import {
    TfiHome,    
    TfiFolder,
    TfiIdBadge,
    TfiBook

} from 'react-icons/tfi';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */

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
                <TfiHome
                  className={navItem === 1 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
                />
              ),
              to: '/',
            },
            {
              id: 2,
              title: 'Sobre mi',
              icon: (
                <TfiIdBadge
                  className={navItem === 2 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
                />
              ),
              to: '/aboutme',
            },
            {
              id: 3,
              title: 'Proyectos',
              icon: (
                <TfiFolder
                  className={navItem === 3 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
                />
              ),
              to: '/projects',
            },
            {
              id: 4,
              title: 'habilidades',
              icon: (
                <TfiBook
                  className={navItem === 4 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
                />
              ),
              to: '/skills',
            },
            {
              id: 5,
              title: 'Experiencia',
              icon: (
                <TfiBook
                  className={navItem === 5 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
                />
              ),
              to: '/experience',
            },
            {
              id: 6,
              title: 'Contacto',
              icon: (
                <TfiBook
                  className={navItem === 6 ? 'text-app-greenprimary-400 w-5 h-5' : 'w-5 h-5'}
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
