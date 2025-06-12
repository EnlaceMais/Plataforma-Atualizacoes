import Styles from '../css/Diferenciais.module.css'
import icone1 from '../imagem/card1.png'
import icone2 from '../imagem/card2.png'
import icone3 from '../imagem/card3.png'

function Diferenciais(){
    
    return(
        <section className={Styles.diferenciais}>
            
            <p className={Styles.texto1}>Conexão que <span className={Styles.destaque}>acolhe.</span> Simples assim.</p>

            <div className={Styles.cards}>
                <div className={Styles.card1}>
                    <div className={Styles.imagem}><img src={icone1} alt='card 1'/></div>
                    <h2>Segurança em <br></br>cada clique</h2>
                    <p>Proteção e privacidade <br></br>garantidas.</p>
                </div>
                <div className={Styles.card2}>
                    <div className={Styles.imagem2}><img src={icone2} alt='card 2'/></div>
                    <h2>Tecnologia fácil, <br></br>para todos</h2>
                    <p>Inovação feita para você.</p>
                </div>
                <div className={Styles.card3}>
                    <div className={Styles.imagem}><img src={icone3} alt='card 3'/></div>
                    <h2>Conexão que aproxima</h2>
                    <p>Conectar para todos se <br></br>sentirem parte.</p>
                </div>
            </div>
                
           
        </section>
    )
}

export default Diferenciais