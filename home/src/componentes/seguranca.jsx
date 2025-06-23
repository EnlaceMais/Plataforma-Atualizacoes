import Styles from '../css/seguranca.module.css'
import { Link } from 'react-router-dom'
import mensagem from '../imagem/mensagens.png'


function seguranca() { {/* aqui vai o conteúdo dá página principal */}

    return (
        <>
           <Link to="/">Início</Link> 

           <div className={Styles.pril}>
            <img className={Styles.mensa} src={mensagem} alt="mensagem" />
            <p>🔒 As mensagens e chamadas são protegidas <br/> com criptografia de ponta a ponta.🔒</p>


           </div>
        </>
    )
}

export default seguranca