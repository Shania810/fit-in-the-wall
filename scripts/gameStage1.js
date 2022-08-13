const triangle = {
    x : 0,
    y : 0,
    color: 'yellow',
    draw: function() {
        const canvasElement = document.getElementById('canvas-stage');
        const context = canvasElement.getContext("2d");
        
        // the triangle
        context.beginPath();
        context.moveTo(590, 500);
        context.lineTo(590, 550);
        context.lineTo(640, 550);
        context.closePath();
        
        // the outline
        context.lineWidth = 10;
        context.strokeStyle = 'black';
        context.stroke();
        
        // the fill color
        context.fillStyle = "#FFCC00";
        context.fill();
    }
}

const circle = {
x:0,
y: 0 ,
color:'green',
radius: 70,
draw: function(){
const canvas = document.getElementById('canvas-stage');
const ctx = canvas.getContext('2d');
const centerX = 800;
const centerY = 520;
const radius = 32;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
}
}
const square = {

 draw : function(){
    const canvas = document.getElementById('canvas-stage');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#010D9A';
    ctx.fillRect(900, 490, 55, 55);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(900, 490, 55, 55);
 }
    
}
const heart = {
    
}
const parallelogram ={
    
}
const star = {
    
}
const trapezoid ={
    draw : function (){
            const canvas = document.getElementById('canvas-stage');
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(490,500);
            ctx.lineTo(440,500);
            ctx.lineTo(400,550);
            ctx.lineTo(540,550);
            ctx.lineTo(500,500);
            ctx.closePath();
            
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'black';
            ctx.stroke();

        }
}

const myGame ={
    positionX:50,
    positionY:40,
    player1: triangle,
    player2: circle,
    player3: square,
    player4: trapezoid,
    frames: 0,
    obstacules:[],
    start: function(){
        /*const canvas =document.getElementById('canvas-stage')
        const ctx = canvas.getContext('2d')
        const imageAreaGame = new Image()
        imageAreaGame.src = 'https://wallpaperaccess.com/full/1079103.jpg'
        ctx.drawImage(imageAreaGame,this.positionX,this.positionY,canvas.width,canvas.height)*/
        this.player1.draw()
        this.player2.draw()
        this.player3.draw()
        this.player4.draw()
    },
    clear: function(){
        clearRect(this.x,this.y,this.width,this.height)
    }
}
function startGame(){
    myGame.start()
}

