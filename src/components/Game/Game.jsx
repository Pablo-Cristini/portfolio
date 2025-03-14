import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './Game.css';

const Game = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [contadorPuntos, setContadorPuntos] = useState(0);
  const [timeLeft, setTimeLeft] = useState(40);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      calcNumbers();
    }
  }, [gameStarted]);

  useEffect(() => {
    if (timeLeft > 0 && gameStarted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      Swal.fire({
        title: 'PUNTAJE',
        text: `Tu puntaje final es: ${contadorPuntos}`,
        icon: 'success',
        confirmButtonText: 'Reiniciar'
      }).then(() => {
        setGameStarted(false);
        setContadorPuntos(0);
        setTimeLeft(30);
      });
    }
  }, [timeLeft, gameStarted]);

  const calcNumbers = () => {
    const newN1 = Math.floor(Math.random() * 100) + 1;
    const newN2 = Math.floor(Math.random() * 100) + 1;
    setN1(newN1);
    setN2(newN2);
    generateOptions(newN1, newN2);
  };

  const generateOptions = (newN1, newN2) => {
    const correctAns = newN1 * newN2;
    setCorrectAnswer(correctAns);
    const optionsArray = [correctAns];
    for (let i = 1; i < 4; i++) {
      optionsArray.push((Math.floor(Math.random() * 100) + 1) * newN1);
    }
    setOptions(shuffleArray(optionsArray));
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleOptionClick = (option) => {
    if (timeLeft > 0) {
      if (option === correctAnswer) {
        setContadorPuntos(contadorPuntos + 1);
      } else {
        setContadorPuntos(contadorPuntos - 0.5);
      }
      calcNumbers();
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="game-container">
      {!gameStarted && (
        <button onClick={startGame} id="start-button">
          EMPEZAR!
        </button>
      )}
      {gameStarted && (
        <>
          <div className="span-container">
            <span id="cont1">{n1}</span> x <span id="cont2">{n2}</span>
          </div>
          <div id="container">
            {options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)} id="buttonsAdd">
                {option}
              </button>
            ))}
          </div>
          <div>
            Time: <span className="contadores" id="contador">{timeLeft}</span>
          </div>
          <div>
            Points: <span className="contadores" id="contadorPuntos">{contadorPuntos}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
