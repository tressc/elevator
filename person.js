class Person {
  constructor(origin, dest) {
    // these are both floor numbers
    this.origin = origin;
    this.dest = dest;
    // this represents the desired direction of travel (UP or DOWN)
    this.direction = dest < origin ? 1 : -1;
  }

  requestRide(floor) {
    // press the UP or DOWN button
    floor.pressButton(this.direction);
  }

  requestFloor(car) {
    // press the specific floor button within the elevator
    car.pressButton(this.dest === 1 ? "up" : "down");
  }

  embark(car) {

  }

  disembark(floor) {

  }

}
