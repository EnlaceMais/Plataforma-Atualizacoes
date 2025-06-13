import Styles from '../css/Entrada.module.css'
import foto from '../imagem/foto2.png'
import { Link } from 'react-router-dom';

function Entrada(){

    return(

        <section className={Styles.entrada}>
            <div className={Styles.fotoEntrada}>
                <img src={foto} alt='foto entrada'/>
            </div>
            <div className={Styles.textoInicial}>
                <h3 className={Styles.texto1}>Bem-vindo ao seu espaço digital:</h3>
                <h1 className={Styles.texto2}>simples, seguro e feito para você.</h1>
                <h4 className={Styles.texto3}>Para se sentir em casa, mesmo online.</h4>
                <div className={Styles.botao}>
                    <Link to="/loggin" className={Styles.botaoEntrar}>Entre e se conecte</Link>
                </div>
                <div className={Styles.convite}>
                    <p className={Styles.texto4}>Saiba mais</p>
                    <div className={Styles.scrollDown}>
                        <svg className={Styles.scrollIcon} viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Entrada