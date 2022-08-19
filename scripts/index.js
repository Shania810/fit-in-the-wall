document.addEventListener('keydown',(e) =>{
    const key = e.code;
    if(key === 'Space') { 
        myGame.changePlayer()    
     }
     
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
})
document.addEventListener('keyup', () => {
    myGame.player.speedX = 0;
})
window.onload = () => {
    document.getElementById('start-game').addEventListener('click',start) 
}
function start(){
    document.getElementById('background').remove();
    document.querySelector('html').innerHTML=`
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles/style.css">
    <title>Fit In The Wall - game</title>
    <script src="./scripts/gameArea.js" defer></script>
    <script src="./scripts/index.js" defer ></script>
</head>
<body>
    <div>
    <canvas id="canvas-stage" width="1200" height="570"></canvas>
    </div>
</body>`
startGame();
}
