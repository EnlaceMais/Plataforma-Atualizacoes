import React, { useState, useRef, useEffect } from 'react';
import Styles from '../css/feed.module.css';
import foto from '../imagem/usuario.png';
import grupo from '../imagem/grupo.png';
import post from '../imagem/postagem.png';
import fotoPerfil from '../imagem/foto_perfil.png';
import like from '../imagem/like.png';
import coment from '../imagem/coment.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCamera, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Feed() {
    const [mensagem, setMensagem] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

    // Estados para câmera
    const [cameraAtiva, setCameraAtiva] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    // Estados para reações
    const [curtido, setCurtido] = useState(false);
    const [comentado, setComentado] = useState(false);

    useEffect(() => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } 
        else {document.body.style.overflow = 'auto';
            if (streamRef.current) {streamRef.current.getTracks().forEach(track => 
                track.stop()); streamRef.current = null;
            } setCameraAtiva(false);
        }
        return () => {document.body.style.overflow = 'auto';};
    }, [modalAberto]);

    useEffect(() => {
        if (cameraAtiva && videoRef.current && streamRef.current) {videoRef.current.srcObject = streamRef.current;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {playPromise.catch(error => 
                {console.error('Erro ao iniciar vídeo:', error);});
            }
        }
    }, [cameraAtiva]);

    const abrirCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            setCameraAtiva(true);
        } catch (err) {
            alert('Erro ao acessar a câmera: ' + err.message);
        }
    };

    const fecharCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setCameraAtiva(false);
    };

    const tirarFoto = () => {
        if (!videoRef.current) return;
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            if (blob) {
                setArquivoSelecionado(new File([blob], 'foto_tirada.png', { type: 'image/png' }));
                alert('Foto tirada com sucesso!');
                fecharCamera();
            }
        }, 'image/png');
    };

    const handleFotoClick = () => {
        document.getElementById('inputModalFoto').click();
    };

    const handleArquivoChange = (e) => {
        if (e.target.files.length > 0) {
            alert('Arquivo selecionado com sucesso!');
            setArquivoSelecionado(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mensagem.trim()) {
            alert('Post enviado com sucesso!');
            setMensagem('');
            setArquivoSelecionado(null);
            setModalAberto(false);
            fecharCamera();
        }
    };

    // Funções para reações
    const toggleCurtir = () => {
        setCurtido(prev => !prev);
    };

    const toggleComentar = () => {
        setComentado(prev => !prev);
    };

    const [indiceAtual, setIndiceAtual] = useState(0);

   
    return (
        <section className={Styles.feed}>
            {/* Postagem rápida */}
            <div className={Styles.quadro1}>
                <div className={Styles.usuario}>
                    <img src={foto} alt="foto usuário" />
                </div>

                <form className={Styles.form} onSubmit={handleSubmit}>
                    <input
                        className={Styles.texto}
                        type="text"
                        placeholder="Compartilhe algo hoje, Maria!"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />

                    <div className={Styles.botoesLinha}>
                        <button
                            type="button"
                            className={Styles.iconeBotao}
                            onClick={() => document.getElementById('inputFoto').click()}
                        >
                            <FontAwesomeIcon icon={faCamera} />
                            <span>Foto</span>
                        </button>

                        <button type="button" className={Styles.iconeBotao}>
                            <FontAwesomeIcon icon={faSmile} />
                            <span>Sentimento</span>
                        </button>

                        <input
                            className={Styles.botao}
                            type="submit"
                            value="Enviar"
                            disabled={!mensagem.trim()}
                        />

                        <input
                            type="file"
                            id="inputFoto"
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleArquivoChange}
                        />
                    </div>
                </form>
            </div>

            {/* Botão de abrir modal */}
            <div className={Styles.quadro2}>
                <button
                    className={Styles.botao2}
                    onClick={() => setModalAberto(true)}
                >
                    +
                </button>
                <div className={Styles.texto2}>
                    <h2>Criar uma lembrança</h2>
                    <p>Compartilhe uma foto ou vídeo</p>
                </div>
            </div>

            {modalAberto && (
                <div className={Styles.modalOverlay}>
                    <div className={Styles.modal}>
                        <button
                            onClick={() => {
                                setModalAberto(false);
                                fecharCamera();
                            }}
                            className={Styles.modalClose}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className={Styles.modalHeader}>
                            <h2>Fazer uma postagem</h2>
                            <div className={Styles.linha}></div>
                        </div>

                        <div className={Styles.modalUser}>
                            <img src={foto} alt="Usuária" />
                            <div>
                                <strong>Maria Antônia</strong>
                            </div>
                        </div>

                        <textarea
                            className={Styles.modalTexto}
                            placeholder="Compartilhe algo hoje, Maria!"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />

                        <div className={Styles.modalUpload2}>
                            <div
                                className={Styles.modalUpload}
                                onClick={handleFotoClick}
                            >
                                <button className={Styles.botao3}><FontAwesomeIcon icon={faPlus} /></button>
                                <p>
                                    Clique aqui para adicionar <strong><br />fotos ou vídeos ou</strong>
                                </p>
                                <input
                                    type="file"
                                    id="inputModalFoto"
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleArquivoChange}
                                />
                                {!cameraAtiva && (
                                    <button
                                        className={Styles.botao4}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            abrirCamera();
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCamera} /> Tire uma foto
                                    </button>
                                )}
                            </div>
                        </div>

                        <button
                            className={Styles.modalPostar}
                            onClick={handleSubmit}
                            disabled={!mensagem.trim()}
                            style={{ marginTop: '1.5rem' }}
                        >
                            Postar
                        </button>
                    </div>
                </div>
            )}

            {/* Overlay da câmera */}
            {cameraAtiva && (
                <div className={Styles.cameraOverlay}>
                    <video
                        ref={videoRef}
                        className={Styles.cameraVideo}
                        autoPlay
                        muted
                        playsInline
                    />
                    <div className={Styles.cameraButtons}>
                        <button
                            className={Styles.cameraButton}
                            onClick={tirarFoto}
                        >
                            Tirar foto
                        </button>
                        <button
                            className={Styles.cameraButton}
                            onClick={fecharCamera}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            <div className={Styles.quadro3}>
                <div className={Styles.textoInicio}>
                    <img src={grupo} alt='comunidade' />
                    <h2>Amigos para conhecer</h2>
                </div>
                <div className={Styles.carrossel}>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                </div>
            </div>

            <div className={Styles.quadro4}>
                <div className={Styles.perfil}>
                    <img src={fotoPerfil} alt='foto de perfil' />
                    <div className={Styles.infoUser}>
                        <h5>Elizabete Souza</h5>
                        <p>29 de janeiro, 2025</p>
                    </div>
                </div>
                <div className={Styles.descricao}>
                    <h5>Um dia com os meus netinhos lindos.</h5>
                    <p>#familia #amem #enlacemais</p>
                </div>
                <div className={Styles.foto}>
                    <img src={post} alt="fotinha" />
                </div>
                <div className={Styles.reacao}>
                    <div
                        className={`${Styles.like} ${curtido ? Styles.liked : ''}`}
                        onClick={toggleCurtir}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleCurtir(); }}
                    >
                        <img src={like} alt='like' />
                        <p>{curtido ? 'Curtiu' : 'Curtir'}</p>
                    </div>
                    <div
                        className={`${Styles.coment} ${comentado ? Styles.commented : ''}`}
                        onClick={toggleComentar}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleComentar(); }}
                    >
                        <img src={coment} alt='comentario' />
                        <p>{comentado ? 'Comentou' : 'Comentar'}</p>
                    </div>
                </div>
            </div>
            <div className={Styles.quadro5}>

            </div>


            <footer className={Styles.rodape}>
                <p>© 2025 Enlace+ - Todos os direitos reservados</p>
                <div className={Styles.links}>
                    <p>Contato</p>
                    <p>Suporte</p>
                    <p>Termos de uso</p>
                </div>
            </footer>
        </section>
    );
}

export default Feed;
