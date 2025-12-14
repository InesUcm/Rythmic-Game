import Boton from "./boton.js";
import Enemy from "./enemy.js"

export default class Level extends Phaser.Scene{
    constructor(){
        super({key:"level"})
    }

    init(){

    }

    preload(){
        this.load.image("jungle","./assets/jungle.png");
        this.load.image("zona", "./assets/area.png");
        this.load.audio("musica", "./assets/sounds/forestMusic.mp3");
        this.load.spritesheet("skeleton", "./assets/SK_Idle.png", {
            frameWidth: 128, 
            frameHeight: 128
        });
        this.load.spritesheet("energy", "./assets/energy.png", {
            frameWidth: 32, 
            frameHeight: 32
        });
        this.load.image("botonA", "./assets/A_button.png");
        this.load.image("botonS", "./assets/S_button.png");
        this.load.image("botonD", "./assets/D_button.png");
        this.load.image("botonF", "./assets/F_button.png");
        this.load.image("heart", "./assets/heart.png");
    }

    create(){
        this.sound.play("musica");
        this.add.image(0,0,"jungle").setOrigin(0,0);
        this.add.image(680,5, "heart").setOrigin(0,0);

        //Contador
        this.contador= this.add.text(630, 25, this.vidas, { fontSize: '35px', fill: 'rgba(230, 19, 19, 1)', fontFamily: 'bitdragon'}).setOrigin(0,0);

        //ZONAS
        this.zonaA= this.add.image(10,90,"zona").setOrigin(0,0);
        this.zonaB= this.add.image(10,200,"zona").setOrigin(0,0);
        this.zonaX= this.add.image(10,310,"zona").setOrigin(0,0);
        this.zonaY= this.add.image(10,420,"zona").setOrigin(0,0);
        this.zonaDaño= this.add.zone(600,0,10,512).setOrigin(0,0);
        this.physics.add.existing(this.zonaDaño);

        //Botones
        this.botonA=new Boton(this, 560, 105, "botonA", this.zonaA).setOrigin(0,0);
        this.botonB=new Boton(this, 560, 215, "botonS", this.zonaB).setOrigin(0,0);
        this.botonX=new Boton(this, 560, 325, "botonD", this.zonaX).setOrigin(0,0);
        this.botonY=new Boton(this, 560, 435, "botonF", this.zonaY).setOrigin(0,0);

        //Teclas
        this.aKey = this.input.keyboard.addKey("a");
        this.sKey = this.input.keyboard.addKey("s");
        this.dKey = this.input.keyboard.addKey("d");
        this.fKey = this.input.keyboard.addKey("f");

        this.aKey.on('down', ()=>{
                this.botonA.buttonPressed();
            })

        //Enemigos
        this.enemigoA= new Enemy(this, -10,30, "skeleton", this.zonaA).setOrigin(0,0);
        this.enemigoB= new Enemy(this, -10,140, "skeleton", this.zonaB).setOrigin(0,0);
        this.enemigoX= new Enemy(this, -10,250, "skeleton", this.zonaX).setOrigin(0,0);
        this.enemigoY= new Enemy(this, -10,360, "skeleton", this.zonaY).setOrigin(0,0);
        this.enemies=4;

        this.vidas=5;
    }

    perderVida(){
        this.vidas= this.vidas-1;
        if(this.vidas==0){
            this.scene.run('menuLost');
            this.scene.sleep('level');
        }
        console.log("vidas: "+this.vidas)
    }

    update(t,dt){
        this.contador.destroy();
        this.contador= this.add.text(630, 25, this.vidas, { fontSize: '35px', fill: 'rgba(230, 19, 19, 1)', fontFamily: 'bitdragon'}).setOrigin(0,0);
        if(this.enemies==0){
            this.scene.run('menuWin');
            this.scene.sleep('level');
        }
    }
}