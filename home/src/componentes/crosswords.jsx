import React, { useState, useEffect, useRef } from 'react';
import Styles from '../css/crosswords.module.css';

const Crosswords = ({ onClose }) => {
  const [state, setState] = useState({
    index: null,
    clue: null,
    dir: null,
    length: null,
    cursor: 0,
    answers: {},
    count: 16
  });

  const gridRef = useRef(null);
  
  // Dicas horizontais (ACROSS)
  const cluesAcross = [
    { number: 1, clue: "Capital da França", answer: "PARIS", length: 5, startRow: 0, startCol: 0 },
    { number: 3, clue: "Maior país do mundo", answer: "RUSSIA", length: 6, startRow: 0, startCol: 6 },
    { number: 5, clue: "Animal símbolo da Austrália", answer: "CANGURU", length: 7, startRow: 2, startCol: 0 },
    { number: 7, clue: "Mulher", answer: "MOCA", length: 4, startRow: 2, startCol: 8 },
    { number: 9, clue: "Linguagem de estilo de programação web", answer: "CSS", length: 3, startRow: 4, startCol: 0 },
    { number: 11, clue: "Cor do céu em dia claro", answer: "AZUL", length: 4, startRow: 4, startCol: 4 },
    { number: 13, clue: "Orgão", answer: "RIM", length: 3, startRow: 6, startCol: 9 }, 
    { number: 15, clue: "Instrumento de cordas brasileiro", answer: "CAVAQUINHO", length: 10, startRow: 7, startCol: 0 },
    { number: 17, clue: "Animal", answer: "CAO", length: 3, startRow: 8, startCol: 9 },
    { number: 19, clue: "Fruta rica em potássio", answer: "BANANA", length: 6, startRow: 9, startCol: 0 }
  ];

  // Dicas verticais (DOWN)
  const cluesDown = [
    { number: 1, clue: "Doçe de amendoim", answer: "PACOCA", length: 6, startRow: 0, startCol: 0 },
    { number: 2, clue: "Sobrenome", answer: "SOUZA", length: 5, startRow: 0, startCol: 4 },
    { number: 4, clue: "Subtração", answer: "SOMA", length: 4, startRow: 0, startCol: 8 },
    { number: 6, clue: "Atração para peixes", answer: "ISCA", length: 4, startRow: 0, startCol: 10 },
    { number: 8, clue: "Administração Nacional da Aeronáutica e Espaço americana", answer: "NASA", length: 4, startRow: 2, startCol: 2 },
    { number: 10, clue: "Veiculo", answer: "VAN", length: 3, startRow: 7, startCol: 2 },
    { number: 12, clue: "Inseto", answer: "PUGA", length: 4, startRow: 6, startCol: 5 },
    { number: 14, clue: "Civilização antiga", answer: "INCA", length: 4, startRow: 6, startCol: 7 },
    { number: 16, clue: "Ferramenta", answer: "BROCA", length: 5, startRow: 5, startCol: 9 },
  ];

  
  const gridStructure = [
    [1,1,1,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,1,1,1,1],
    [1,0,1,0,1,0,0,0,1,0,1,0],
    [1,1,1,0,1,1,1,1,0,0,0,0],
    [1,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,1,0,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,0,0,1,0,1,0,1,1,1],
    [1,1,1,1,1,1,0,1,0,1,0,0]
  ];

  // Números das dicas atualizados
  const clueNumbers = [
    [1,0,0,0,2,0,3,0,4,0,6,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [5,0,8,0,0,0,0,0,7,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [9,0,0,0,11,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,16,0],
    [0,0,0,0,0,0,12,0,14,13,0,0],
    [15,0,10,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,17,0,0],
    [19,0,0,0,0,0,0,0,0,0,0,0]
  ];

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.focus();
      gridRef.current.setAttribute('tabindex', '0');
    }
  }, []);

  const handleClueClick = (clueNumber, direction) => {
    let clue;
    if (direction === 'across') {
      clue = cluesAcross.find(c => c.number === clueNumber);
    } else {
      clue = cluesDown.find(c => c.number === clueNumber);
    }
    
    if (!clue) return;

    const position = clue.startRow * 10 + clue.startCol;
    const newAnswers = { ...state.answers };
    if (!newAnswers[`${clueNumber}-${direction}`]) {
      newAnswers[`${clueNumber}-${direction}`] = '';
    }

    setState({
      ...state,
      clue: clueNumber,
      dir: direction,
      length: clue.length,
      index: position,
      answers: newAnswers,
      cursor: 0
    });

    if (gridRef.current) {
      gridRef.current.focus();
    }
  };

  const handleCellClick = (index) => {
    const row = Math.floor(index / 12);
    const col = index % 12;
    const clueNum = clueNumbers[row][col];
    
    if (clueNum > 0) {
      // Verifica se é início de uma palavra horizontal
      const acrossClue = cluesAcross.find(c => 
        c.number === clueNum && 
        c.startRow === row && 
        c.startCol === col
      );
      
      if (acrossClue) {
        handleClueClick(clueNum, 'across');
        return;
      }

      // Verifica se é início de uma palavra vertical
      const downClue = cluesDown.find(c => 
        c.number === clueNum && 
        c.startRow === row && 
        c.startCol === col
      );
      
      if (downClue) {
        handleClueClick(clueNum, 'down');
        return;
      }
    }
  };

  const handleKeyDown = (e) => {
    if (!gridRef.current.contains(document.activeElement)) {
      gridRef.current.focus();
    }
    
    if (!state.clue) return;

    e.preventDefault();
    const key = e.key;
    const newAnswers = { ...state.answers };
    let currentAnswer = newAnswers[`${state.clue}-${state.dir}`] || '';
    let newCursor = state.cursor;

    switch (key) {
      case 'Tab':
        const allClues = [...cluesAcross.map(c => ({ ...c, dir: 'across' })), ...cluesDown.map(c => ({ ...c, dir: 'down' }))];
        const currentIndex = allClues.findIndex(c => c.number === state.clue && c.dir === state.dir);
        const nextIndex = e.shiftKey ? (currentIndex - 1 + allClues.length) % allClues.length : (currentIndex + 1) % allClues.length;
        const nextClue = allClues[nextIndex];
        handleClueClick(nextClue.number, nextClue.dir);
        return;

      case 'Backspace':
        if (currentAnswer.length > 0) {
          newAnswers[`${state.clue}-${state.dir}`] = currentAnswer.slice(0, -1);
          newCursor = Math.max(0, state.cursor - 1);
        }
        break;

      case 'ArrowLeft':
        newCursor = Math.max(0, state.cursor - 1);
        break;

      case 'ArrowRight':
        newCursor = Math.min(state.length - 1, state.cursor + 1);
        break;

      case 'ArrowUp':
        if (state.dir === 'across') {
          const row = Math.floor(state.index / 12);
          const col = (state.index % 12) + state.cursor;
          for (let r = row - 1; r >= 0; r--) {
            if (gridStructure[r][col] === 1 && clueNumbers[r][col] > 0) {
              const downClue = cluesDown.find(c => 
                c.startRow === r && 
                c.startCol === col
              );
              if (downClue) {
                handleClueClick(downClue.number, 'down');
                return;
              }
            }
          }
        }
        break;

      case 'ArrowDown':
        if (state.dir === 'across') {
          const row = Math.floor(state.index / 12);
          const col = (state.index % 12) + state.cursor;
          for (let r = row + 1; r < 12; r++) {
            if (gridStructure[r][col] === 1 && clueNumbers[r][col] > 0) {
              const downClue = cluesDown.find(c => 
                c.startRow === r && 
                c.startCol === col
              );
              if (downClue) {
                handleClueClick(downClue.number, 'down');
                return;
              }
            }
          }
        }
        break;

      default:
        if (key.length === 1 && key.match(/[a-z]/i)) {
          if (currentAnswer.length <= state.cursor) {
            newAnswers[`${state.clue}-${state.dir}`] = currentAnswer.padEnd(state.cursor + 1, ' ').slice(0, state.cursor) + key.toUpperCase() + currentAnswer.slice(state.cursor + 1);
          } else {
            newAnswers[`${state.clue}-${state.dir}`] = currentAnswer.slice(0, state.cursor) + key.toUpperCase() + currentAnswer.slice(state.cursor + 1);
          }
          newCursor = Math.min(state.length - 1, state.cursor + 1);
        }
        break;
    }

    setState({
      ...state,
      answers: newAnswers,
      cursor: newCursor
    });
  };

  const getCellContent = (row, col) => {
    for (const [key, answer] of Object.entries(state.answers)) {
      const [clueNum, dir] = key.split('-');
      let clue;
      
      if (dir === 'across') {
        clue = cluesAcross.find(c => c.number === parseInt(clueNum));
        if (clue && row === clue.startRow && col >= clue.startCol && col < clue.startCol + clue.length) {
          return answer[col - clue.startCol] || '';
        }
      } else if (dir === 'down') {
        clue = cluesDown.find(c => c.number === parseInt(clueNum));
        if (clue && col === clue.startCol && row >= clue.startRow && row < clue.startRow + clue.length) {
          return answer[row - clue.startRow] || '';
        }
      }
    }
    return '';
  };

  const renderGrid = () => {
    return gridStructure.map((row, rowIndex) => (
      <React.Fragment key={`row-${rowIndex}`}>
        {row.map((cell, colIndex) => {
          const index = rowIndex * 12 + colIndex;
          const isActive = state.clue && (
            (state.dir === 'across' && 
             Math.floor(state.index / 12) === rowIndex && 
             colIndex >= (state.index % 12) && 
             colIndex < (state.index % 12) + state.length) ||
            (state.dir === 'down' && 
             (colIndex === state.index % 12) && 
             rowIndex >= Math.floor(state.index / 12) && 
             rowIndex < Math.floor(state.index / 12) + state.length)
          );
          
          const isCursor = isActive && (
            (state.dir === 'across' && colIndex === (state.index % 12) + state.cursor) ||
            (state.dir === 'down' && rowIndex === Math.floor(state.index / 12) + state.cursor)
          );

          const clueNum = clueNumbers[rowIndex][colIndex];
          const showNumber = clueNum > 0 && cell === 1 && (
            (rowIndex === 0 || gridStructure[rowIndex-1][colIndex] === 0 || 
             (colIndex > 0 && gridStructure[rowIndex][colIndex-1] === 0))
          );

          if (cell === 0) {
            return <div key={`cell-${rowIndex}-${colIndex}`} className={Styles.blackCell}></div>;
          } else {
            return (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`${Styles.cell} ${isActive ? Styles.active : ''} ${isCursor ? Styles.cursor : ''}`}
                onClick={() => handleCellClick(index)}
                data-show-number={showNumber}
              >
                {showNumber && <div className={Styles.cellNumber}>{clueNum}</div>}
                <div className={Styles.cellContent}>
                  {getCellContent(rowIndex, colIndex)}
                </div>
              </div>
            );
          }
        })}
      </React.Fragment>
    ));
  };

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        
        <div className={Styles.crosswordContainer}>
          <div className={Styles.areajogo}>
            <div 
              className={Styles.gridContainer} 
              ref={gridRef}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              {renderGrid()}
            </div>
          </div>
          
          <div className={Styles.paineldica}>
            <div className={Styles.colunadica}>
              <h2>Horizontal</h2>
              <ul className={Styles.listadica}>
                {cluesAcross.map(clue => (
                  <li
                    key={`across-${clue.number}`}
                    className={state.dica === clue.number && state.dir === 'across' ? Styles.current : ''}
                    onClick={() => handleClueClick(clue.number, 'across')}
                  >
                    <strong>{clue.number}.</strong> {clue.clue} ({clue.length})
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={Styles.colunadica}>
              <h2>Vertical</h2>
              <ul className={Styles.listadica}>
                {cluesDown.map(clue => (
                  <li
                    key={`down-${clue.number}`}
                    className={state.clue === clue.number && state.dir === 'down' ? Styles.current : ''}
                    onClick={() => handleClueClick(clue.number, 'down')}
                  >
                    <strong>{clue.number}.</strong> {clue.clue} ({clue.length})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crosswords;