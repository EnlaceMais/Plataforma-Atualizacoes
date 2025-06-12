import Styles from '../css/Banner3.module.css'
import seuTico from '../imagem/seu_tico.png'
import check from '../imagem/check.png'

function Banner3(){

    return(
        <section className={Styles.banner3}>
            <div className={Styles.seuTico}>
                <img src={seuTico} alt='seu tico'/>
            </div>
            <div className={Styles.infos}>
                <h1 className={Styles.texto1}>Tecnologia que transforma</h1>
                <h1 className={Styles.texto2}>a experiência</h1>

                <section className={Styles.pontos}>
                    <div className={Styles.ponto1}>
                        <img src={check} alt='check'/><h3> Com um guia virtual, ajudando em cada passo.</h3>
                    </div>
                    <div className={Styles.ponto2}>
                        <img src={check} alt='check'/><h3>Proteção total de dados e privacidade.</h3>
                    </div>
                    <div className={Styles.ponto3}>
                        <img src={check} alt='check'/><h3>Simples e fácil de navegar.</h3>
                    </div>
                </section>
                
            </div>
        </section>



    )
}

export default Banner3