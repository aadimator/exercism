// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  
  resize(size) {
    size.width = size.width < 1 ? 1 : size.width;
    size.height = size.height < 1 ? 1 : size.height;

    if (size.width + this.position.x > this.screenSize.width) {
      size.width -= size.width + this.position.x - this.screenSize.width;
    }
    if (size.height + this.position.y > this.screenSize.height) {
      size.height -= size.height + this.position.y - this.screenSize.height;
    }

    this.size.resize(size.width, size.height);
  }

  move(position) {
    position.x = position.x < 0 ? 0 : position.x;
    position.y = position.y < 0 ? 0 : position.y;

    if (this.size.width + position.x > this.screenSize.width) {
      position.x -= this.size.width + position.x - this.screenSize.width;
    }
    if (this.size.height + position.y > this.screenSize.height) {
      position.y -= this.size.height + position.y - this.screenSize.height;
    }

    this.position.move(position.x, position.y)
  }
  
}

export function changeWindow(programWindow) {
  programWindow.size.resize(400, 300);
  programWindow.position.move(100, 150);
  return programWindow;
}




