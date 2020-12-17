const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {           
  createCanvas(480,800);
  
  ground = new Ground(300,300,480,30);
}

function draw() {
  background(0);
    Engine.update(engine);
 
    //to create divisions
    for(var k = 0; k <=width; k = k+ 80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    //to create plinkos
    

   ground.display();

   drawSprites();
}

