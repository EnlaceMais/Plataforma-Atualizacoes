import Styles from '../css/Footer.module.css'
import logo from '../imagem/logo_footer.png'
import linkedin from '../imagem/linkedin.png'
import instagram from '../imagem/instagram.png'
import sobre from '../imagem/sobre_nos.png'

function Footer(){

    return(
        <footer className={Styles.rodape}>
            <div className={Styles.infos}>
                <div className={Styles.logo}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={Styles.linha}></div>
                <div className={Styles.texto}>
                    <a href='#'>• Contatos<br></br><br></br>
                    • Sobre nós<br></br><br></br>
                    • Termos de uso<br></br><br></br> </a>
                </div>
                <div className={Styles.redes}>
                    <a href='#' className={Styles.linkedin}>
                        <img src={linkedin} alt='linkedin'/>
                    </a>
                    <a href='#' className={Styles.instagram}>
                        <img src={instagram} alt='instagram'/>
                    </a>
                    <a href='#' className={Styles.sobre}>
                        <img src={sobre} alt='sobre nos'/>
                    </a>
                </div>
            </div>
            <div className={Styles.direitos}>
                © 2025 Enlace+. Todos os direitos reservados.
            </div>
        </footer>
        

    )
}

export default Footer