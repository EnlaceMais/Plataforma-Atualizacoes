import Styles from '../css/Header.module.css'
import logo from '../imagem/logo_header.png'
import aMais from '../imagem/a_mais.png'
import aMenos from '../imagem/a_menos.png'
import entrar from '../imagem/entrar.png'

function Header() {
    return (
        <header>
            <a href='#' className={Styles.logo}>
                <img src={logo} alt='logo' />
            </a>
            <nav className={Styles.navegacao}>
                <button className={Styles.amenos}>
                    <img src={aMenos} alt='Diminuir fonte' />
                </button>
                <button className={Styles.amais}>
                    <img src={aMais} alt='Aumentar fonte' />
                </button>
                <a href='#' className={Styles.entrar}>
                    <img src={entrar} alt='Entrar' />
                </a>
            </nav>
        </header>
    )
}

export default Header
