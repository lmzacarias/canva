import React from "react";
import { Button } from "antd";

const FirstScreen = () => {
  const confetti = require("canvas-confetti");

  const myConfetti = () => {
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
