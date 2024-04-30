let font,points=[];

function preload() {
  font = loadFont("NotoSansJP-VariableFont_wght.ttf");


}


function setup() {
  createCanvas(400, 400);
  points= font.textToPoints('GM,50,200,300')
  print(points);

 
}
function draw() {
  background(220);
  text('Hi maddy',10,300);

}
