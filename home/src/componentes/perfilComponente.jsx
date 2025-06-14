import Styles from '../css/perfilComponente.module.css'
import Seta from '../imagem/seta.png'
import Foto2 from '../imagem/fotoperfil.png'
import Foto3 from '../imagem/seguidor1.png'
import Foto4 from '../imagem/seguidor2.png'
import Foto5 from '../imagem/seguidor3.png'
import Foto6 from '../imagem/foto6.png'
import Foto7 from '../imagem/bola1.png'
import Foto8 from '../imagem/ticoedas.png'
import Foto9 from '../imagem/maria.png'
import Foto10 from '../imagem/urso.png'
import Foto11 from '../imagem/curtir.png'
import Foto12 from '../imagem/comentar.png'
import Foto13 from '../imagem/bola2.png'
import Vector from '../imagem/vector.png'
import Vector1 from '../imagem/vector.png'
import { Link, useLocation } from 'react-router-dom';

function PerfilComponente() {

    return (
        <section className={Styles.perfil}>
            <div className={Styles.quadro1}>
                <Link to="/inicio">
                    <div className={Styles.seta}>
                        <img src={Seta} alt="Seta" />
                        <h3 className={Styles.vo}>Voltar</h3>
                    </div>
                </Link>
                <div className={Styles.quadrinho1}>
                    <img className={Styles.foto} src={Foto2} alt="" />

                    <div className={Styles.nome}>
                        <h2 className={Styles.t1}>Maria Antônia</h2>
                        <h3 className={Styles.t2}>10 seguidores</h3>
                    </div>

                    <div className={Styles.img1}>
                        <img className={Styles.foto3} src={Foto4} alt="" />
                        <img className={Styles.foto4} src={Foto5} alt="" />
                        <img className={Styles.foto5} src={Foto3} alt="" />
                    </div>

                    <a href="#">
                        <div className={Styles.seta1}>
                            <h4 className={Styles.editar}>Editar meu perfil</h4>
                        </div>
                    </a>

                </div>
            </div>
            <div className={Styles.quadro2}>
                <div className={Styles.fsm}>
                    <div className={Styles.fsm1}><h4 className={Styles.f1}>Fotos</h4></div>
                    <div className={Styles.fsm2}><h4 className={Styles.f1}>Sobre mim</h4></div>
                </div>
                <div className={Styles.cp}>
                    <div className={Styles.info1}>
                        <img className={Styles.foto6} src={Foto6} alt="" />
                        <h2 className={Styles.t3}>Compartilhe algo hoje, Maria!</h2>
                    </div>
                    <div className={Styles.info2}>
                        <img className={Styles.foto7} src={Foto7} alt="" />
                        <img className={Styles.vector} src={Vector} alt="" />
                        <div className={Styles.c1}>
                            <h2 className={Styles.t4}>Criar uma lembrança</h2>
                            <h3 className={Styles.t5}>Compartilhe uma foto ou vídeo</h3>
                        </div>
                    </div>
                    <div className={Styles.info3}>
                        <h2 className={Styles.post}>Postagens</h2>
                        <div className={Styles.linha}></div>
                        <h2 className={Styles.post2}>Você ainda não tem nenhuma postagem!</h2>
                        <br />
                        <div className={Styles.tico}>
                            <img className={Styles.foto8} src={Foto8} alt="" />
                            <h4 className={Styles.tico2}>Faça sua primeira postagem e ganhe uma Ticoeda!</h4>
                        </div>
                        <br />
                        <img className={Styles.foto13} src={Foto13} alt="" />
                        <img className={Styles.vector1} src={Vector1} alt="" />
                        <div className={Styles.c2}>
                            <h2 className={Styles.t4}>Criar uma lembrança
                                <h3 className={Styles.t5}>Compartilhe uma foto ou vídeo</h3></h2>
                        </div>
                    </div>
                    <div className={Styles.info4}>
                        <div className={Styles.maria}>
                            <img className={Styles.foto9} src={Foto9} alt="" />
                            <h3 className={Styles.maria2}>Maria Antônia
                                <h4 className={Styles.maria3}>19 de maio de 1953</h4>
                            </h3>
                        </div>
                        <div className={Styles.maria4}>
                            <img className={Styles.foto10} src={Foto10} alt="" />
                        </div>
                        <h4 className={Styles.maria8}>Nasceu em 19 de maio de 1953</h4>

                        <div className={Styles.cc}>
                            <img className={Styles.foto11} src={Foto11} alt="" />
                            <h4 className={Styles.maria5}>Curtir</h4>
                            <img className={Styles.foto12} src={Foto12} alt="" />
                            <h4 className={Styles.maria6}>Comentar</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PerfilComponente