var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

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

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });

var ball = Bodies.circle(90, 280, 20, {
  render: {
    sprite: {
      texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
      xScale: 0.4,
      yScale: 0.4
    }
  }
});

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball]);
Engine.run(engine);
Render.run(render);

document.querySelector(".force").addEventListener("click", function() {
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: 0.04, y: 0 }
  );
});

document.querySelector(".vforce").addEventListener("click", function() {
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: 0, y: -0.04 }
  );
});

document.querySelector(".red-friction").addEventListener("click", function() {
  ball.friction = 0.05;
  ball.frictionAir = 0.0005;
  ball.restitution = 0.9;
});

document.querySelector(".res-friction").addEventListener("click", function() {
  ball.friction = 0.1;
  ball.frictionAir = 0.001;
  ball.restitution = 0;
});
