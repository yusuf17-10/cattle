const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1,log2,log3,log4,log5,log6,log7;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Cattle(220,350,20,500);
    log2 = new Cattle(135,350,20,500);
    log3 = new Cattle(40,350,20,500);
    log4 = new Cattle(300,350,20,500);
    log5 = new Cattle(80,100,680,20);
    log6 = new Cattle(370,260,20,300);
    log7 = new Cattle(200,55,70,70)
    ground= new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    ground.display();
}