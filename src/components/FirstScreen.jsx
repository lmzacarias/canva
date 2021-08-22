import React, { useEffect, useState } from "react";
import { Button } from "antd";

const FirstScreen = ({setData}) => {
  const confetti = require("canvas-confetti");

  const myConfetti = () => {
    setData();
    console.log("log_1:");
     var myCanvas = document.createElement("canvas");
    myCanvas.className += " canva-css";
    document.body.appendChild(myCanvas);

    const myConfettiReady = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });

    myConfettiReady({
      particleCount: 100,
      spread: 160,
    });
   


    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      myConfettiReady({
        particleCount: 30,
        spread: 160,
      });
     
    }, 250);
  };


 

  return (
    <>
      <Button
        type="primary"
        className="main-first"
        onClick={() => {
          myConfetti();
        }}
      >
        Sorpresa 🎉
      </Button>
    </>
  );
};

export default FirstScreen;
