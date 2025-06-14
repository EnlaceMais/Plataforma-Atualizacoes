import Styles from '../css/conexoes.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ConexoesComponente from './conexoesComponente'

function Conexoes() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ConexoesComponente/>
            </section>
        </main>
    </>
  )
}

export default Conexoes
