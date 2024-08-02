// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import './Game.css';

// const Game = () => {
//   const [n1, setN1] = useState(0);
//   const [n2, setN2] = useState(0);
//   const [contadorPuntos, setContadorPuntos] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(40);
//   const [options, setOptions] = useState([]);
//   const [correctAnswer, setCorrectAnswer] = useState(null);
//   const [scores, setScores] = useState([]);
//   const [gameStarted, setGameStarted] = useState(false);

//   const showInputForm = () => {
//     Swal.fire({
//       title: 'Ingrese su nombre y apellido',
//       html: `
//         <input id="username" class="swal2-input" placeholder="Nombre">
//         <input id="lastname" class="swal2-input" placeholder="Apellido">
//       `,
//       focusConfirm: false,
//       preConfirm: () => {
//         const username = document.getElementById('username').value;
//         const lastname = document.getElementById('lastname').value;
//         if (!username || !lastname) {
//           Swal.showValidationMessage('Por favor, ingrese ambos campos');
//         } else {
//           return { username, lastname };
//         }
//       },
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const { username, lastname } = result.value;
//         setScores((prevScores) => [...prevScores, { name: username, lastname: lastname, score: 0 }]);
//         Swal.fire(`¡Bienvenido ${username} ${lastname}!`, '', 'success').then(() => {
//           setGameStarted(true);
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     showInputForm();
//     calcNumbers();
//   }, []);

//   useEffect(() => {
//     if (timeLeft > 0 && gameStarted) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft, gameStarted]);

//   const calcNumbers = () => {
//     const newN1 = Math.floor(Math.random() * 100) + 1;
//     const newN2 = Math.floor(Math.random() * 100) + 1;
//     setN1(newN1);
//     setN2(newN2);
//     generateOptions(newN1, newN2);
//   };

//   const generateOptions = (newN1, newN2) => {
//     const correctAns = newN1 * newN2;
//     setCorrectAnswer(correctAns);
//     const optionsArray = [correctAns];
//     for (let i = 1; i < 4; i++) {
//       optionsArray.push((Math.floor(Math.random() * 100) + 1) * newN1);
//     }
//     setOptions(shuffleArray(optionsArray));
//   };

//   const shuffleArray = (array) => {
//     return array.sort(() => Math.random() - 0.5);
//   };

//   const handleOptionClick = (option) => {
//     if (timeLeft > 0) {
//       if (option === correctAnswer) {
//         setContadorPuntos(contadorPuntos + 1);
//       } else {
//         setContadorPuntos(contadorPuntos - 0.5);
//       }
//       calcNumbers();
//     }
//   };

//   const startGame = () => {
//     setTimeLeft(40);
//     setGameStarted(true);
//   };

//   return (
//     <div className="game-container">
//       {!gameStarted && (
//         <button onClick={startGame} id="start-button">
//           START
//         </button>
//       )}
//       {gameStarted && (
//         <>
//           <div className="span-container">
//             <span id="cont1">{n1}</span> x <span id="cont2">{n2}</span>
//           </div>
//           <div id="container">
//             {options.map((option, index) => (
//               <button key={index} onClick={() => handleOptionClick(option)} id="buttonsAdd">
//                 {option}
//               </button>
//             ))}
//           </div>
//           <div>
//             Time: <span className="contadores" id="contador">{timeLeft}</span>
//           </div>
//           <div>
//             Points: <span className="contadores" id="contadorPuntos">{contadorPuntos}</span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Game;
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
        title: 'TU PUNTAJE',
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
          START
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
