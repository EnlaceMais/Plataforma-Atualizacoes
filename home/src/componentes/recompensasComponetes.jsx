import Styles from '../css/recompensasComponentes.module.css'
import Tico from '../imagem/tico_nome.png'
import Moeda from '../imagem/moeda.png'
import loja1 from '../imagem/loja1.png'
import loja2 from '../imagem/loja2.png'
import loja3 from '../imagem/loja3.png'
import loja4 from '../imagem/loja4.png'

function recompensasComponetes() {

    return (
        <main className={Styles.feed}>
            <section className={Styles.quadro1}>
                <div className={Styles.letra1}>
                    <h1 className={Styles.nome}>Olá Maria Antônia!</h1>
                    <p className={Styles.nome1}>Troque suas Ticoedas por serviços de nossas empresas parceiras.</p>
                </div>
                <div className={Styles.img_ti}>
                    <img src={Tico} alt="Tico" className={Styles.Tico} />
                </div>
            </section>


            <section className={Styles.quadro2}>
                <h2 className={Styles.vt}>Você tem:</h2>

                <div className={Styles.TicoE}>
                    <img src={Moeda} alt="Moeda" className={Styles.Moeda} />
                    <h1 className={Styles.Moedah1}>100 Ticoedas</h1>
                </div>
            </section>


            <container className={Styles.tudo}>
                <section className={Styles.quadro3}>
                    <div className={Styles.fot1}>
                        <img src={loja4} alt="farma" className={Styles.farma} />
                    </div>
                    <div className={Styles.descricao1}>
                        <h1 className={Styles.nomef}>MenteViva</h1>
                        <div className={Styles.fmoeda}>
                            <img src={Moeda} alt="Moeda" className={Styles.moedinha} />
                            <h1 className={Styles.n_moedinha}>100</h1>
                        </div>
                    </div> <br />

                    <div className={Styles.descricao2}>
                        <h1 className={Styles.nomed2}>Aula gratuita</h1>
                        <p className={Styles.nomed3}>Resgate e ganhe uma aula com a escola MenteViva, especialista em estimulos cognitivos
                        </p>
                    </div>
                    <a className={Styles.butao0} href=' #'><button className={Styles.butao}>Trocar por Ticoedas</button></a>
                </section>


                <section className={Styles.quadro4}>
                    <div className={Styles.fot1}>
                         <img src={loja1} alt="farma" className={Styles.farma} />
                    </div>
                    <div className={Styles.descricao1}>
                        <h1 className={Styles.nomef}>Vitalía - Geriatria</h1>
                        <div className={Styles.fmoeda}>
                            <img src={Moeda} alt="Moeda" className={Styles.moedinha} />
                            <h1 className={Styles.n_moedinha}>155</h1>
                        </div>
                    </div> <br />

                    <div className={Styles.descricao2}>
                        <h1 className={Styles.nomed2}>Vale-Presente Vitalía</h1>
                        <p className={Styles.nomed3}>Resgate e ganhe R$ 50,00 de desconto na sua primeira compra com nossa loja parceira.
                        </p> 
                    </div>
                    <a className={Styles.butao0} href=' #'><button className={Styles.butao}>Trocar por Ticoedas</button></a>
                </section>
            </container>

            <container className={Styles.tudo}>
                <section className={Styles.quadro3}>
                    <div className={Styles.fot1}>
                         <img src={loja2} alt="farma" className={Styles.farma} />
                    </div>
                    <div className={Styles.descricao1}>
                        <h1 className={Styles.nomef}>FarmaSénior</h1>
                        <div className={Styles.fmoeda}>
                            <img src={Moeda} alt="Moeda" className={Styles.moedinha} />
                            <h1 className={Styles.n_moedinha}>120</h1>
                        </div>
                    </div> <br />

                    <div className={Styles.descricao2}>
                        <h1 className={Styles.nomed2}>Vale-Presente Farmácia</h1>
                        <p className={Styles.nomed3}> Resgate e ganhe desconto de R$30 em medicamentos na rede de farmácias parceira.
                        </p>
                    </div>
                    <a className={Styles.butao0} href=' #'><button className={Styles.butao}>Trocar por Ticoedas</button></a>
                </section>


                <section className={Styles.quadro4}>
                    <div className={Styles.fot1}>
                         <img src={loja3} alt="farma" className={Styles.farma} />
                    </div>
                    <div className={Styles.descricao1}>
                        <h1 className={Styles.nomef}>MoviSénior</h1>
                        <div className={Styles.fmoeda}>
                            <img src={Moeda} alt="Moeda" className={Styles.moedinha} />
                            <h1 className={Styles.n_moedinha}>250</h1>
                        </div>
                    </div> <br />

                    <div className={Styles.descricao2}>
                        <h1 className={Styles.nomed2}>Acompanhamento</h1>
                        <p className={Styles.nomed3}>Resgate e ganhe 25% de desconto na sua sessão de fisioterapia! Cuide do seu corpo com a MoviSénior.
                        </p>
                    </div>
                    <a className={Styles.butao0} href=' #'><button className={Styles.butao}>Trocar por Ticoedas</button></a>
                </section>
            </container>
            <footer className={Styles.rodape}>
        <p>© 2025 Enlace+ - Todos os direitos reservados</p>
        <div className={Styles.links}>
          <a href='#'>Termo de uso</a>
          <a href='#'>Privacidade</a>
          <a href='#'>Ajuda</a>
        </div>
      </footer>
        </main>
    )
}

export default recompensasComponetes