import { Link, useLocation } from 'react-router-dom';
import Styles from '../css/menulateral.module.css';
import usuario from '../imagem/usuario2.png';
import perfil from '../imagem/perfil.png';
import home from '../imagem/home.png';
import grupo from '../imagem/grupo.png';
import jogos from '../imagem/jogos.png';
import calendario from '../imagem/calendario.png';
import pesinho from '../imagem/pesinho.png';
import cupom from '../imagem/cupom.png';
import medalha from '../imagem/medalha.png';

function Menu() {
    const location = useLocation();
    const path = location.pathname;

    

    return (
        <section className={Styles.menu}>
            <div className={Styles.usuario}>
                <img src={usuario} alt="usuário" />
                <div className={Styles.nome}>Maria Antônia</div>
            </div>
            <div className={Styles.linha}></div>

            <div className={Styles.scrollContainer}>
                <div class="menu-lateral" id="menuMobile">
                <div className={Styles.navegacao}>
                    <Link
                        to="/perfil"
                        className={`${Styles.navegar} ${path === '/perfil' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.perfil} ${path === '/perfil' ? Styles.iconeAtivo : ''}`}
                            src={perfil}
                            alt="meu perfil"
                        />
                        <p>Meu perfil</p>
                    </Link>

                    <Link
                        to="/inicio"
                        className={`${Styles.navegar} ${path === '/inicio' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.home} ${path === '/inicio' ? Styles.iconeAtivo : ''}`}
                            src={home}
                            alt="início"
                        />
                        <p>Início</p>
                    </Link>

                    <Link
                        to="/conexoes"
                        className={`${Styles.navegar} ${path === '/conexoes' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.grupo} ${path === '/conexoes' ? Styles.iconeAtivo : ''}`}
                            src={grupo}
                            alt="conexões"
                        />
                        <p>Conexões</p>
                    </Link>

                    <Link
                        to="/jogos"
                        className={`${Styles.navegar} ${path === '/jogos' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.jogos} ${path === '/jogos' ? Styles.iconeAtivo : ''}`}
                            src={jogos}
                            alt="jogos"
                        />
                        <p>Jogos</p>
                    </Link>

                    <Link
                        to="/eventos"
                        className={`${Styles.navegar} ${path === '/eventos' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.calendario} ${path === '/eventos' ? Styles.iconeAtivo : ''}`}
                            src={calendario}
                            alt="eventos"
                        />
                        <p>Eventos</p>
                    </Link>

                    <Link
                        to="/exercicios"
                        className={`${Styles.navegar} ${path === '/exercicios' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.pesinho} ${path === '/exercicios' ? Styles.iconeAtivo : ''}`}
                            src={pesinho}
                            alt="exercícios"
                        />
                        <p>Exercícios</p>
                    </Link>

                    <Link
                        to="/parceiros"
                        className={`${Styles.navegar} ${path === '/parceiros' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.cupom} ${path === '/parceiros' ? Styles.iconeAtivo : ''}`}
                            src={cupom}
                            alt="parceiros"
                        />
                        <p>Parceiros</p>
                    </Link>

                    <Link
                        to="/recompensas"
                        className={`${Styles.navegar} ${path === '/recompensas' ? Styles.ativo : ''}`}
                    >
                        <img
                            className={`${Styles.medalha} ${path === '/recompensas' ? Styles.iconeAtivo : ''}`}
                            src={medalha}
                            alt="recompensas"
                        />
                        <p>Recompensas</p>
                    </Link>

                </div>
                </div>
                <button id="toggleMenu" class="botao-abrir">☰</button>
            </div>
        </section>
    );
}

export default Menu;
