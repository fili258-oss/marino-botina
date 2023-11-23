const Skills = () => {
    return (
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9 overflow-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Mis habilidades</h2>
            <hr></hr>
            <p>Soy una persona  proactiva y empatica, con más de 2 años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web y CMS, he trabajado con empresas de Nariño y de otros departamentos de Colombia. Me gusta tanto backend como el frontend, lo que me ha permitido crear interfaces de usuario atractivas y funcionales. Además, mi experiencia en frameworks web me ha permitido construir aplicaciones web dinámicas y escalables con un backend robusto.</p>
            <p>¡Para mi la programación es como un super poder!</p>
            <h2 className="font-inter font-bold text-[18px]">Mis deportes favoritos</h2>
            <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Sobre mí</button></li>
                <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Mis habilidades</button></li>                    
            </ul>
                
        </article>
    )
}

export default Skills
