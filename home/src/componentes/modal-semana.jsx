import { useState } from "react";
import styles from "../css/modal-semana.module.css";

export default function Modal({ aoFechar }) {
  const [mensagem, setMensagem] = useState("");
  const [respondeu, setRespondeu] = useState(false);

   const confirmar = () => {
  setMensagem("✔ Sua presença foi confirmada.");
  setRespondeu(true);
  setTimeout(() => {
    aoFechar();
  }, 2000); // espera 2s antes de fechar o modal
};

const negar = () => {
  setMensagem("✖ Sua presença não foi confirmada.");
  setRespondeu(true);
  setTimeout(() => {
    aoFechar();
  }, 2000);
};

  return (
    <div className={styles.fundo}>
      <div className={styles.janela}>
        <div className={styles.cabecalho}>
          <h2>Confirmar presença</h2>
          <button className={styles.fechar} onClick={aoFechar}>×</button>
        </div>

        <div className={styles.corpo}>
          {!respondeu ? (
            <>
              <p>Deseja confirmar<br /> a sua presença nesse evento?</p>
              <div className={styles.botoes}>
                <button className={styles.botaoSim} onClick={confirmar}>
                  SIM <span className={styles.icone}>✔</span>
                </button>
                <button className={styles.botaoNao} onClick={negar}>
                  NÃO <span className={styles.icone}>✖</span>
                </button>
              </div>
            </>
          ) : (
            <p className={styles.mensagem}>{mensagem}</p>
          )}
        </div>
      </div>
    </div>
  );
}
