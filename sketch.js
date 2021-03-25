const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world

  var option = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(400,380,800,20,option)
  World.add(world,ground)
  console.log(ground)

  var ball_option = {
    restitution : 2
  }
  ball = Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)
}

function draw() {
  background("green");  
  Engine.update(engine)

  fill("black")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}