//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 6;
  var noiseScale = 100; // twists and turns
  var noiseStrength = 20; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 100;
  var noiseZVelocity = 100; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var mouseX;
  var mouseY;
  var strokeWidth = 2;
  var mouseX;
  var hueValues = [];
  var saturationValues = [];
  var brightnessValues = [];
  var key= key;

  p.setup = function() {
   p.background(0,0,0);
   p.createCanvas(2480, 3508
);
   p.colorMode(p.HSB, 360, 100, 100, 100);

    for(var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);

      hueValues[i] = p.random(360);
      saturationValues[i] = 100;
      brightnessValues[i] =100;
}
}
  p.draw = function() {
    p.background(0,0,10);
    p.beginShape()
    p.background(0,0,10);
//  p.noStroke();
//    p.rect(0, 0, p.width, p.height); //the overlay is a rectangle
    // Draw agents
    p.beginShape()
    for (var i = 0; i < agentCount; i++) {
    p.stroke(p.random(10));
    //Blends the pixels in the display window according to the defined mode.
    //There is a choice of the following modes to blend the source pixels (A) with the ones of pixels already in the display window (B):
    p.blendMode(p.LIGHTEST);
    p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
    }
    p.endShape();


    }

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);


}
};
var myp5 = new p5(sketch);
