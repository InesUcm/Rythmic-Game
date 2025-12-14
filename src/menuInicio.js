export default class MenuInicio extends Phaser.Scene{
    constructor(){
        super({key: 'menuInicio'})
    }

    preload(){
        this.load.spritesheet("energy", "./assets/energy.png", {
            frameWidth: 32, 
            frameHeight: 32
        });
    }
    create(){
        this.tittle = this.add.text(210,60,"RYTHMIC \n  GAME", {fontSize: '80px', fontFamily: 'bitdragon',fill: '#cd1919ff'}).setOrigin(0,0);
       
        this.add.text(330,250, "Normal", {fontSize: 25, fontFamily: 'bitdragon',fill: '#ffffffff'}).setOrigin(0,0);
        this.add.text(330,300, "Hard", {fontSize: 25, fontFamily: 'bitdragon',fill: '#ffffffff'}).setOrigin(0,0);

        var selector = this.add.image(280, 250, "energy").setOrigin(0,0);

        let P1 = true;

        this.wKey = this.input.keyboard.addKey("w");
        this.sKey = this.input.keyboard.addKey("s");
        this.spaceKey = this.input.keyboard.addKey("space");

        this.wKey.on('up', ()=>{
            P1 =!P1;
            selector.y=P1 ? 250:300;
        })
        this.sKey.on('up', ()=>{
            P1 =!P1;
            selector.y=P1 ? 250:300;
        })

        this.spaceKey.on('up', ()=>{
            this.scene.start("level", {P1mode: P1})
        })
    }
}