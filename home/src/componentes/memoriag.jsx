import React, { useState, useEffect } from 'react';
import Styles from '../css/memoriag.module.css';

const icons = ['🚲', '🍃', '🧊', '⚓', '🛩️', '⚡', '💣', '💎', '❤️']; 
const symbols = [...icons, ...icons]; 

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Memoria = ({ onClose }) => {
  const [cards, setCards] = useState([]);
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setCards(shuffle(symbols));
    setMatched([]);
    setOpened([]);
    setMoves(0);
  }, []);

  useEffect(() => { 
    if (opened.length === 2) {
      const [first, second] = opened;
      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, first, second]);
      }
      setTimeout(() => setOpened([]), 800);
      setMoves((m) => m + 1);
    }
  }, [opened]);

  useEffect(() => {
    if (matched.length === symbols.length && matched.length > 0) {
      setTimeout(() => {
        const again = window.confirm(`Você ganhou com ${moves} movimentos! Jogar de novo?`);
        if (again) {
          setCards(shuffle(symbols));
          setMatched([]);
          setOpened([]);
          setMoves(0);
        } else {
          onClose();
        }
      }, 500);
    }
  }, [matched]);

  const handleClick = (index) => {
    if (opened.length === 2 || opened.includes(index) || matched.includes(index)) return;
    setOpened((prev) => [...prev, index]);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.pontos}>Movimentos: {moves}</div>
      <div className={Styles.deck}>
        {cards.map((icon, i) => (
          <div
            key={i}
            className={`${Styles.carta} ${
              opened.includes(i) || matched.includes(i) ? Styles.virada : ''
            }`}
            onClick={() => handleClick(i)}
          >
            {opened.includes(i) || matched.includes(i) ? icon : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memoria;