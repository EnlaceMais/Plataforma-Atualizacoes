import Styles from '../css/perfil.module.css'
import Navbar from './navbar'
import PerfilComponente from './perfilComponente'

function Perfil() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <PerfilComponente/>
            </section>
        </main>
    </>
  )
}

export default Perfil
