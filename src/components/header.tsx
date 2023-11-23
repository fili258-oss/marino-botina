import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';

const Header = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <header className=' flex flex-row items-center justify-end pr-14 bg-app-background-main gap-4 bg-app-greenprimary-50 sm:order-1'>
            <select
                defaultValue={i18n.language}
                onChange={onChangeLang}
                className='block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
            >
                {languageData().map(({ code, label }) => (
                    <option key={code} value={code}>
                        {t (label)}
                    </option>
                ))}
            </select>
        </header>
    );
};

export default Header;
