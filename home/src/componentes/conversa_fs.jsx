import React, { useEffect, useRef, useState } from "react";
import Styles from "../css/conversa_fs.module.css";
import usuario3 from "../imagem/image70.png";
import usuario4 from "../imagem/proa1.png";
import voltar from "../imagem/voltar.png";
import { useParams, Link } from "react-router-dom";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import axios from "axios";

function Conversa_fs() {
  const { id } = useParams();
  const [mensagens, setMensagens] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [usuarioNome, setUsuarioNome] = useState("");
  const stompClientRef = useRef(null);
  const mensagensEndRef = useRef(null);

  // Pede nome do usuário ao entrar
  useEffect(() => {
    const nome = prompt("Digite seu nome para entrar no chat:");
    if (nome) setUsuarioNome(nome.trim());
  }, []);

  // Conecta ao WebSocket
  useEffect(() => {
    if (!usuarioNome) return;

    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,
    });

    client.onConnect = () => {
      console.log("✅ Conectado ao WebSocket");

      client.subscribe("/topic/public", (message) => {
        const novaMensagem = JSON.parse(message.body);
        console.log("📩 Mensagem recebida:", novaMensagem);
        setMensagens((prev) => [...prev, novaMensagem]);
      });

      stompClientRef.current = client;
    };

    client.onStompError = (frame) => {
      console.error("Erro STOMP:", frame);
    };

    client.activate();

    return () => client.deactivate();
  }, [usuarioNome]);

  // Carrega mensagens existentes no banco
  useEffect(() => {
    axios
      .get("http://localhost:8080/mensagens")
      .then((res) => setMensagens(res.data))
      .catch((err) => console.error("Erro ao buscar mensagens", err));
  }, []);

  // Scroll automático
  useEffect(() => {
    mensagensEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  // Envia a mensagem via WebSocket
  const enviarMensagem = () => {
    if (!mensagem.trim() || !usuarioNome || !stompClientRef.current) return;

    const msgObj = {
      conteudo: mensagem,
      usuario: { nome: usuarioNome },
      conversa: { id: 1 }, // conversa fixa
    };

    try {
      stompClientRef.current.publish({
        destination: "/app/mensagem",
        body: JSON.stringify(msgObj),
      });
      console.log("📤 Mensagem enviada:", msgObj);

      // NÃO adiciona localmente aqui para evitar duplicação
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div>
      <h2>Conversa com ID: {id}</h2>

      <div className={Styles.feed}>
        <section className={Styles.quadro1}>
          <div className={Styles.acima}>
            <Link to="/menulateral">
              {window.innerWidth <= 768 && (
                <button className={Styles.botaoVoltar}>
                  <img className={Styles.vol} src={voltar} alt="voltar" />
                </button>
              )}
            </Link>

            <div className={Styles.de1}>
              <h3 className={Styles.le1}>{usuarioNome}</h3>
              <p className={Styles.le2}>Online agora</p>
            </div>
          </div>

          <section className={Styles.quadromeio}>
            {mensagens.map((msg, idx) => {
              const isMinhaMsg = msg.usuario?.nome === usuarioNome;
              return (
                <div
                  key={idx}
                  className={isMinhaMsg ? Styles.minic3 : Styles.minic2}
                >
                  {!isMinhaMsg && (
                    <img className={Styles.usu2} src={usuario3} alt="usuário" />
                  )}
                  <div className={isMinhaMsg ? Styles.men2 : Styles.men1}>
                    {!isMinhaMsg && <strong>{msg.usuario?.nome}:</strong>}{" "}
                    {msg.conteudo}
                  </div>
                  {isMinhaMsg && (
                    <img className={Styles.usu3} src={usuario4} alt="você" />
                  )}
                </div>
              );
            })}
            <div ref={mensagensEndRef} />
          </section>

          <section className={Styles.quadro2}>
            <div className={Styles.abaixo2}>
              <input
                type="text"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Mensagem"
                onKeyDown={(e) => {
                  if (e.key === "Enter") enviarMensagem();
                }}
              />
              <button className={Styles.bot} onClick={enviarMensagem}>
                Enviar
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Conversa_fs;
