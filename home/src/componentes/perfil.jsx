import Styles from '../css/perfil.module.css'
import Navbar from './navbar'
import PerfilComponente from './perfilComponente'
import Chatbot from './Chatbot'

function Perfil() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <PerfilComponente/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default Perfil
