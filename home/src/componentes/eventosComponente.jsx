import Styles from '../css/eventosComponente.module.css'
import semana from '../imagem/semana.webp'
import benemerito from '../imagem/benemerito.png'
import polo from '../imagem/polo.jpg'
import usp from '../imagem/usp.jpg'
import jogos from '../imagem/jogos.webp'
import palestras from '../imagem/palestras.jpg'
import forum from '../imagem/forum.jpg'
import chacara from '../imagem/chacara.webp'
import baile from '../imagem/baile.jpg'
import museu from '../imagem/museu.webp'
import seuTico from '../imagem/SeuTico.png'
import { Link } from 'react-router-dom';


function Eventos(){

    return(
        <section className={Styles.eventos}>
            <div className={Styles.quadro}>
                <div className={Styles.informacoes}>
                    <h1 className={Styles.info1}>Olá, Maria Antônia!</h1>
                    <h3 className={Styles.info2}>Temos os melhores eventos para você!</h3>
                    <h5 className={Styles.info3}><Link to="/confirmacao" className={Styles.info4}>Veja seus eventos confirmados aqui!</Link></h5>
                </div>
                <div className={Styles.imageme}><img src={seuTico} alt="seu tico eventos"/></div>
            </div>
            <div className={Styles.quadros1}>
                <div className={Styles.camada}>
                    <img className={Styles.evento} src={semana} alt="" />
                    <h4 className={Styles.nome1}>Semana do Idoso no Parque da Água Branca</h4>
                    <h6 className={Styles.info5}><Link to="/semana" className={Styles.info6}>Ver detalhes</Link></h6>
                </div>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={forum} alt="" />
                    <h4 className={Styles.nome1}>7º Fórum São Paulo da Longevidade</h4>
                    <h6 className={Styles.info5}><Link to="/forum" className={Styles.info6}>Ver detalhes</Link></h6>
                </div>
            </div>
            <div className={Styles.quadros2}>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={polo} alt="" />
                    <h4 className={Styles.nome1}>Polo Cultural da Terceira Idade</h4>
                    <h6 className={Styles.info5}><Link to="/polo" className={Styles.info6}>Ver detalhes</Link></h6>
                </div>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={benemerito} alt="" />
                    <h4 className={Styles.nome1}>Atividades no Parque Benemérito José Brás</h4>
                    <h6 className={Styles.info5}><Link to="/bras" className={Styles.info6}>Ver detalhes</Link></h6>
                </div>
            </div>
            <div className={Styles.quadros3}>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={chacara} alt="" />
                    <h4 className={Styles.nome1}>Atividades no Parque Chácara das Flores</h4>
                    <h6 className={Styles.info5}><Link to="/chacara" className={Styles.info6}>Ver detalhes</Link></h6>
                </div>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={usp} alt="" />
                    <h4 className={Styles.nome1}>Programa USP 60+</h4>
                    <h6 className={Styles.info5}><a className={Styles.info6} href="#">Ver detalhes</a></h6>
                </div>
            </div>
                <div className={Styles.quadros4}>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={palestras} alt="" />
                    <h4 className={Styles.nome1}>Palestras no SESC</h4>
                    <h6 className={Styles.info5}><a className={Styles.info6} href="#">Ver detalhes</a></h6>
                </div>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={baile} alt="" />
                    <h4 className={Styles.nome1}> Baile da 3ª Idade</h4>
                    <h6 className={Styles.info5}><a className={Styles.info6} href="#">Ver detalhes</a></h6>
                </div>
            </div>
                <div className={Styles.quadros5}>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={museu} alt="" />
                    <h4 className={Styles.nome1}>Museu da Pessoa</h4>
                    <h6 className={Styles.info5}><a className={Styles.info6} href="#">Ver detalhes</a></h6>
                </div>
                    <div className={Styles.camada}>
                    <img className={Styles.evento} src={jogos} alt="" />
                    <h4 className={Styles.nome1}>Jogos Regionais do Idoso (JORI)</h4>
                    <h6 className={Styles.info5}><a className={Styles.info6} href="#">Ver detalhes</a></h6>
                </div>
            </div>

            <footer className={Styles.rodape}>
        <p>© 2025 Enlace+ - Todos os direitos reservados</p>
        <div className={Styles.links}>
          <a href='#'>Termo de uso</a>
          <a href='#'>Privacidade</a>
          <a href='#'>Ajuda</a>
        </div>
      </footer>
        </section>
    )
}

export default Eventos