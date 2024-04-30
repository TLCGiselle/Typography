let font, points = [];

function preload() {
  font = loadFont("NotoSansJP-VariableFont_wght.ttf");


}


function setup() {
  createCanvas(800, 400);
  fill('red');
  textSize(10);
  textFont(font)
  points= font.textToPoints('GM',15,300,300)
  print(points);


}
function draw() {
  background(220);
  //text('Hi maddy',20,20);
  for (
    let i = 0; i < points.length; i++) {
    triangle(points[i].x, points[i].y,points[i].y, 6, 4)
  }
}


