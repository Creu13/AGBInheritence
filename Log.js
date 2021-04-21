class Log extends BaseClass {
  //"child" of BaseClass OR expands with that class 
      constructor (x, y, height, angle) {
        super(x, y, 20, height, width)
        this.image = loadImage("./sprites/wood2.png");
        Matter.Body.setAngle(this.body, angle);
      }

    };