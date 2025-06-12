import Styles from '../css/recompensas.module.css'
import Feed from './recompensasComponetes'
import Navbar from './navbar'
import Menu from './menulateral'

function Recompensas() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
              <Menu/>
                <Feed/>
            </section>
        </main>
    </>
  )
}

export default Recompensas
