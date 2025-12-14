//falta tamaño de sprites y en las animaciones indicar si la animación se repite.

    this.load.spritesheet("energy", "./assets/energy.png", {
            frameWidth: 32, 
            frameHeight: 32
        });
    this.load.spritesheet("player", "assets/CH_Idle.png", {
      
    });
    this.load.spritesheet("player_dead", "assets/CH_Dead.png", {
      
    });
    this.load.spritesheet("player_hurt", "assets/CH_Hurt.png", {
      
    });
    this.load.spritesheet("skeleton", "assets/SK_Idle.png", {
      
    });
    this.load.spritesheet("skeleton_atk", "assets/SK_Attack.png", {
      
    });
    this.load.spritesheet("skeleton_dead", "assets/SK_Dead.png", {
      
    });

    this.anims.create({
      key: "playerIdle",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 6 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "playerDead",
      frames: this.anims.generateFrameNumbers("player_dead", { start: 0, end: 3 }),
      frameRate: 10,
    });
    this.anims.create({
      key: "playerHurt",
      frames: this.anims.generateFrameNumbers("player_hurt", { start: 0, end: 2 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "skIdle",
      frames: this.anims.generateFrameNumbers("skeleton", { start: 0, end: 6 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "skAttack",
      frames: this.anims.generateFrameNumbers("skeleton_atk", { start: 0, end: 4 }),
      frameRate: 10,
    });
    this.anims.create({
      key: "skDead",
      frames: this.anims.generateFrameNumbers("skeleton_dead", { start: 0, end: 3 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "energyIdle",
      frames: this.anims.generateFrameNumbers("energy", { start: 1, end: 2 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "energyCreate",
      frames: this.anims.generateFrameNumbers("energy", { start: 0, end: 2 }),
      frameRate: 5,
    });
    this.anims.create({
      key: "energyEnd",
      frames: this.anims.generateFrameNumbers("energy", { start: 3, end: 3 }),
      frameRate: 5,
    });
