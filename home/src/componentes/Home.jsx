import Header from './Header'
import Entrada from './Entrada'
import Diferenciais from './Diferenciais'
import Banner3 from './Banner3'
import Planos from './Planos'
import Footer from './Footer'
import Chatbot from './Chatbot'


function Home() {
 
  return (
   <main>
      <Header/>
      <Entrada/>
      <Chatbot/>
      <Diferenciais/>
      <Banner3/>
      <Planos/>
      <Footer/>
   </main>
  )
}

export default Home