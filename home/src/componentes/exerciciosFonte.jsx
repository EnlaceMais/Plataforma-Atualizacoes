import Styles from '../css/exercicioFonte.module.css'
import Navbar from './navbar'
import Menu from './menulateral'
import Exercicios from './exercicios'
import Chatbot from './Chatbot'


function ExerciciosFonte() {
  

  return (
    <>
    <Navbar/>
        <main>
            <section className={Styles.conteudo}>
                <Menu />
                <Exercicios/>
                <Chatbot/>
            </section>
        </main>
    </>
  )
}

export default ExerciciosFonte
