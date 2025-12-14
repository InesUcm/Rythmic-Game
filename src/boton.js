export default class Boton extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, zona){
        super(scene,x,y,texture)

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setOrigin(0,0);
        this.body.setCircle(25);
    }

    buttonPressed(){
        //this.body.setCircle(40);
    }
}