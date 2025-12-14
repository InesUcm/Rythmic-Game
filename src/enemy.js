import Ball from "./ball.js" 

export default class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, textura, zona){
        super(scene,x,y,textura)

        this.setOrigin(0,0);
        this.scene.add.existing(this);

        this.scene=scene;
        this.zona=zona;
        this.timer=0;
        this.setTimer();
        console.log("timer: "+ this.timer);

        this.lives=2;
        this.isAlive=true;
    }

    throwBall(){
        if(this.isAlive){
            if(this.zona===this.scene.zonaA || this.zona===this.scene.zonaX ){
                this.ball=new Ball(this.scene,this.x+100, this.y+100, "energy", this, this.zona);
                this.ball.throw();
                this.setTimer();
            }
            else{
                this.ball1=new Ball(this.scene,this.x+100, this.y+100, "energy", this, this.zona);
                this.ball1.throw();
                this.ball2=new Ball(this.scene,this.x+50, this.y+100, "energy", this, this.zona);
                this.ball2.throw();
                this.setTimer();
            }
        }
    }

    setTimer(){
        if(this.zona===this.scene.zonaA){
            this.timer=300
        }
        else if(this.zona===this.scene.zonaB){
            this.timer=400
        }
        else if(this.zona===this.scene.zonaX){
            this.timer=600
        }
        else{
            this.timer=700;
        }
    }

    looseLive(){
        this.lives=this.lives-1;
        console.log("lives: "+this.lives)
        if(this.lives==0){
            this.scene.enemies=this.scene.enemies-1;
            this.isAlive=false;
            this.destroy();
        }
    }
    preUpdate(t,dt){
        super.preUpdate(t,dt)
        if(this.timer>0){
            this.timer=this.timer-1;
        }
        if(this.timer==0){
            this.throwBall();
        }
    }

}