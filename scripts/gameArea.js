let x = 600
let y = 500
const triangle = {
    name:'triangle',
    width: 50,
    height: 50,
    color: 'green',
    speedX:0,
    draw: function() {
     const canvasElement = document.getElementById('canvas-stage');
     const context = canvasElement.getContext("2d");
     context.beginPath();
     context.moveTo(x,y);
     context.lineTo(x,y + 50);
     context.lineTo(x + 50,y + 50);
     context.closePath();
     context.lineWidth = 10;
     context.strokeStyle = 'black';
     context.stroke();
     context.fillStyle = "purple";
     context.fill();
    },
    newPosition : function(){
     return x += this.speedX
    }
}
const square = {
    name: 'square',
    width : 55,
    height : 55,
    width: 55,
    height: 55,
    color: 'black',
    speedX : 0,
    draw : function(){
     const canvas = document.getElementById('canvas-stage');
     const ctx = canvas.getContext('2d');
     ctx.fillStyle = '#010D9A';
     ctx.fillRect(x, y, 55, 55);
     ctx.strokeStyle = 'black';
     ctx.strokeRect(x, y, 55, 55);
    },
     newPosition : function(){
     return x += this.speedX
    }  
}

const circle = {
    name:'circle',
    width: 50,
    height: 50,
    speedX:0,
    color:'green',
    radius: 70,
    draw: function(){
     const canvas = document.getElementById('canvas-stage');
     const ctx = canvas.getContext('2d');
     ctx.beginPath();
     ctx.arc(x,y,38, 0, 2 * Math.PI, false);
     ctx.fillStyle = 'green';
     ctx.fill();
     ctx.lineWidth = 5;
     ctx.strokeStyle = 'black';
     ctx.stroke();
    },
    newPosition : function(){
     return x += this.speedX
    }
}
const trapezoid ={
    name:'trapezoid',
    speedX: 0,
    width: 50,
    height: 20,
    draw : function (){
     const canvas = document.getElementById('canvas-stage');
     const ctx = canvas.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(x,y); 
     ctx.lineTo(x - 50, y ); 
     ctx.lineTo(x - 90, y + 50);
     ctx.lineTo(x + 50, y + 50);
     ctx.lineTo(x + 1, y);
     ctx.closePath();      
     ctx.fillStyle = "red";
     ctx.fill();
     ctx.lineWidth = 5;
     ctx.strokeStyle = 'black';
     ctx.stroke();

    },
    newPosition : function(){
     return x += this.speedX
    }
}
const myGame ={
    player: square,
    frames: 0,
    obstacule: [],
    score: 0 ,
    gameOver:false,
    changePlayer: function(){
     switch (this.player.name) {
        case 'square':
            this.player = triangle
            break;
        case 'triangle':
            this.player = trapezoid
            break;
        case 'trapezoid':
            this.player = circle
            break;
        case 'circle':
            this.player = square
            break;
        default:
            break;
        }
    },
    start: function(){
     this.changePlayer()      
     this.player.draw()
     updateGame()
    },
    clear: function(){
     const canvas = document.getElementById("canvas-stage");
     const ctx = canvas.getContext("2d");
     ctx.clearRect(0,0,1200,570)
    },
    checkForm: function(obstacle){
     return this.player.name === obstacle.type
    },
    checkPosition : function(obstacle){
     return x < obstacle.x+100 && x > obstacle.x-100
    },
    checkColision: function(obstacle){
     return y<= obstacle.y+100
    }
}
class Obstacles{
   constructor(x,type){
     this.x = x;
     this.y = 0;
     this.speedY = 0; 
     this.type = type;
    }
    drawWall(){
     const  canvas = document.getElementById('canvas-stage')
     const ctx = canvas.getContext('2d')
     ctx.fillStyle = 'blue'
     ctx.fillRect(0,this.y,1200,100);
    }
    drawCircle(){
     const  canvas = document.getElementById('canvas-stage')
     const ctx = canvas.getContext('2d')
     ctx.beginPath();
     ctx.arc(this.x + 50,this.y + 48, 40, 0, 2 * Math.PI, false);
     ctx.fillStyle = 'white';
     ctx.fill();
    }
    drawTriangle(){
     const  canvas = document.getElementById('canvas-stage')
     const ctx = canvas.getContext('2d')
     ctx.beginPath();
     ctx.moveTo(this.x + 10,this.y + 10);
     ctx.lineTo(this.x + 10,this.y + 80);
     ctx.lineTo(this.x + 80,this.y + 80);
     ctx.closePath();
     ctx.fillStyle = 'white';
     ctx.fill();
    }
    drawSquare(){
     const canvas = document.getElementById('canvas-stage');
     const ctx = canvas.getContext('2d');
     ctx.fillStyle = 'white';
     ctx.fillRect(this.x + 5 , this.y + 16, 65,65);
    }
    drawTrapezoid(){
     const canvas = document.getElementById('canvas-stage');
     const ctx = canvas.getContext('2d');
     ctx.beginPath();
     ctx.moveTo(this.x + 5,this.y + 15); 
     ctx.lineTo(this.x - 80 , this.y + 15); 
     ctx.lineTo(this.x - 120 , this.y + 70);
     ctx.lineTo(this.x + 50 , this.y + 70);
     ctx.lineTo(this.x + 1, this.y + 15);
     ctx.closePath();
     ctx.fillStyle = 'white';
     ctx.fill();
    }
    draw(){
     this.drawWall()
      switch (this.type) {
        case 'triangle':
            this.drawTriangle()
            break;
        case 'circle':
            this.drawCircle()
            break;
        case 'square':
            this.drawSquare()
            break; 
        case 'trapezoid':
            this.drawTrapezoid()
            break;        
        default:
            break;
        }
    }
    move (){
      return this.y += this.speedY
    }
}
function startGame(){
 myGame.start();
}
function updateGame(){
 myGame.clear();
 updateObstacle();
 myGame.player.newPosition();
 myGame.player.draw();
   for(let i = 0; i < myGame.obstacule.length; i++){
    const checkColision = myGame.checkColision(myGame.obstacule[i])
    if(checkColision){
      const checkForm = myGame.checkForm(myGame.obstacule[i])
      const checkPosition = myGame.checkPosition(myGame.obstacule[i])
       myGame.obstacule.splice(i,1)
       if(checkForm && checkPosition){
       myGame.score +=1
       }else{
       myGame.gameOver = true
       gameOver(myGame.score)
        }
    }
   }
   if(!myGame.gameOver){
    requestAnimationFrame(updateGame);
   }
}
const forms =['square','triangle','trapezoid','circle'] 
function createObstacle(){
 myGame.frames += 1;
 if(myGame.frames % 200 === 0 ){
 const randomForm = Math.floor(Math.random()*forms.length)
 const randomPos = 60 + Math.floor(Math.random()*1000)
 let obstacle = new Obstacles(randomPos,forms[randomForm]);
 myGame.obstacule.push(obstacle);
 }
}
 function updateObstacle(){
 requestAnimationFrame(createObstacle)
 myGame.obstacule.forEach((obstacle) =>{
  obstacle.speedY += 0.01
  obstacle.move()
  obstacle.draw()
})
}







