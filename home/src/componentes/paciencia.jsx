import React, { useState, useEffect, useRef } from 'react';
import Styles from '../css/paciencia.module.css';

const Paciencia = ({ onClose }) => {
  // Estado do jogo
  const [deck, setDeck] = useState([]);
  const [suits, setSuits] = useState({
    spades: Array.from({length: 13}, (_, i) => ({
      rank: i === 0 ? 'A' : i === 10 ? 'J' : i === 11 ? 'Q' : i === 12 ? 'K' : (i+1).toString(),
      suit: 'spade',
      faceUp: false
    })),
    hearts: Array.from({length: 13}, (_, i) => ({
      rank: i === 0 ? 'A' : i === 10 ? 'J' : i === 11 ? 'Q' : i === 12 ? 'K' : (i+1).toString(),
      suit: 'heart',
      faceUp: false
    })),
    diamonds: Array.from({length: 13}, (_, i) => ({
      rank: i === 0 ? 'A' : i === 10 ? 'J' : i === 11 ? 'Q' : i === 12 ? 'K' : (i+1).toString(),
      suit: 'diamond',
      faceUp: false
    })),
    clubs: Array.from({length: 13}, (_, i) => ({
      rank: i === 0 ? 'A' : i === 10 ? 'J' : i === 11 ? 'Q' : i === 12 ? 'K' : (i+1).toString(),
      suit: 'club',
      faceUp: false
    }))
  });
  
  const [table, setTable] = useState({
    stock: [],
    waste: [],
    spades: [],
    hearts: [],
    diamonds: [],
    clubs: [],
    tab: Array(7).fill().map(() => [])
  });
  
  const [gameState, setGameState] = useState({
    time: 0,
    moves: 0,
    score: 0,
    bonus: 0,
    lastEventTime: 0,
    unplayedTabCards: [],
    selectedCard: null,
    selectedCards: [],
    sourcePile: null,
    gameStatus: 'ready'
  });

  const timerRef = useRef(null);
  const clicksRef = useRef(0);
  const clickTimerRef = useRef(null);

  // Inicializa o jogo
  useEffect(() => {
    initializeGame();
    return () => {
      clearInterval(timerRef.current);
      clearTimeout(clickTimerRef.current);
    };
  }, []);

  const initializeGame = () => {
    const newDeck = createDeck();
    const shuffledDeck = shuffleDeck(newDeck);
    const newTable = dealCards(shuffledDeck);
    
    setDeck(shuffledDeck);
    setTable(newTable);
    setGameState({
      time: 0,
      moves: 0,
      score: 0,
      bonus: 0,
      lastEventTime: 0,
      unplayedTabCards: getUnplayedTabCards(newTable),
      selectedCard: null,
      selectedCards: [],
      sourcePile: null,
      gameStatus: 'ready'
    });
  };

  const createDeck = () => {
    return Object.values(suits).flat();
  };

  const shuffleDeck = (deckToShuffle) => {
    const newDeck = [...deckToShuffle];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
  };

  const dealCards = (deckToDeal) => {
    const newTable = {
      stock: [...deckToDeal],
      waste: [],
      spades: [],
      hearts: [],
      diamonds: [],
      clubs: [],
      tab: Array(7).fill().map(() => [])
    };

    // Distribui cartas para o tableau
    for (let i = 0; i < 7; i++) {
      for (let j = i; j < 7; j++) {
        const card = newTable.stock.pop();
        card.faceUp = (j === i);
        newTable.tab[j].push(card);
      }
    }

    return newTable;
  };

  const getUnplayedTabCards = (currentTable) => {
    return currentTable.tab.flatMap(pile => 
      pile.filter(card => !card.faceUp)
    );
  };

  const startGame = () => {
    setGameState(prev => ({ ...prev, gameStatus: 'active' }));
    startTimer();
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        time: prev.time + 1,
        score: Math.max(0, prev.score - (prev.time % 10 === 0 ? 2 : 0))
      }));
    }, 1000);
  };

  const endGame = () => {
    setGameState(prev => ({ ...prev, gameStatus: 'over' }));
    clearInterval(timerRef.current);
    calculateBonus();
  };

  const calculateBonus = () => {
    setGameState(prev => {
      const bonus = prev.time >= 30 ? Math.floor(700000 / prev.time) : 0;
      return { ...prev, bonus, score: prev.score + bonus };
    });
  };

  const handleCardClick = (card, pileType, pileIndex, event) => {
    if (event.timeStamp === gameState.lastEventTime) return;
    setGameState(prev => ({ ...prev, lastEventTime: event.timeStamp }));

    if (gameState.gameStatus === 'ready') {
      startGame();
    }

    clicksRef.current++;
    if (clicksRef.current === 1) {
      clickTimerRef.current = setTimeout(() => {
        handleSingleClick(card, pileType, pileIndex);
        clicksRef.current = 0;
      }, 200);
    } else if (clicksRef.current === 2) {
      clearTimeout(clickTimerRef.current);
      clicksRef.current = 0;
      handleDoubleClick(card, pileType, pileIndex);
    }
  };

  const handleSingleClick = (card, pileType, pileIndex) => {
    if (pileType === 'stock') {
      drawFromStock();
      return;
    }

    if (gameState.selectedCard) {
      attemptMove(card, pileType, pileIndex);
    } else {
      if (pileType === 'tab' && !card.faceUp) return;
      
      const selectedCards = pileType === 'tab' ? getCardSequence(card, pileIndex) : [card];
      
      setGameState(prev => ({
        ...prev,
        selectedCard: card,
        selectedCards,
        sourcePile: { type: pileType, index: pileIndex }
      }));
    }
  };

  const handleDoubleClick = (card, pileType, pileIndex) => {
    if (pileType === 'stock' || (pileType === 'tab' && !card.faceUp)) return;
    
    setGameState(prev => ({
      ...prev,
      selectedCard: card,
      selectedCards: [card],
      sourcePile: { type: pileType, index: pileIndex }
    }));

    const destPile = card.suit + 's';
    attemptMove(card, destPile, null);
  };

  const drawFromStock = () => {
    if (table.stock.length === 0) {
      reloadStock();
      return;
    }

    setTable(prev => {
      const newWaste = [...prev.waste];
      const newStock = [...prev.stock];
      const card = newStock.pop();
      card.faceUp = true;
      newWaste.push(card);
      
      return {
        ...prev,
        stock: newStock,
        waste: newWaste
      };
    });

    setGameState(prev => ({
      ...prev,
      moves: prev.moves + 1
    }));
  };

  const reloadStock = () => {
    if (table.waste.length === 0) return;

    setTable(prev => ({
      ...prev,
      stock: [...prev.waste].reverse().map(card => ({ ...card, faceUp: false })),
      waste: []
    }));

    setGameState(prev => ({
      ...prev,
      score: Math.max(0, prev.score - 100)
    }));
  };

  const validateMove = (selectedCard, sourcePile, destPileType, destPileIndex) => {
    if (['spades', 'hearts', 'diamonds', 'clubs'].includes(destPileType)) {
      const suit = destPileType.slice(0, -1);
      const foundation = table[destPileType];
      
      if (selectedCard.suit !== suit) return false;
      
      if (selectedCard.rank === 'A') {
        return foundation.length === 0;
      } else if (foundation.length === 0) {
        return false;
      }
      
      const lastCard = foundation[foundation.length - 1];
      const rankOrder = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const lastRankIndex = rankOrder.indexOf(lastCard.rank);
      const currentRankIndex = rankOrder.indexOf(selectedCard.rank);
      
      return currentRankIndex === lastRankIndex + 1;
    }
    
    if (destPileType === 'tab') {
      const tableauPile = table.tab[destPileIndex];
      
      if (tableauPile.length === 0) {
        return selectedCard.rank === 'K';
      }
      
      const lastCard = tableauPile[tableauPile.length - 1];
      
      const isRed = (card) => card.suit === 'heart' || card.suit === 'diamond';
      if (isRed(selectedCard) === isRed(lastCard)) {
        return false;
      }
      
      const rankOrder = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];
      const lastRankIndex = rankOrder.indexOf(lastCard.rank);
      const currentRankIndex = rankOrder.indexOf(selectedCard.rank);
      
      return currentRankIndex === lastRankIndex + 1;
    }
    
    return false;
  };

  const getCardSequence = (card, pileIndex) => {
    const pile = table.tab[pileIndex];
    const selectedIndex = pile.findIndex(c => 
      c.rank === card.rank && c.suit === card.suit
    );
    if (selectedIndex === -1) return [card];
    
    const sequence = [pile[selectedIndex]];
    for (let i = selectedIndex + 1; i < pile.length; i++) {
      const prevCard = sequence[sequence.length - 1];
      const currentCard = pile[i];
      
      const isRed = (card) => card.suit === 'heart' || card.suit === 'diamond';
      if (isRed(prevCard) === isRed(currentCard)) break;
      
      const rankOrder = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];
      if (rankOrder.indexOf(currentCard.rank) !== rankOrder.indexOf(prevCard.rank) + 1) break;
      
      sequence.push(currentCard);
    }
    
    return sequence;
  };

  const executeMove = (selectedCard, sourcePile, destPileType, destPileIndex) => {
    let scoreUpdate = 0;
    let cardsToMove = gameState.selectedCards.length > 0 ? gameState.selectedCards : [selectedCard];
    
    setTable(prev => {
      const newTable = JSON.parse(JSON.stringify(prev));
      
      // Remove from source
      if (sourcePile.type === 'waste') {
        newTable.waste = newTable.waste.slice(0, -1);
      } else if (['spades','hearts','diamonds','clubs'].includes(sourcePile.type)) {
        newTable[sourcePile.type] = newTable[sourcePile.type].slice(0, -1);
      } else if (sourcePile.type === 'tab') {
        const pile = newTable.tab[sourcePile.index];
        const selectedIndex = pile.findIndex(card => 
          card.rank === selectedCard.rank && card.suit === selectedCard.suit
        );
        
        newTable.tab[sourcePile.index] = pile.slice(0, selectedIndex);
        
        if (newTable.tab[sourcePile.index].length > 0) {
          newTable.tab[sourcePile.index][newTable.tab[sourcePile.index].length - 1].faceUp = true;
          scoreUpdate += 5;
        }
      }

      // Add to destination
      if (destPileType === 'waste') {
        newTable.waste = [...newTable.waste, ...cardsToMove];
      } else if (['spades','hearts','diamonds','clubs'].includes(destPileType)) {
        newTable[destPileType] = [...newTable[destPileType], cardsToMove[0]];
        scoreUpdate += 10 * cardsToMove.length;
      } else if (destPileType === 'tab') {
        newTable.tab[destPileIndex] = [...newTable.tab[destPileIndex], ...cardsToMove];
        scoreUpdate += 5 * cardsToMove.length;
      }

      return newTable;
    });

    setGameState(prev => ({
      ...prev,
      moves: prev.moves + 1,
      score: prev.score + scoreUpdate,
      selectedCard: null,
      selectedCards: [],
      sourcePile: null
    }));

    if (checkForWin()) {
      endGame();
    }
  };

  const attemptMove = (card, destPileType, destPileIndex) => {
    const { selectedCard, sourcePile } = gameState;
    
    if (!selectedCard || !sourcePile) return;

    if (validateMove(selectedCard, sourcePile, destPileType, destPileIndex)) {
      executeMove(selectedCard, sourcePile, destPileType, destPileIndex);
    } else {
      setGameState(prev => ({
        ...prev,
        selectedCard: null,
        selectedCards: [],
        sourcePile: null
      }));
    }
  };

  const checkForWin = () => {
    return (
      table.spades.length + table.hearts.length + 
      table.diamonds.length + table.clubs.length === 52
    );
  };

  const getSuitSymbol = (suit) => {
    switch(suit) {
      case 'spade': return '♠';
      case 'heart': return '♥';
      case 'diamond': return '♦';
      case 'club': return '♣';
      default: return '';
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderFoundationPlaceholders = () => {
    const foundationSuits = ['spades', 'hearts', 'diamonds', 'clubs'];
    
    return (
      <div className={Styles.foundations}>
        {foundationSuits.map((suit) => (
          <div 
            key={suit} 
            className={`${Styles.pile} ${Styles.foundationPlaceholder} ${Styles[suit]}`}
            onClick={() => {
              if (gameState.selectedCard && 
                  gameState.selectedCard.rank === 'A' && 
                  gameState.selectedCard.suit === suit.slice(0, -1)) {
                attemptMove(gameState.selectedCard, suit, null);
              }
            }}
          >
            {table[suit].length === 0 ? (
              <div className={Styles.foundationEmpty}>
                <span className={Styles.foundationSuit}>{getSuitSymbol(suit.slice(0, -1))}</span>
              </div>
            ) : (
              renderCard(table[suit][table[suit].length - 1], table[suit].length - 1, suit, null)
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderCard = (card, index, pileType, pileIndex) => {
    const isSelected = gameState.selectedCard === card;
    const isInSelectedSequence = gameState.selectedCards.some(c => c.rank === card.rank && c.suit === card.suit);
    const isFaceUp = card.faceUp || pileType !== 'tab';
    const zIndex = index;
    
    const cardStyle = pileType === 'tab' ? {
      zIndex,
      top: `${index * 28}px`,
      transform: isSelected ? 'translateY(-12px)' : isInSelectedSequence ? 'translateY(-8px)' : 'none'
    } : {};

    return (
      <div 
        key={`${card.rank}-${card.suit}-${index}`}
        className={`${Styles.card} ${isFaceUp ? Styles.up : ''} ${
          isSelected ? Styles.selected : isInSelectedSequence ? Styles.selectedSequence : ''
        }`}
        style={cardStyle}
        onClick={(e) => handleCardClick(card, pileType, pileIndex, e)}
        onDoubleClick={(e) => handleCardClick(card, pileType, pileIndex, e)}
      >
        {isFaceUp ? (
          <div className={`${Styles.cardFace} ${Styles[card.suit]}`}>
            <div className={Styles.cornerTop}>
              <span className={Styles.rank}>{card.rank}</span>
              <span className={Styles.suit}>{getSuitSymbol(card.suit)}</span>
            </div>
            <div className={Styles.cornerBottom}>
              <span className={Styles.rank}>{card.rank}</span>
              <span className={Styles.suit}>{getSuitSymbol(card.suit)}</span>
            </div>
          </div>
        ) : (
          <div className={Styles.cardBack}></div>
        )}
      </div>
    );
  };

  const renderEmptyTableau = (pileIndex) => {
    return (
      <div 
        className={`${Styles.pile} ${Styles.tab} ${Styles.emptyTableau}`}
        style={{
          width: '110px',
          height: '154px'
        }}
        onClick={() => {
          if (gameState.selectedCard?.rank === 'K') {
            attemptMove(gameState.selectedCard, 'tab', pileIndex);
          }
        }}
      ></div>
    );
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.infoJogo}>
        <div className={Styles.infoLinha}>
          <span className={Styles.infoRotu}>Timer:</span>
          <span className={Styles.infoValor}>{formatTime(gameState.time)}</span>
          <span className={Styles.infoRotu}>Moves:</span>
          <span className={Styles.infoValor}>{gameState.moves}</span>
          <span className={Styles.infoRotu}>Score:</span>
          <span className={Styles.infoValor}>{gameState.score}</span>
        </div>
        <button className={Styles.botaonjogo} onClick={initializeGame}>
          New Game
        </button>
      </div>

      <div className={Styles.mesajogo}>
        <div className={Styles.linhacima}>
          <div className={`${Styles.pile} ${Styles.stock}`}>
            {table.stock.length > 0 ? (
              renderCard(table.stock[table.stock.length - 1], table.stock.length - 1, 'stock', null)
            ) : (
              <div className={Styles.reloadIcon} onClick={reloadStock}>
                <span>↻</span>
              </div>
            )}
          </div>

          <div className={`${Styles.pile} ${Styles.waste}`}>
            {table.waste.length > 0 && 
              renderCard(table.waste[table.waste.length - 1], table.waste.length - 1, 'waste', null)}
          </div>

          {renderFoundationPlaceholders()}
        </div>

        <div className={Styles.linhabaixo}>
          {table.tab.map((pile, index) => (
            pile.length === 0 ? 
              renderEmptyTableau(index) : 
              (
                <div key={`tab-${index}`} className={`${Styles.pile} ${Styles.tab}`}>
                  {pile.map((card, cardIndex) => 
                    renderCard(card, cardIndex, 'tab', index)
                  )}
                </div>
              )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paciencia;