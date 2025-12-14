export default class Ball extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, enemy, zona){
        super(scene,x,y,texture)

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCircle(5);
        this.body.setOffset(10,10);

        this.scene=scene;
        this.zona=zona;
        this.enemy=enemy;

        this.speed=100;
        this.hasOverlaped = false;
        this.hasLost=false;
        this.lostLive=false;

        this.overlapA=false;
        this.overlapB=false;
        this.overlapX=false;
        this.overlapY=false;
        
        this.scene.physics.add.overlap(this, this.scene.botonA,() => this.onOverlap(), null, this);
        this.scene.physics.add.overlap(this, this.scene.botonB,() => this.onOverlap(), null, this);
        this.scene.physics.add.overlap(this, this.scene.botonX,() => this.onOverlap(), null, this);
        this.scene.physics.add.overlap(this, this.scene.botonY,() => this.onOverlap(), null, this);
        
        this.scene.physics.add.overlap(this, this.scene.zonaDaño,() => this.onZonaDaño(), null, this);

    }

    onOverlap(){
        if(this.zona===this.scene.zonaA){
            this.hasOverlaped = true;
            this.scene.aKey.on('down', ()=>{
                if(!this.lostLive){
                    this.enemy.looseLive();
                    this.lostLive=true
                }
                this.destroy();
            })
        }
        else if(this.zona===this.scene.zonaB){
            this.hasOverlaped = true;
            this.scene.sKey.on('down', ()=>{
                if(!this.lostLive){
                    this.enemy.looseLive();
                    this.lostLive=true
                }
                this.destroy();
            })
        }
        else if(this.zona===this.scene.zonaX){
            this.hasOverlaped = true;
            this.scene.dKey.on('down', ()=>{
                if(!this.lostLive){
                    this.enemy.looseLive();
                    this.lostLive=true
                }
                this.destroy();
            })
        }
        else if(this.zona===this.scene.zonaY ){
            this.hasOverlaped = true;
            this.scene.fKey.on('down', ()=>{
                if(!this.lostLive){
                    this.enemy.looseLive();
                    this.lostLive=true
                }
                this.destroy();
            })
        }
    }

    onZonaDaño(){
        if(!this.hasLost){
            this.setTint(0xff0000);
            this.hasLost=true;
            this.scene.perderVida();
        }
    }

    throw(){
        this.body.setVelocityX(this.speed)
    }

    preUpdate(t,dt){
    }
    
}