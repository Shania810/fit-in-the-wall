class Obstacles{
   constructor(x,y,width,height,color){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0; 
   }
   draw (){
    const canvas = document.getElementById('game-stage');
    const ctx = canvas.getContext('2d');
    const imageObstacle = new Image();
    imageObstacle.src=""
    ctx.drawImage()

   }


   clearCircle (){

   }
   clearSquare (){

   }
   clearTrapezoid(){

   }
}