import { useState, useEffect } from "react";
import Styles from '../css/chacaraComponente.module.css';
import voltar from '../imagem/voltar.png';
import cha from '../imagem/chacara.webp';
import chacara2 from '../imagem/chacara2.jpg';
import chacara3 from '../imagem/chacara3.jpg';
import local from '../imagem/localizacao.png';
import agenda from '../imagem/agenda.png';
import pessoas from '../imagem/pessoas.png';
import Modal from './modal-semana'; // novo
import { Link } from 'react-router-dom';

function ChacaraComponente() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const imagens = [cha, chacara2, chacara3]; // adicione mais imagens aqui, ex: [img1, img2, img3]

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceAtual((prev) => (prev + 1) % imagens.length);
        }, 5000);

        return () => clearInterval(intervalo);
    }, [imagens.length]);

    return (
        <section className={Styles.semana}>
            <div className={Styles.quadro}>
                <h5 className={Styles.info3}>
                    <a className={Styles.info5} href="#"><img className={Styles.evento} src={voltar} alt="" /></a>
                    <Link to="/eventos" className={Styles.info4}>Voltar para a página anterior</Link>
                </h5>
            </div>

            <section className={Styles.semana1}>
                <h2 className={Styles.titulo}>Atividades no Parque Chácara das Flores</h2>

                <div className={Styles.carrosselContainer}>
                    <img
                        className={Styles.quadro1}
                        src={imagens[indiceAtual]}
                        alt={`Imagem ${indiceAtual + 1}`}
                    />
                    <div className={Styles.indicadores}>
                        {imagens.map((_, i) => (
                            <span
                                key={i}
                                className={`${Styles.bolinha} ${i === indiceAtual ? Styles.ativa : ""}`}
                            />
                        ))}
                    </div>
                </div>


                <div className={Styles.info6}>
                    <img className={Styles.info9} src={local} alt="" />
                    <h3 className={Styles.textinho}>Local: Estrada Dom João Neri, 3551 – Jardim Nazaré</h3>
                </div>

                <div className={Styles.info7}>
                    <img className={Styles.info9} src={agenda} alt="" />
                    <h3 className={Styles.textinho}>Atividades contínuas ao longo do ano</h3>
                </div>

                <div className={Styles.info8}>
                    <img className={Styles.info9} src={pessoas} alt="" />
                    <h3 className={Styles.textinho}>22 pessoas confirmaram presença</h3>
                </div>

                <h3 className={Styles.descricao}>
                    Ginástica para idosos, trilha da terceira idade, alongamento e futsal.
                </h3>

                <button className={Styles.b1} onClick={() => setMostrarModal(true)}>
                    Confirmar Presença
                </button>

                {mostrarModal && (
                    <Modal aoFechar={() => setMostrarModal(false)} />)}
            </section>

            <footer className={Styles.rodape}>
        <p>© 2025 Enlace+ - Todos os direitos reservados</p>
        <div className={Styles.links}>
          <a href='#'>Termo de uso</a>
          <a href='#'>Privacidade</a>
          <a href='#'>Ajuda</a>
        </div>
      </footer>
        </section>
    );
}

export default ChacaraComponente;
