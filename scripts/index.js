document.addEventListener('keydown', (e) => {
    const key = e.code;
    switch (key) {
        case 'ArrowLeft':
        myGameArea.player.speedX -= 1;
        break;
        case 'ArrowRight':
        myGameArea.player.speedX += 1;
        break;
    }
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
    <div class="game-board" id="game-board1">
    <canvas id="canvas-stage" width="1300" height="570"></canvas>
    </div>
</body>`
    startGame()
}
