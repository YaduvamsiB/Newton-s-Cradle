class chain {
  constructor(body1, body2, _offsetX, offsetY) {
    this._offsetX = offsetX;
    this.offsetY = offsetY;

    var option = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.offsetX, y: this.offsetY },
      //length: 10,
      //stiffness: 0.05,
    };
    this.chain = Constraint.create(option);
    World.add(world, this.chain);
  }
  display() {
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;

    strokeWeight(5);
    stroke("brown");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}
