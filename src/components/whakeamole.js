import React, { useState, useEffect } from "react";
import "./whakeamole.css";
import moleImage from "../assests/mole.png";

const WhakeaMole = () => {
  const [score, setScore] = useState(0);
  const [holes, setHoles] = useState(
    Array.from({ length: 9 }, (_, index) => index + 1)
  );
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [isCursorClicked, setIsCursorClicked] = useState(false);

  const handleMoleClick = (holeIndex) => {
    setScore((prevScore) => prevScore + 10);
    setHoles((prevHoles) => {
      const updatedHoles = Array.from({ length: 9 }, (_, index) => index + 1);
      updatedHoles[holeIndex - 1] = null;
      return updatedHoles;
    });

    setTimeout(() => {
      setHoles((prevHoles) => {
        const updatedHoles = Array.from({ length: 9 }, (_, index) => index + 1);
        updatedHoles[holeIndex - 1] = holeIndex;
        return updatedHoles;
      });
    }, 2000); // Reappear in another hole after 3 seconds
  };

  useEffect(() => {
    const run = () => {
      const i = Math.floor(Math.random() * holes.length);
      const holeIndex = holes[i];

      const mole = (
        <img
          key={holeIndex}
          className="molew"
          src={moleImage}
          alt="molew"
          onClick={() => handleMoleClick(holeIndex)}
        />
      );

      setHoles((prevHoles) => {
        const updatedHoles = Array.from({ length: 9 }, (_, index) => index + 1);
        updatedHoles[i] = mole;
        return updatedHoles;
      });

      setTimeout(() => {
        setHoles((prevHoles) => {
          const updatedHoles = Array.from(
            { length: 9 },
            (_, index) => index + 1
          );
          updatedHoles[i] = holeIndex;
          return updatedHoles;
        });
        run();
      }, 2000); // Randomly appear in another hole after 3 seconds
    };

    run();
    // eslint-disable-next-line
  }, []); // No dependencies, run once when component mounts

  const handleCursorDown = () => {
    setIsCursorActive(true);
    setIsCursorClicked(true);
    // Remove rotate class after 0.1 seconds
    setTimeout(() => {
      setIsCursorClicked(false);
    }, 100);
  };

  const handleCursorUp = () => {
    setIsCursorActive(false);
  };

  const handleMouseMove = (e) => {
    const cursor = document.querySelector(".cursorw");
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  };

  return (
    <div
      className="Appw"
      onMouseMove={handleMouseMove}
      onMouseDown={handleCursorDown}
      onMouseUp={handleCursorUp}
    >
      <h1 className="scorew">
        SCORE: <span>{score}</span>
      </h1>
      <div className="boardw">
        {holes.map((item, index) => (
          <div key={index} className="holew">
            {item}
          </div>
        ))}
      </div>
      <div
        className={`cursorw ${isCursorActive ? "active" : ""} ${
          isCursorClicked ? "rotate" : ""
        }`}
      ></div>
    </div>
  );
};

export default WhakeaMole;
