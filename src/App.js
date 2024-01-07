import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./App.css";

import sudokuLogo from "./assests/sudokuLogo.gif";
import flappyBirdLogo from "./assests/flappyBirdLogo.gif";
import WordGuessingLogo from "./assests/wordGuessingLogo.png";
import tictactoeLogo from "./assests/tictactocLogo.gif";
import puzzleLogo from "./assests/puzzleLogo.gif";
import WhakeaMoleLogo from "./assests/WhackaMoleLogo.gif";

import Sudoku from "./components/sudoku";
import FlappyBird from "./components/flappyBird";
import WordGuessing from "./components/wordGuessing";
import TicTacToe from "./components/tictactoe";
import Puzzle from "./components/puzzle";
import Whakeamole from "./components/whakeamole";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sudoku" element={<Sudoku />} />
        <Route exact path="/flappyBird" element={<FlappyBird />} />
        <Route exact path="/wordGuessing" element={<WordGuessing />} />
        <Route exact path="/tictactoe" element={<TicTacToe />} />
        <Route exact path="/puzzle" element={<Puzzle />} />
        <Route exact path="/whack-a-mole" element={<Whakeamole />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  const names = [
    "Sudoku",
    "Flappy Bird",
    "Word Guessing",
    "Tic-Tac-Toe",
    "15-puzzle",
    "Whack-a-mole"
  ];
  const logos = [
    sudokuLogo,
    flappyBirdLogo,
    WordGuessingLogo,
    tictactoeLogo,
    puzzleLogo,
    WhakeaMoleLogo,
  ];
  const developers = ["Udbhav", "Udbhav", "Lavanya", "Harshith", "Akanksha", "Yaswanth"];
  const links = [
    "/sudoku",
    "/flappyBird",
    "/wordGuessing",
    "/tictactoe",
    "/puzzle",
    "/whack-a-mole"
  ];

  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="App">
      {/**
       * Header section
       */}

      <div className="header">
        <div className="title">Game2win</div>
        <div className="options">
          <a href="#details">About</a>
          <a href="#details">Game</a>
          <a href="#footer">Contact</a>
        </div>
      </div>

      {/**
       * Details section
       */}

      <div id="details" className="details">
        Welcome Buddy! <br /> Let's play a friendly game, Choose one.
        <br />
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchKey(event.target.value);
          }}
        />
      </div>

      {/**
       * games section
       */}

      <div style={{textAlign: "center"}}>
        <div className="gamesList">
          {names.map((name, index) =>
            name.toLowerCase().startsWith(searchKey.toLowerCase()) ? (
              <Link to={links[index]} key={index} target="_blank">
                <div className="gameCard">
                  <img src={logos[index]} alt="" width={100} height={100} />
                  {name}
                  <p>Developed by: {developers[index]}</p>
                </div>
              </Link>
            ) : (
              <div></div>
            )
          )}
        </div>
      </div>

      <div className="description">
        <div className="developers">
          <div className="developers-scroll">
            <div className="card">
              <img
                className="card-avatar"
                src="https://m.media-amazon.com/images/I/41ONa5HOwfL._AC_UF1000,1000_QL80_.jpg"
                alt="profile"
              />
              <div className="card-title"> Udbhav </div>
              <i
                className="fa-brands fa-linkedin fa-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lakshmi-udbhav-regadamilli/",
                    "_blank"
                  )
                }
              />
              <i
                className="fa-solid fa-envelope fa-xl"
                onClick={() =>
                  window.open("mailto:luckyudbhav@gmail.com", "_blank")
                }
              />
              <i
                className="fa-brands fa-instagram fa-xl"
                onClick={() =>
                  window.open(
                    "https://instagram.com/_urs_truly_lucky/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="card">
              <img
                className="card-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0K_yhqlhn2mp4OEtrdDMGl52c7ee-crvyw&usqp=CAU"
                alt="profile"
              />
              <div className="card-title"> Lavanya </div>
              <i
                className="fa-brands fa-linkedin fa-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lakshmi-udbhav-regadamilli/",
                    "_blank"
                  )
                }
              />
              <i
                className="fa-solid fa-envelope fa-xl"
                onClick={() =>
                  window.open("mailto:luckyudbhav@gmail.com", "_blank")
                }
              />
              <i
                className="fa-brands fa-instagram fa-xl"
                onClick={() =>
                  window.open(
                    "https://instagram.com/_urs_truly_lucky/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="card">
              <img
                className="card-avatar"
                src="https://m.media-amazon.com/images/I/41ONa5HOwfL._AC_UF1000,1000_QL80_.jpg"
                alt="profile"
              />
              <div className="card-title"> Harshith </div>
              <i
                className="fa-brands fa-linkedin fa-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lakshmi-udbhav-regadamilli/",
                    "_blank"
                  )
                }
              />
              <i
                className="fa-solid fa-envelope fa-xl"
                onClick={() =>
                  window.open("mailto:luckyudbhav@gmail.com", "_blank")
                }
              />
              <i
                className="fa-brands fa-instagram fa-xl"
                onClick={() =>
                  window.open(
                    "https://instagram.com/_urs_truly_lucky/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="card">
              <img
                className="card-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0K_yhqlhn2mp4OEtrdDMGl52c7ee-crvyw&usqp=CAU"
                alt="profile"
              />
              <div className="card-title"> Akanksha </div>
              <i
                className="fa-brands fa-linkedin fa-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lakshmi-udbhav-regadamilli/",
                    "_blank"
                  )
                }
              />
              <i
                className="fa-solid fa-envelope fa-xl"
                onClick={() =>
                  window.open("mailto:luckyudbhav@gmail.com", "_blank")
                }
              />
              <i
                className="fa-brands fa-instagram fa-xl"
                onClick={() =>
                  window.open(
                    "https://instagram.com/_urs_truly_lucky/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="card">
              <img
                className="card-avatar"
                src="https://m.media-amazon.com/images/I/41ONa5HOwfL._AC_UF1000,1000_QL80_.jpg"
                alt="profile"
              />
              <div className="card-title"> Udbhav </div>
              <i
                className="fa-brands fa-linkedin fa-xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lakshmi-udbhav-regadamilli/",
                    "_blank"
                  )
                }
              />
              <i
                className="fa-solid fa-envelope fa-xl"
                onClick={() =>
                  window.open("mailto:luckyudbhav@gmail.com", "_blank")
                }
              />
              <i
                className="fa-brands fa-instagram fa-xl"
                onClick={() =>
                  window.open(
                    "https://instagram.com/_urs_truly_lucky/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="description-about">
          Connect with our talented developers to enhance your experience! We
          welcome your valuable suggestions to make our website and games even
          better. Your feedback fuels our creativity, so let's build something
          amazing together!
          <br />
          <span>-Team B</span>
        </div>
      </div>

      {/**
       * Footer section
       */}

      <div className="footer" id="footer">
        <p>Team B | @Copyrights {new Date().getFullYear()} </p>
      </div>
    </div>
  );
};

export default App;
