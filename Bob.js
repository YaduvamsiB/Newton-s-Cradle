class bob {
  constructor(x, y) {
    var options = {
      isStatic: false,
      density: 0.8,
      friction: 0,
      restitution: 1,
    };

    this.body = Bodies.circle(x, y, 50, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    fill(225);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0, 0, 50);
    pop();
  }
}
