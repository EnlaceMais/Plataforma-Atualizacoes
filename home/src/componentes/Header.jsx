import Styles from '../css/Header.module.css'
import logo from '../imagem/logo_header.png'
import aMais from '../imagem/a_mais.png'
import aMenos from '../imagem/a_menos.png'
import entrar from '../imagem/entrar.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" className={Styles.logo}>
                <img src={logo} alt='logo' />
            </Link>
            <nav className={Styles.navegacao}>
                <button className={Styles.amenos}>
                    <img src={aMenos} alt='Diminuir fonte' />
                </button>
                <button className={Styles.amais}>
                    <img src={aMais} alt='Aumentar fonte' />
                </button>
                <Link to="/loggin" className={Styles.entrar}>
                    <img src={entrar} alt='Entrar' />
                </Link>
            </nav>
        </header>
    )
}

export default Header
