import Styles from '../css/navbar.module.css';
import logo from '../imagem/logo_navbar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import moeda from '../imagem/moeda.png'
import aMais from '../imagem/a_mais.png';
import aMenos from '../imagem/a_menos.png';
import chat from '../imagem/chat.png';
import usuario from '../imagem/usuario.png';

function Navbar() {
    const [buscaAtiva, setBuscaAtiva] = useState(false);
    const [contadorMoedas, setContadorMoedas] = useState(0); // Estado para o contador

    const toggleBusca = () => {
        setBuscaAtiva(!buscaAtiva);
    };

    const incrementarMoedas = () => {
        setContadorMoedas(contadorMoedas + 1); // Função para incrementar
    };

    return(
        <header className={Styles.header}>
            <a href='#' className={Styles.logo}>
                <img src={logo} alt="logo" />
            </a>

            <section className={Styles.pesquisa}>
                <div className={`${Styles.buscarBox} ${buscaAtiva ? Styles.ativar : ''}`}>
                    <div className={Styles.lupaBuscar} onClick={toggleBusca}>
                        <i className="bi bi-search"></i>
                    </div>
                
                    <div className={Styles.inputBuscar}>
                        <input 
                            type="text" 
                            placeholder='Pesquise aqui'
                            style={{ width: buscaAtiva ? '100%' : '0' }}
                        />
                    </div>
                
                    <div className={`${Styles.btnFechar} ${!buscaAtiva ? Styles.escondido : ''}`} onClick={toggleBusca}>
                        <i className="bi bi-x-circle"></i>
                    </div>
                </div>
            </section>

            <nav className={Styles.navegacao}>
                <div className={Styles.moedas} onClick={incrementarMoedas} style={{ cursor: 'pointer' }}>
                    <img src={moeda} alt='moedinha'/>
                    <h2>{contadorMoedas}</h2> {/* Agora dinâmico */}
                </div>
                <button className={Styles.amenos}>
                    <img src={aMenos} alt='amenos'/>
                </button>
                <button className={Styles.amais}>
                    <img src={aMais} alt='amais'/>
                </button>
                <a href='#' className={Styles.chat}>
                    <img src={chat} alt='chat'/>
                </a>
                <a href='#' className={Styles.usuario}>
                    <img src={usuario} alt='usuario'/>
                </a>
            </nav>
        </header>
    )
}

export default Navbar;