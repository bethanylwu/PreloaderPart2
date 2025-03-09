let dia1 = 11;
let diaChange1 = 0.1;
let dia2 = 5;
let diaChange2 = 0.05;
let angle = 0;
let rotationChange = 0.5;

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

  drawCircles(x, y);
  updateDia1();

  drawCrosses(x, y);
  updateDia2andAngle();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawCircles(_x, _y) {
  noFill();
  stroke(0, 65, 110, 150);
  strokeWeight(5);

  circle(_x - offset, _y - offset, dia1);
  circle(_x + offset, _y + offset, dia1);
}

function updateDia1() {
  if (dia1 < 10 || dia1 > unit / 2) {
    diaChange1 *= -1;
  }
  dia1 -= diaChange1;
}

function drawCrosses(_x, _y) {
  drawCross(_x - offset, _y + offset, dia2);
  drawCross(_x + offset, _y - offset, dia2);
}

function drawCross(x, y, dia) {
  push();
  translate(x, y);
  stroke(255, 160, 115, 150);
  strokeWeight(5);
  rotate(angle);
  cross(0, 0, dia);
  pop();
}

function updateDia2andAngle() {
  if (dia2 < 1 || dia2 > offset) {
    diaChange2 *= -1;
    rotationChange *= -1;
  }
  dia2 += diaChange2;
  angle += rotationChange;
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
