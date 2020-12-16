class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("polygon.png");
      this.Visiblity = 255;
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 5){
      super.display();
      }
      else{
        World.remove(world,this.body);
        this.Visiblity = this.Visiblity - 5;
        push();
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
     
      }
   
     

      }
  
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -5000){
            score = score + 1;
          }
       }
   

  
  
  
  };
  