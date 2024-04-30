let font, points = [];
let r=10;
let angle=0;
function preload() {
  font = loadFont("NotoSansJP-VariableFont_wght.ttf");


}


function setup() {
  createCanvas(800, 400);
  fill('red');
  frameRate(5)
  textSize(10);
  textFont(font)
  points = font.textToPoints('GM', 10, 300, 300,{simpleFactor:.5});
  print(points);
 



}
function draw() {
  background(220);
  //text('Hi maddy',20,20);
  for (
    let i = 0; i < points.length; i++) {
    ellipse(points[i].x,+ r* sin(angle+ i*25), points[i].y, 500, 10)
  }
  angle +=10;
}


