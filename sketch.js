function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(174,39,234)");
 fill("Blue");
textSize(64);
textAlign(CENTER, CENTER);

let maximo = width;
let inimo = 0;
let palavra = "Amizade"
let quantidade = map(mouseX, 0, width, 1,palavra.length);
let parcial = palavra.substring(0, quantidade)
text(parcial, 200, 200);
}

