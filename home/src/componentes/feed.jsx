import React, { useState, useRef, useEffect } from 'react';
import Styles from '../css/feed.module.css';
import foto from '../imagem/usuario.png';
import grupo from '../imagem/grupo.png';
//import fotoPerfil from '../imagem/foto_perfil.png';
import like from '../imagem/like.png';
import coment from '../imagem/coment.png';
import perfil from '../imagem/pessoas.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCamera, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Feed() {
    const [mensagem, setMensagem] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
    const [cameraAtiva, setCameraAtiva] = useState(false);
    const [curtido, setCurtido] = useState(false);
    const [comentado, setComentado] = useState(false);
    const [postagens, setPostagens] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const videoRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        setCarregando(true);
        fetch('http://localhost:8080/postagens')
            .then(res => res.json())
            .then(data => {
                setPostagens(data.reverse());
                setCarregando(false);
            })
            .catch(err => {
                console.error('Erro ao buscar postagens:', err);
                setCarregando(false);
            });
    }, []);

    useEffect(() => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            setCameraAtiva(false);
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [modalAberto]);

    useEffect(() => {
        if (cameraAtiva && videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error('Erro ao iniciar vídeo:', error);
                });
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
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mensagem.trim()) return;
        if (!arquivoSelecionado || !(arquivoSelecionado instanceof File)) {
            alert('Selecione uma imagem válida!');
            return;
        }

        const formData = new FormData();
        formData.append('contexto', mensagem);
        formData.append('imagem', arquivoSelecionado);

        try {
            const response = await fetch('http://localhost:8080/postagens', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const novaPostagem = await response.json();
                setPostagens([novaPostagem, ...postagens]);
                alert('Post enviado com sucesso!');
                setMensagem('');
                setArquivoSelecionado(null);
                setModalAberto(false);
                fecharCamera();
            } else {
                alert('Erro ao enviar post!');
            }
        } catch (err) {
            alert('Erro ao enviar post: ' + err.message);
        }
    };

    const toggleCurtir = () => setCurtido(prev => !prev);
    const toggleComentar = () => setComentado(prev => !prev);

    function formatarData(dataString) {
        if (!dataString) return '';
        const data = new Date(dataString);
        return data.toLocaleString('pt-BR', { dateStyle: 'medium', timeStyle: 'short' });
    }

    return (
        <section className={Styles.feed}>
            <div className={Styles.quadro1}>
                <div className={Styles.usuario}><img src={foto} alt="foto usuário" /></div>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <input
                        className={Styles.texto}
                        type="text"
                        placeholder="Compartilhe algo hoje, Maria!"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                    <div className={Styles.botoesLinha}>
                        <button type="button" className={Styles.iconeBotao} onClick={() => document.getElementById('inputFoto').click()}>
                            <FontAwesomeIcon icon={faCamera} /><span>Foto</span>
                        </button>
                        <button type="button" className={Styles.iconeBotao}>
                            <FontAwesomeIcon icon={faSmile} /><span>Sentimento</span>
                        </button>
                        <input className={Styles.botao} type="submit" value="Enviar" disabled={!mensagem.trim() || !arquivoSelecionado} />
                        <input type="file" id="inputFoto" style={{ display: 'none' }} accept="image/*" onChange={handleArquivoChange} />
                    </div>
                </form>
            </div>

            <div className={Styles.quadro2}>
                <button className={Styles.botao2} onClick={() => setModalAberto(true)}>+</button>
                <div className={Styles.texto2}><h2>Criar uma lembrança</h2><p>Compartilhe uma foto ou vídeo</p></div>
            </div>

            {modalAberto && (
                <div className={Styles.modalOverlay}>
                    <div className={Styles.modal}>
                        <button onClick={() => { setModalAberto(false); fecharCamera(); }} className={Styles.modalClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className={Styles.modalHeader}><h2>Fazer uma postagem</h2><div className={Styles.linha}></div></div>
                        <div className={Styles.modalUser}><img src={foto} alt="Usuária" /><div><strong>Maria Antônia</strong></div></div>
                        <textarea 
                            className={Styles.modalTexto} 
                            placeholder="Compartilhe algo hoje, Maria!" 
                            value={mensagem} 
                            onChange={(e) => setMensagem(e.target.value)} 
                        />

                        <div className={Styles.modalUpload2}>
                            <div className={Styles.modalUpload} onClick={handleFotoClick}>
                                <button className={Styles.botao3}><FontAwesomeIcon icon={faPlus} /></button>
                                <p>Clique aqui para adicionar <strong><br />fotos ou vídeos ou</strong></p>
                                <input type="file" id="inputModalFoto" style={{ display: 'none' }} accept="image/*" onChange={handleArquivoChange} />

                                {!cameraAtiva && (
                                    <button 
                                        className={Styles.botao4} 
                                        onClick={(e) => { e.stopPropagation(); abrirCamera(); }}
                                    >
                                        <FontAwesomeIcon icon={faCamera} /> Tire uma foto
                                    </button>
                                )}

                                {arquivoSelecionado && (
                                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                        <h4>Pré-visualização:</h4>
                                        <img
                                            src={URL.createObjectURL(arquivoSelecionado)}
                                            alt="Pré-visualização"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '300px',
                                                objectFit: 'contain',
                                                borderRadius: '10px',
                                                marginTop: '0.5rem'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <button 
                            className={Styles.modalPostar} 
                            onClick={handleSubmit} 
                            disabled={!mensagem.trim() || !arquivoSelecionado} 
                            style={{ marginTop: '1.5rem' }}
                        >
                            Postar
                        </button>
                    </div>
                </div>
            )}

            {cameraAtiva && (
                <div className={Styles.cameraOverlay}>
                    <video ref={videoRef} className={Styles.cameraVideo} autoPlay muted playsInline />
                    <div className={Styles.cameraButtons}>
                        <button className={Styles.cameraButton} onClick={tirarFoto}>Tirar foto</button>
                        <button className={Styles.cameraButton} onClick={fecharCamera}>Cancelar</button>
                    </div>
                </div>
            )}

            <div className={Styles.quadro3}>
                <div className={Styles.textoInicio}><img src={grupo} alt='comunidade' /><h2>Amigos para conhecer</h2></div>
                <div className={Styles.carrossel}>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                    <div className={Styles.card1}></div>
                </div>
            </div>

            <div className={Styles.quadro4}>
                {carregando ? (
                    <div className={Styles.carregando}>Carregando postagens...</div>
                ) : postagens.length === 0 ? (
                    <p style={{ textAlign: 'center', margin: '2rem' }}>Nenhuma postagem ainda.</p>
                ) : (
                    postagens.map((post) => (
                        <div key={post.id_postagem} className={Styles.postagem}>
                            <div className={Styles.perfil}>
                                <img src={perfil} alt='foto de perfil' />
                                <div className={Styles.infoUser}>
                                    <h5>{post.usuario ? post.usuario.nome : 'Enlace+'}</h5>
                                    <p>{formatarData(post.data_postagem)}</p>
                                </div>
                            </div>
                            <div className={Styles.descricao}>
                                <h5>{post.contexto}</h5>
                            </div>
                            <div className={Styles.foto}>
                                <img 
                                    src={`http://localhost:8080/imagens/${post.imagem}`} 
                                    alt="post" 
                                />
                            </div>
                            <div className={Styles.reacao}>
                                <div className={`${Styles.like} ${curtido ? Styles.liked : ''}`} onClick={toggleCurtir}>
                                    <img src={like} alt='like' /><p>{curtido ? 'Curtiu' : 'Curtir'}</p>
                                </div>
                                <div className={`${Styles.coment} ${comentado ? Styles.commented : ''}`} onClick={toggleComentar}>
                                    <img src={coment} alt='comentario' /><p>{comentado ? 'Comentou' : 'Comentar'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className={Styles.quadro5}></div>
            
            <footer className={Styles.rodape}>
                <p>© 2025 Enlace+ - Todos os direitos reservados</p>
                <div className={Styles.links}>
                    <a href="/contato">Contato</a>
                    <a href="/suporte">Suporte</a>
                    <a href="/termos">Termos de uso</a>
                </div>
            </footer>
        </section>
    );
}

export default Feed;