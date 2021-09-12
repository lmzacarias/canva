# Configuration
```css
body {
  margin: 0;
}

.canva-css {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1000000;
}


#rojo{
animation:  bounce 1s infinite  ease-in alternate;

}

#rojito1{
  animation:  bounce 1s infinite  ease-in alternate;
  
  }

@keyframes bounce {
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateX(10px)
  }
}

```
```js
var myCanvas = document.createElement("canvas");
myCanvas.className += " canva-css";
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

window.onload = function () {
  myConfetti({
    particleCount: 100,
    spread: 160,
    
  });
};

```




