class bob {
  constructor(x, y) {
    var options = {
      isStatic: false,
      density: 1,
      friction: 1.8,
      restitution: 0.5,
    };

    this.body = Bodies.circle(x, y, 60, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(225);
    ellipseMode(RADIUS);
    ellipse(0, 0, 60);
    pop();
  }
}