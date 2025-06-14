import Styles from '../css/forum.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import ForumComponente from './forumComponente'

function Forum() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <ForumComponente />
            </section>
        </main>
    </>
  )
}

export default Forum