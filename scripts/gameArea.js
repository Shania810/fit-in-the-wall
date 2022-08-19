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
        
        // the triangle
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(x,y + 50);
        context.lineTo(x + 50,y + 50);
        context.closePath();
        
        // the outline
        context.lineWidth = 10;
        context.strokeStyle = 'black';
        context.stroke();
        
        // the fill color
        context.fillStyle = "purple";
        context.fill();
    },
    newPosition : function(){
        x += this.speedX
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
        x += this.speedX
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
const centerX = x ;
const centerY = y;
const radius = 38;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
},
newPosition : function(){
    x += this.speedX
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
    player: null,
    frames: 0,
    obstacule: [],
    score: 0 ,
    changePlayer: function(){
        const forms = [square,triangle,trapezoid,circle]
        const number = Math.floor(Math.random() * forms.length)
        const randomForm = forms[number]
        myGame.player = randomForm
    },
    start: function(){
        this.changePlayer()      
        this.player.draw()
        updateGame()
        this.checkForm()
    },
    clear: function(){
        const canvas = document.getElementById("canvas-stage");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,1200,570)
    },
    stop: function(){
        cancelAnimationFrame(createObstacle)
    },
    checkForm: function(){
        const obstacles = this.obstacule
        obstacles.forEach((obstacle)=>{
        console.log(obstacle.x)
        console.log(obstacle.y)
          if(this.player.name === 'triangle' && (x === obstacle.x + 10 || x < obstacle.x + 15 && x > obstacle.x - 15)&&(y.obstacle === 500 && y === 500)){
            this.score += 1
            console.log('ok')
          }else{
            this.score += 0
            console.log('not')
          }
        })
        
        console.log(`score: ${this.score}`)
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
     ctx.fillStyle = 'black'
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
        if(this.type === 'triangle'){
          this.drawTriangle()
        }else if(this.type === 'circle'){
            this.drawCircle()
        }else if(this.type === 'square'){
            this.drawSquare()
        }
        else if(this.type === 'trapezoid'){
            this.drawTrapezoid()
        }
    }
    move (){
     this.y += this.speedY
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
    requestAnimationFrame(updateGame);
    console.log(`posição do player ${x}`)
    myGame.checkForm()
}
const forms = ['triangle','circle','square','trapezoid']
function createObstacle(){
    myGame.frames += 1;
    if(myGame.frames % 600 === 0 ){
    const randomForm = Math.floor(Math.random()*forms.length)
    const randomPos = 60 + Math.floor(Math.random()*1000)
    let obstacle = new Obstacles(randomPos,forms[randomForm]);
    myGame.obstacule.push(obstacle);
    }
}
 function updateObstacle(){
  requestAnimationFrame(createObstacle)
  myGame.obstacule.forEach((obstacle) =>{
  obstacle.speedY += 0.001
  obstacle.move()
  obstacle.draw()
   })
   
}







