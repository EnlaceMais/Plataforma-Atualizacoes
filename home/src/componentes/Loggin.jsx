import { useState } from 'react';
import Styles from '../css/Loggin.module.css';
import video from '../imagem/videofundo.mp4';
import logo from '../imagem/logo_loggin.png';
import Chatbot from './Chatbot'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 88214d85b6c6b5192ba9d0935592fc78a27bab97

function Loggin() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <main className={Styles.container}>
      <video
        className={Styles.videoFullscreen}
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={Styles.overlay}></div>

      <div className={Styles.content}>
        <section className={Styles.espaco}>
          <div className={`${Styles.cardContainer} ${isRegistering ? Styles.rightPanelActive : ''}`}>
            {/* Lado colorido */}
            <div className={Styles.leftSide}>
              <h2>{isRegistering ? 'Já tem uma conta?' : 'Crie uma conta!'}</h2>
              <p>
                {isRegistering
                  ? 'Clique abaixo para entrar com sua conta'
                  : 'É simples, fácil e rápido'}
              </p>
              <button className={Styles.createButton} onClick={toggleForm}>
                {isRegistering ? 'Entrar' : 'Criar conta'}
              </button>
            </div>

            {/* Lado formulário */}
            <div className={Styles.rightSide}>
              <img src={logo} alt="Logo Enlace+" className={Styles.logo} />
              <h3>{isRegistering ? 'Cadastre-se para começar!' : 'Entre e conecte-se!'}</h3>

              <form className={Styles.form}>
                {isRegistering ? (
                  <>
                    <div className={Styles.inputGroup}>
                      <FaUser className={Styles.icon} />
                      <input
                        type="text"
                        required
                        placeholder="Nome completo"
                        className={Styles.input}
                      />
                    </div>
                    <div className={Styles.inputGroup}>
                      <FaEnvelope className={Styles.icon} />
                      <input
                        type="email"
                        required
                        placeholder="Seu e-mail"
                        className={Styles.input}
                      />
                    </div>
                    <div className={Styles.inputGroup}>
                      <FaLock className={Styles.icon} />
                      <input
                        type="password"
                        required
                        placeholder="Crie uma senha"
                        className={Styles.input}
                      />
                    </div>
<<<<<<< HEAD
                    <Link to="/inicio">
                    <button type="submit" className={Styles.loginButton}>
                      Cadastrar
                    </button>
                    </Link>
=======
                    <button type="submit" className={Styles.loginButton}>
                      Cadastrar
                    </button>
>>>>>>> 88214d85b6c6b5192ba9d0935592fc78a27bab97
                  </>
                ) : (
                  <>
                    <div className={Styles.inputGroup}>
                      <FaEnvelope className={Styles.icon} />
                      <input
                        type="text"
                        required
                        placeholder="Entre com e-mail ou telefone"
                        className={Styles.input}
                      />
                    </div>
                    <div className={Styles.inputGroup}>
                      <FaLock className={Styles.icon} />
                      <input
                        type="password"
                        required
                        placeholder="Coloque sua senha"
                        className={Styles.input}
                      />
                    </div>
                    <a href="/esqueci-senha" className={Styles.forgotLink}>
                      Esqueci minha senha
                    </a>
<<<<<<< HEAD
                   <Link to="/inicio">
                   <button type="submit" className={Styles.loginButton}>Entrar </button>
                   </Link>
=======
                    <button type="submit" className={Styles.loginButton}>
                      Entrar
                    </button>
>>>>>>> 88214d85b6c6b5192ba9d0935592fc78a27bab97
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
      <Chatbot/>
    </main>
  );
}

export default Loggin;
