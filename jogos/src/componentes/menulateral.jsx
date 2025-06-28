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
    return(
        <section className={Styles.menu}>
            <div href="#" className={Styles.usuario}>
                <img src={usuario} alt="usuário" />
                <div className={Styles.nome}>Maria Antônia</div>
            </div>
            <div className={Styles.linha}></div>

            {/* Área de scroll (única alteração: adicionada esta div) */}
            <div className={Styles.scrollContainer}>
                <div className={Styles.navegacao}>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.perfil} src={perfil} alt="meu perfil" />
                        <p>Meu perfil</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.home} src={home} alt="início" />
                        <p>Início</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.grupo} src={grupo} alt="conexões" />
                        <p>Conexões</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.jogos} src={jogos} alt="jogos" />
                        <p>Jogos</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.calendario} src={calendario} alt="eventos" />
                        <p>Eventos</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.pesinho} src={pesinho} alt="exercícios" />
                        <p>Exercícios</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.cupom} src={cupom} alt="parceiros" />
                        <p>Parceiros</p>
                    </a>
                    <a href="#" className={Styles.navegar}>
                        <img className={Styles.medalha} src={medalha} alt="recompensas" />
                        <p>Recompensas</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Menu;