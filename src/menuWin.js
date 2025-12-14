export default class MenuWin extends Phaser.Scene{
    constructor(){
        super({key: 'menuWin'})
    }

    create(){
        this.tittle = this.add.text(180,60,"YOU WON", {fontSize: '80px', fontFamily: 'bitdragon',fill: '#cdbb19ff'}).setOrigin(0,0);

        const playButton = this.add.text(200, 220, 'PLAY', { fontSize: '25px', fill: 'rgb(255, 255, 255)', fontFamily: 'bitdragon'})
        .setInteractive().setOrigin(0,0);

        playButton.on('pointerover', () => {
            playButton.setStyle({ fill: 'rgb(255, 255, 143)' });
        });

        playButton.on('pointerout', () => {
            playButton.setStyle({ fill: 'rgb(255, 255, 255)' });
        });

        playButton.on('pointerdown', () => {
            this.scene.stop();
            this.scene.stop('menuInicio'); 
            this.scene.start('menuInicio');
         });
    }
}