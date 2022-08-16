document.addEventListener('keydown',(e) =>{
   /*  const key = e.code;
    if(key === 'Space') {
        myGame.clear()     
        //myGame.changePlayer(triangle)
        console.log('oi')
        
     }*/
     
    })
document.addEventListener('keydown', (e) => {
    const key = e.code;
    switch (key) {
        case 'ArrowLeft':
        myGame.player.speedX -= 1;
        break;
        case 'ArrowRight':
        myGame.player.speedX += 1;
        break; 
    }
    startGame();
})
document.addEventListener('keyup', () => {
    myGame.player.speedX = 0;
})
window.onload = () => {
    document.getElementById('game-one').addEventListener('click',start) 
}
function start(){
    document.getElementById('background-level').remove();
    document.querySelector('html').innerHTML=`
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/style-stage.css">
    <title>Fit In The Wall - section one</title>
    <script src="./scripts/gameStage1.js" defer></script>
    <script src="./scripts/index.js" defer ></script>
</head>
<body>
    <div>
    <canvas id="canvas-stage" width="1200" height="570"></canvas>
    </div>
</body>`
startGame();
}
function clear (){
    myGame.clear()
}

