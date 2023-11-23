const Contact = () => {
    return (
        <article className="grid col bg-app-greenprimary-50 pt-36 px-9 overflow-auto">
            <h2 className="font-inter font-bold text-[4rem] text-app-heading">Contacto</h2>
            <hr></hr>
            <p>Gracias por visitarme, si crees que mis habilidades pueden contribuir a tu proyecto o empresa, puedes contactarme a través de los siguientes links de contacto: </p>                
            <h2 className="font-inter font-bold text-[18px]">Mis deportes favoritos</h2>
            <ul className="flex flex-row text-app-greenprimary-50 gap-3">
                <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Sobre mí</button></li>
                <li><button type="button" className="py-2 px-6 bg-app-greenprimary-600 text-center font-light rounded-full">Mis habilidades</button></li>                    
            </ul>
                
        </article>
    )
}

export default Contact
