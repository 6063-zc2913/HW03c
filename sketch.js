
let eDiam = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("yellow");
  fill("black");
  randomSeed(11);
  pointsCount = 50;
  for (let idx = 0; idx < pointsCount / 2; idx += 1) {
    randomX1 = random() * width;
    randomY1 = random() * height;
    randomLength = random() * 40 + 10;
    ellipse(randomX1, randomY1, 
      randomLength, randomLength);

    randomX2 = random() * width;
    randomY2 = random() * height;
    randomLength = random() * 40 + 10;
    ellipse(randomX2, randomY2, 
      randomLength, randomLength);
    
    line(randomX1, randomY1, randomX2, randomY2)
  }

  }
