class roof {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;

    this.ground = Bodies.rectangle(x, y, width, height, { isStatic: true });
    World.add(world, this.ground);
  }
  display() {
    rectMode(CENTER);
    fill(rgb(0, 204, 0));

    var pos = this.ground.position;

    rect(pos.x, pos.y, this.width, this.height);
  }
}
