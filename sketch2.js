var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});

var topWall = Bodies.rectangle(400, 0, 810, 30, { isStatic: true });
var leftWall = Bodies.rectangle(0, 200, 30, 420, { isStatic: true });
var rightWall = Bodies.rectangle(800, 200, 30, 420, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 400, 810, 30, { isStatic: true });

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall]);
Engine.run(engine);
Render.run(render);

var addCircle = function () {
 var ball = Bodies.circle(Math.random()*400 + 30, 30, 30);
  ball.restitution = 1;
  ball.frictionAir = 0.001;
  return ball;
};

document.querySelector('.drop-ball').addEventListener('click', function () {
    World.add(engine.world, addCircle());
});

document.querySelector('.slow-mo').addEventListener('click', function () {
    engine.timing.timeScale = 0.5;
});

document.querySelector('.norm-mo').addEventListener('click', function () {
    engine.timing.timeScale = 1;
});

document.querySelector('.fast-mo').addEventListener('click', function () {
    engine.timing.timeScale = 1.5;
});