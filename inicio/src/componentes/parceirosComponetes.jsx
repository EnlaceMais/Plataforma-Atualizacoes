import Styles from '../css/parceirosComponentes.module.css'
import Tico from '../imagem/tico_nome.png'
import loja5 from '../imagem/loja5.png'
import loja6 from '../imagem/loja6.png'
import loja7 from '../imagem/loja7.png'

function ParceirosComponentes() {

    return (
        <main className={Styles.feed1}>
            <section className={Styles.qua1}>
                <div className={Styles.ltr1}>
                    <h1 className={Styles.nm}>Olá Maria Antônia!</h1>
                    <p className={Styles.nm1}>Veja os nossos parceiros!</p>
                </div>
                <div className={Styles.imag_ti}>
                    <img src={Tico} alt="Tico" className={Styles.Ti1} />
                </div>
            </section>

            <section className={Styles.qua2}>
                <div className={Styles.par1}>
                    <img src={loja5} alt="Logo_parceiro" className={Styles.bv} /> </div>
                <div className={Styles.par2}>
                    <h1 className={Styles.tit1}>Vitalía - Produtos Geriátricos</h1>
                    <p className={Styles.pa1}>A VitalÍa oferece uma linha completa de produtos pensados para o conforto, segurança e dignidade da pessoa idosa. </p></div>
            </section>
            <div className={Styles.qua3}>
                <h2 className={Styles.tit2}>Conheça nosso parceiro! </h2>
                <a className={Styles.bot1} href=' #'><button className={Styles.bot2}> Saiba mais </button></a>
            </div>

            <section className={Styles.qua4}>
                <div className={Styles.par1}>
                    <img src={loja6} alt="Logo_parceiro" className={Styles.lm} /> </div>
                <div className={Styles.par2}>
                    <h1 className={Styles.tit1}>FarmaSénior</h1>
                    <p className={Styles.pa1}>A FarmaSênior é uma rede de farmácias com foco na saúde da terceira idade. Dispõe de medicamentos com descontos especiais e produtos naturais.</p></div>
            </section>
            <div className={Styles.qua5}>
                <h2 className={Styles.tit2}>Conheça nosso parceiro! </h2>
                <a className={Styles.bot1} href=' #'><button className={Styles.bot2}> Saiba mais! </button></a>
            </div>

            <section className={Styles.qua6}>
                <div className={Styles.par1}>
                    <img src={loja7} alt="Logo_parceiro" className={Styles.vc} /> </div>
                <div className={Styles.par2}>
                    <h1 className={Styles.tit1}>MenteViva</h1>
                    <p className={Styles.pa1}>A MenteViva promove oficinas, jogos e terapias cognitivas para manter a mente ativa de forma leve, criativa e acolhedora.</p></div>
            </section>
            <div className={Styles.qua7}>
                <h2 className={Styles.tit2}>Conheça nosso parceiro! </h2>
                <a className={Styles.bot1} href=' #'><button className={Styles.bot2}> Saiba mais! </button></a>
            </div>

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

export default ParceirosComponentes