const triangle = {
    x : 600,
    y : 235,
    color: 'yellow',
    speedX:0,
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
const square = {
    x : 600,
    y : 235,
    width : 55,
    height : 55,
    color: 'black',
    speedX : 0,
    draw : function(){
        const canvas = document.getElementById('canvas-stage');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#010D9A';
        ctx.fillRect(this.x, this.y, 55, 55);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x, this.y, 55, 55);
     },
    newPosition : function(){
        this.x += this.speedX
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
    positionX:0,
    positionY:0,
    player: null,
    frames: 0,
    obstacules:[],
    changePlayer: function(form){
      this.player = form
    },
    start: function(){
        const canvas =document.getElementById('canvas-stage')
        const ctx = canvas.getContext('2d')       
        this.player.draw()
        //updateGame()
    },
    clear: function(){
        const canvas = document.getElementById("canvas-stage");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,1200,570)
    }
}
function startGame(){
    myGame.changePlayer(square)
    myGame.start() 
}
function updateGame(){
    myGame.clear();
    myGame.player.newPosition();
    myGame.player.draw();
}

