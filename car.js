class Car {
  constructor(floors, capacity) {
    this.buttons = {};

    for (let i = 0; i < floors.length; i++) {
      let floor = floors[i];
      this.buttons[floor] = false;
    }

    this.capacity = capacity;
    this.direction = "idle"; // other states are "up" and "down"
    this.riders = [];
  }

  updateDirection(direction) {
    this.direction = direction;
  }

  isFull() {
    return this.riders.length === this.capacity;
  }

  pressButton(button) {
    this.buttons[button] = true;
  }

  resolveButton(button) {
    this.buttons[button] = false;
  }
}
