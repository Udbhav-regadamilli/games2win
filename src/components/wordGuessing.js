import React, { useState, useEffect } from 'react';
import './wordGuessing.css'; // Make sure to import your CSS file

const WordGuessing = () => {
  const [word, setWord] = useState('');
  const [maxGuesses, setMaxGuesses] = useState(6); // Set an initial value for maxGuesses
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [hint, setHint] = useState('');

  // Define your wordList
  const wordList = [
    { word: "python", hint: "programming language"},
    {word:"banana",hint:"fruit"},
    {word:"Gold",hint:"precious metal" },
    {word: "flute",hint: "a musical instrument"},
    {word: "html",hint: "markup language for the web"},
    { word: "jpeg",hint: "a image file format"},
    {word: "idea",hint: "a thought or suggestion"}
  
    // Add more words and hints as needed
  ];

  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    setWord(selectedWord.word.toLowerCase());
    setHint(selectedWord.hint);
    setCorrectLetters(Array(selectedWord.word.length).fill(''));
  };

  useEffect(() => {
    randomWord();
  }, []);

  useEffect(() => {
    if (correctLetters.length > 0 && correctLetters.join('') === word) {
        setTimeout(() => {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            randomWord();
        }, 10);
    } else if (maxGuesses < 1) {
        setTimeout(()=>{
            alert("Game over! You don't have remaining guesses");
            handleReset();
        })
    }
  }, [correctLetters, maxGuesses]);

  const initGame = (e) => {
    const key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(key) && !correctLetters.includes(key)) {
      if (word.includes(key)) {
        const updatedCorrectLetters = correctLetters.map((letter, index) =>
          word[index] === key ? key : letter
        );
        setCorrectLetters(updatedCorrectLetters);
      } else {
        setMaxGuesses((prevGuesses) => prevGuesses - 1);
        setIncorrectLetters((prevIncorrectLetters) => [...prevIncorrectLetters, key]);
      }
    }
    e.target.value = ''; // Reset the input value

    
  };

  const handleReset = () => {
    randomWord();
    setMaxGuesses(6); // Reset maxGuesses
    setIncorrectLetters([]);
  };

  return (
    <div className='container'>
      <div className="wrapper">
        <h1>Guess the Word</h1>
        <div className="content">
          <input type="text" className='typing-input' onChange={initGame} />
          <div className="inputs">
            {word.split('').map((letter, index) => (
              <input type="text" key={index} value={correctLetters[index] || ''} disabled />
            ))}
          </div>
          <div className="details">
            <p className="hint">Hint: {hint}</p>
            <p className="guess-left">Remaining guesses: <span>{maxGuesses}</span></p>
            <p className="wrong-letter">Wrong letters: <span>{incorrectLetters.join(', ')}</span></p>
          </div>
          <button className="reset-btn" onClick={handleReset}>Reset Game</button>
        </div>
      </div>
    </div>
  );
};

export default WordGuessing;