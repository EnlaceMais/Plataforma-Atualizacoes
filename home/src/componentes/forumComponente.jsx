import { useState, useEffect } from "react";
import Styles from '../css/forumComponente.module.css';
import voltar from '../imagem/voltar.png';
import foto3 from '../imagem/forum.jpg';
import foto4 from '../imagem/foto4.jpeg';
import foto5 from '../imagem/foto5.jpeg';
import local from '../imagem/localizacao.png';
import agenda from '../imagem/agenda.png';
import pessoas from '../imagem/pessoas.png';
import Modal from './modal-semana'; // já está importado corretamente
import { Link } from 'react-router-dom';

function ForumComponente() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [indiceAtual, setIndiceAtual] = useState(0);

    const imagens = [foto3, foto4, foto5]; // adicione mais imagens aqui, ex: [img1, img2, img3]

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
                <h2 className={Styles.titulo}>7º Fórum São Paulo da Longevidade</h2>
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
                    <img className={Styles.info9} src={local} alt="Ícone de localização" />
                    <h3 className={Styles.textinho}>Local: Rua José Bernardo, 333 – Vila Guilherme</h3>
                </div>

                <div className={Styles.info7}>
                    <img className={Styles.info9} src={agenda} alt="Ícone de agenda" />
                    <h3 className={Styles.textinho}>Data: 27 a 29 de outubro de 2025</h3>
                </div>

                <div className={Styles.info8}>
                    <img className={Styles.info9} src={pessoas} alt="Ícone de pessoas" />
                    <h3 className={Styles.textinho}>32 pessoas confirmaram presença</h3>
                </div>

                <h3 className={Styles.descricao}>
                    Evento que reúne especialistas, empresas e público 60+ para debater
                    temas relacionados à longevidade, saúde e bem-estar.
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

export default ForumComponente;
