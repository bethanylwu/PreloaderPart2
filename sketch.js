let dia1 = 11;
let diaChange1 = 0.1;
let dia2 = 5;
let diaChange2 = 0.05;
let angle = 0;
let rotationChange;
let a = 50;
let aChange = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  unit = min(width / 10, height / 10);
  offset = unit / 4;

  let x = width / 2;
  let y = height / 2;
  noFill();
  stroke(0, 65, 110, 150);
  strokeWeight(5);

  circle(x - offset, y - offset, dia1);
  circle(x + offset, y + offset, dia1);
  if (dia1 < 10 || dia1 > unit) {
    diaChange1 *= -1;
  }
  dia1 -= diaChange1;

  push();
  translate(x - offset, y + offset);
  stroke(255, 160, 115, a);
  strokeWeight(5);
  rotate(angle);
  cross(0, 0, dia2);
  pop();

  push();
  translate(x + offset, y - offset);
  stroke(255, 160, 115, a);
  strokeWeight(5);
  rotate(angle);
  cross(0, 0, dia2);
  pop();

  if (dia2 < 1 || dia2 > unit / 2) {
    diaChange2 *= -1;
    rotationChange *= -1;
    aChange *= -1;
  }
  dia2 += diaChange2;
  angle += rotationChange;
  a += aChange;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function cross(crossX, crossY, scale) {
  // right line
  line(crossX, crossY, crossX + scale, crossY);
  // left line
  line(crossX - scale, crossY, crossX, crossY);
  // top line
  line(crossX, crossY - scale, crossX, crossY);
  // bottom line
  line(crossX, crossY, crossX, crossY + scale);
}
