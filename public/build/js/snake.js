const screen=document.querySelector(".screen-game"),startButton=document.querySelector(".startGame"),repeatGame=document.querySelector(".repeatGame"),alert=document.querySelector(".alert-game"),over=document.querySelector(".alert-game p");document.addEventListener("DOMContentLoaded",(function(){setGame(),drawSnake()}));const screenSize=10,gameSpeed=100,squareTypes={emptySquare:0,snakeSquare:1,food:2},directions={ArrowUp:-10,ArrowDown:10,ArrowRight:1,ArrowLeft:-1};let snake,score,direction,boardSquares,emptySquares,moveInterval,block=!1;const drawSnake=()=>{snake.forEach(e=>drawSquare(e,"snakeSquare"))},drawSquare=(e,r)=>{const[t,a]=e.split("");boardSquares[t][a]=squareTypes[r];document.getElementById(e).setAttribute("class","square "+r),"emptySquare"===r?emptySquares.push(e):-1!==emptySquares.indexOf(e)&&emptySquares.splice(emptySquares.indexOf(e),1)},moveSnake=()=>{if(!block){const e=String(Number(snake[snake.length-1])+directions[direction]).padStart(2,"0"),[r,t]=e.split("");if(e<0||e>100||"ArrowRight"===direction&&0==t||"ArrowLeft"===direction&&9==t||boardSquares[r][t]===squareTypes.snakeSquare)gameOver(),block=!0;else{if(snake.push(e),boardSquares[r][t]===squareTypes.food)addFood();else{const e=snake.shift();drawSquare(e,"emptySquare")}drawSnake()}}},addFood=()=>{createRandomFood()},gameOver=()=>{startButton.classList.add("show"),alert.classList.add("show"),over.textContent="game-over"},setDirection=e=>{direction=e},directionEvent=e=>{switch(e.code){case"ArrowUp":"ArrowDown"!=direction&&setDirection(e.code);break;case"ArrowDown":"ArrowUp"!=direction&&setDirection(e.code);break;case"ArrowLeft":"ArrowRight"!=direction&&setDirection(e.code);break;case"ArrowRight":"ArrowLeft"!=direction&&setDirection(e.code)}},createRandomFood=()=>{const e=emptySquares[Math.floor(Math.random()*emptySquares.length)];drawSquare(e,"food")},createBoard=()=>{boardSquares.forEach((e,r)=>{e.forEach((e,t)=>{const a=`${r}${t}`,o=document.createElement("DIV");o.setAttribute("class","square emptySquare"),o.setAttribute("id",a),screen.appendChild(o),emptySquares.push(a)})})},setGame=()=>{snake=["76","66","56","55","54","44","34"],score=snake.length,direction="ArrowUp",boardSquares=Array.from(Array(10),()=>new Array(10).fill(squareTypes.emptySquare)),screen.innerHTML="",emptySquares=[],boardSquares.forEach((e,r)=>{e.forEach((e,t)=>{const a=`${r}${t}`,o=document.createElement("DIV");o.setAttribute("class","square emptySquare"),o.setAttribute("id",a),screen.appendChild(o),emptySquares.push(a)})})},startGame=()=>{block=!1,setGame(),startButton.classList.remove("show"),repeatGame.classList.remove("show"),alert.classList.remove("show"),over.textContent="",drawSnake(),createRandomFood(),document.addEventListener("keydown",directionEvent),clearInterval(moveInterval),moveInterval=setInterval(()=>moveSnake(),100)};startButton.addEventListener("click",startGame);