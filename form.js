class Form{
    constructor(){
this.heading=createElement('h1');
this.story=createElement('h3');
this.button=createButton("START YOUR CHALLENGE");

    }
    display(){
        this.heading.html("");
        this.heading.position(550,50);
        this.story.html("");
        this.story.position(50,150);
        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.story.hide();
            this.button.hide();
        gameState=1;
        })
    }
}