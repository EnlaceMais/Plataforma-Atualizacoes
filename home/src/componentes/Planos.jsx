import Styles from '../css/Planos.module.css'
import icone from '../imagem/icone_mao.png'
import { Link } from 'react-router-dom';

function Planos(){

    return(
        <section className={Styles.planos}>
            <h1 className={Styles.texto1}>
                Escolha um plano e se <span className={Styles.destaque}>conecte com segurança</span> 
            </h1>
            <h2 className={Styles.texto2}>
                Do básico ao total, temos a conexão certa pra você, escolha o melhor para você e conecte-se!
            </h2>

            <section className={Styles.carrossel}>
                {/* Card 1 - Básico */}
                <div className={Styles.card1}>
                    <div className={Styles.infos1}>
                        <h5>Conexão</h5>
                        <h1>Básica</h1><br />
                    </div>
                    <div className={Styles.infos}>
                        <p>
                            • Acesso ao <span className={Styles.destaque}>chat de ajuda</span><br /><br />
                            • <span className={Styles.destaque}>Conexões</span> com outros usuários<br /><br />
                            • <span className={Styles.destaque}>Postagens</span> de textos, fotos, vídeos e vídeos curtos<br /><br />
                            • <span className={Styles.destaque}>Todos os jogos</span> liberados<br /><br />
                        </p>
                    </div>
                    <h1 className={Styles.preco}>GRATUITO</h1>
                    <div className={`${Styles.overlay} ${Styles.bgBasico}`}>
                        <p className={Styles.fraseConvite}>Comece sua jornada com a gente!</p>
                        <Link to="/planos" className={Styles.linkOverlay}>Aproveitar agora</Link>
                    </div>
                </div>

                {/* Card 2 - Premium */}
                <div className={Styles.card2}>
                    <div className={Styles.infos1}>
                        <h5>Conexão</h5>
                        <h1>Premium</h1><br />
                    </div>
                    <div className={Styles.infos}>
                        <p>
                            • Tudo do plano <span className={Styles.destaque}>Básico+</span><br /><br />
                            • Acesso à página de <span className={Styles.destaque}>exercícios físicos personalizados</span><br /><br />
                            • Acesso à página de eventos<span className={Styles.destaque}>verificados e seguros</span><br /><br />
                        </p>
                    </div>
                    <h1 className={Styles.preco}>R$ 39,90</h1>
                    <div className={`${Styles.overlay} ${Styles.bgPremium}`}>
                        <p className={Styles.fraseConvite}>Mais benefícios para sua rotina!</p>
                        <Link to="/planos" className={Styles.linkOverlay2}>Quero ser Premium</Link>
                    </div>
                </div>

                {/* Card 3 - Total */}
                <div className={Styles.card3}>
                    <div className={Styles.infos1}>
                        <h5>Conexão</h5>
                        <h1>Total</h1><br />
                    </div>
                    <div className={Styles.infos}>
                        <p>
                            • Tudo do plano <span className={Styles.destaque}>Premium+</span><br /><br />
                            • Até <span className={Styles.destaque}>45% de desconto</span> em serviços de parceiros<br /><br />
                            • <span className={Styles.destaque}>1 aula presencial</span> por mês com parceiros<br /><br />
                            • <span className={Styles.destaque}>Um dia com tudo incluso</span> em clube parceiro<br /><br />
                        </p>
                    </div>
                    <h1 className={Styles.preco}>R$ 89,90</h1>
                    <div className={`${Styles.overlay} ${Styles.bgTotal}`}>
                        <p className={Styles.fraseConvite}>Conecte-se sem limites!</p>
                        <Link to="/planos" className={Styles.linkOverlay3}>Assinar agora</Link>
                    </div>
                </div>
            </section>

            <div className={Styles.icone}>
                <img src={icone} alt='icone mão'/>
            </div>

            <h1 className={Styles.fraseFinal}> 
                A <span className={Styles.destaque}>Enlace+</span> é o seu novo ponto de encontro: mais conexão, mais diversão e mais vida em cada clique.
            </h1>
            <Link to="/loggin" className={Styles.botao}>
                Quero me conectar agora!
            </Link>
        
        </section>
    )
}

export default Planos
