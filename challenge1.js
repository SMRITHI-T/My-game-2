class Challenge1{
    constructor(){
this.bedroom=loadImage("bedroom challenge1.jpg");
this.won=loadImage("win2.png");

this.lazyBoyImage=loadImage("challenge1 lazy boy.png");
var lazyBoy=createSprite(300,380,30,30);
lazyBoy.addImage(this.lazyBoyImage);
lazyBoy.scale=0.5;
clock1 = new Clock(1150,560,10,10)
clock2 = new Clock(270,170,10,10)
clock3 = new Clock(895,300,10,10)
clock4 = new Clock(1340,625,10,10)
clock5 = new Clock(360,330,10,10)
clock6 = new Clock(685,450,10,10)
clock7 = new Clock(450,65,10,10)
clock8 = new Clock(550,550,10,10)


    }
    display(){
        if(clock>0){
            background(this.bedroom);
            fill("black");
            textSize(20);
            text("clock="+clock,1000,100);
           drawSprites();
        }
       

       if(clock<=0){
          
background(this.won);
var button=createButton("next challenge");
button.position(1000,500);
button.mousePressed(()=>{
    button.hide();
    score=0;
    gameState=2
})
    }

       clock1.display();
       clock2.display();
       clock3.display();
       clock4.display();
       clock5.display();
       clock6.display();
       clock7.display();
       clock8.display();
       
       

    }

    
}


