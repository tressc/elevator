class Floor {
  constructor(level) {
    this.level = level;

    // these contain people waiting for elevators
    this.upQueue = [];
    this.downQueue = [];

    // bools represent if button is "on"
    this.buttons = {
      up: false,
      down: false
    };
  }

  pressButton(button) {
    // when a person requests a car going UP or DOWN
    this.buttons[button] = true;
  }

  resolveButton(button) {
    // when a car stops, responding to an UP or DOWN request
    this.buttons[button] = false;
  }

  updateButtons() {
    if (this.upQueue[0] && this.buttons.up === false) {
      // if the button is off and there are still people queued for UP
      this.upQueue[0].requestFloor(this);
    }

    if (this.downQueue[0] && this.buttons.down === false) {
      // if the button is off and there are still people queued for DOWN
      this.downQueue[0].requestFloor(this);
    }
  }

  enQueue(queue, person) {
    // returns the person who enQueued
    return this[queue].push(person);
  }

  deQueue(queue) {
    // returns the person who deQueued
    return this[queue].shift();
  }
}
