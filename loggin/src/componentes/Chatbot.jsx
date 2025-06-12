import React, { useState } from 'react';
import '../css/Chatbot.css';
import icone from '../imagem/tico_chat.png'
import ticoAvatar from '../imagem/tico_avatar.png'

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão bolinha com tooltip */}
      {!open && (
        <div className="floating-chat-wrapper" onClick={() => setOpen(true)}>
          <span className="floating-chat-tooltip">Precisa de ajuda? Clique aqui</span>
          <button aria-label="Abrir chat" className="floating-chat-button">
            <img src={icone} alt="Ícone do chat" />
          </button>
        </div>
      )}

      {/* Tela escurecida e chat aberto */}
      {open && (
        <>
          <div className="floating-chat-blur" onClick={() => setOpen(false)}></div>

          <div className="floating-chat-opened">
            <div className="floating-chat-top">
              <img src={ticoAvatar} alt="Tico" className="tico-avatar" />
              <div className="top-text">
                <h1>Seu Tico</h1>
                <p>Te respondo imediatamente!</p>
              </div>
              <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            </div>

            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-6f9e3b1e-1809-444a-81d3-82d40a928812/bots/cr747_agente1cR6dHk/webchat?__version__=2"
              title="Copilot Chat"
              style={{ flexGrow: 1, border: 'none' }}
            />
          </div>
        </>
      )}
    </>
  );
}
