import { useState, useEffect } from "react";
import Styles from '../css/poloComponente.module.css';
import voltar from '../imagem/voltar.png';
import foto3 from '../imagem/polo.jpg';
import foto4 from '../imagem/polo2.jpg';
import foto5 from '../imagem/polo3.jpg';
import local from '../imagem/localizacao.png';
import agenda from '../imagem/agenda.png';
import pessoas from '../imagem/pessoas.png';
import Modal from './modal-semana';
import { Link } from 'react-router-dom';

function PoloComponente() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const imagens = [foto3, foto4, foto5];

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
                    <a className={Styles.info5} href="#"><img className={Styles.evento} src={voltar} alt="Voltar" /></a>
                    <Link to="/eventos" className={Styles.info4} href="#">Voltar para a página anterior</Link>
                </h5>
            </div>

            <section className={Styles.semana1}>
                <h2 className={Styles.titulo}>Polo Cultural da Terceira Idade</h2>

                {/* Carrossel de imagens */}
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
                    <img className={Styles.info9} src={local} alt="Localização" />
                    <h3 className={Styles.textinho}>Local: Rua Teixeira Mendes, 262 – Cambuci</h3>
                </div>

                <div className={Styles.info7}>
                    <img className={Styles.info9} src={agenda} alt="Agenda" />
                    <h3 className={Styles.textinho}>Data: Atividades contínuas ao longo do ano</h3>
                </div>

                <div className={Styles.info8}>
                    <img className={Styles.info9} src={pessoas} alt="Pessoas" />
                    <h3 className={Styles.textinho}>20 pessoas confirmaram presença</h3>
                </div>

                <h3 className={Styles.descricao}>
                    Espaço de convivência que oferece, gratuitamente, oficinas socioculturais
                    com atividades de lazer, esporte, educação e saúde para o estímulo e motivação da
                    pessoa idosa.
                </h3>

                <button className={Styles.b1} onClick={() => setMostrarModal(true)}>
                    Confirmar Presença
                </button>

                {mostrarModal && (
                    <Modal aoFechar={() => setMostrarModal(false)} />
                )}
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

export default PoloComponente;
