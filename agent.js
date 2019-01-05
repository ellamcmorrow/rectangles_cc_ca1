
var Agent = function(noiseZRange) {
  this.vector = myp5.createVector(20, 20);
  this.vectorOld = this.vector.copy(); //Gets a copy of the vector, returns a p5.Vector object.
  this.stepSize = 1000;
  this.angle;
  this.noiseZ = myp5.random(noiseZRange);
}

Agent.prototype.update = function(strokeWidth, noiseZVelocity) {
  myp5.beginShape();
  this.vector.x += myp5.cos(this.angle) * this.stepSize; //rotate the prototype by the angle and the step size
  this.vector.y += myp5.sin(this.angle) * this.stepSize;
  //this.angle = (this.angle - myp5.floor(this.angle)) * noiseStrength;

//if the vector x is less than -10
// then its an old vector, increase the width of the new one by 10
  if (this.vector.x < -10)this.vector.x = this.vectorOld.x = myp5.width + 10;
  //if the vector x width has been increased by ten !
  // then its an old vector then decrease the old vectors width by 10
  if (this.vector.x > myp5.width + 10)this.vector.x = this.vectorOld.x = -10;
  //if the vector y is less than -10
  // then its an old vector, increase the height of the new one by 10
  if (this.vector.y < - 10) this.vector.y = this.vectorOld.y = myp5.height + 10;
  if (this.vector.y > myp5.height + 10) this.vector.y = this.vectorOld.y = -10;
  myp5.strokeWeight(strokeWidth * this.stepSize); //stroke width increases with the size of step
  myp5.vertex(this.vectorOld.x, this.vectorOld.y)
  myp5.vertex(this.vectorOld.x, this.vectorOld.y)

  //creating a primitive shape
  //myp5.vertex(this.vector.x+80, this.vector.y+240); //creating triangular points
  //myp5.vertex(this.vector.x+80, this.vector.y+240);
  //myp5.vertex(this.vector.x+160, this.vector.y+80);
  //myp5.vertex(this.vector.x+160, this.vector.y+80);
  myp5.rectMode(myp5.CORNER);
  myp5.rect(this.vector.x, this.vector.y,this.vector.x/2,this.vector.y/2);
  //myp5.rotate(myp5.PI / (myp5.mouseX )); //rotating by mouse coordinates

  //draw  a line from the old vector xy to the new vector xy
  //myp5.bezierVertex(this.vectorOld.x-200, this.vectorOld.y-200,this.vectorOld.x-200, this.vectorOld.y-200)
  //myp5.bezierVertex(this.vector.x+20, this.vector.y+20,this.vector.x, this.vector.y); //draw  a line from the old vector xy to the new vector xy
  myp5.endShape(myp5.CLOSE);

  this.vectorOld = this.vector.copy(); //Gets a copy of the vector, returns a p5.Vector object.

  this.noiseZ += noiseZVelocity; //increase the noise
}
//perlin noise creates a smooth organic effect rather than too random
Agent.prototype.update1 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
  this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * noiseStrength;
//creating smooth gradients using the noise function, the angles points are inputted in the noise function
  this.update(strokeWidth, noiseZVelocity); //update the width and velocity

}
//velocity is magnitude in a given direction
Agent.prototype.update2 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
  this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * (noiseStrength * 4);
  this.angle = (this.angle - myp5.floor(this.angle)) * noiseStrength;

  this.update(strokeWidth, noiseZVelocity);
}
