import Styles from '../css/confirmacao.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ConfirmacaoComponente from './confirmacaoComponente'
import Chatbot from './Chatbot'

function Confirmacao() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ConfirmacaoComponente />
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Confirmacao