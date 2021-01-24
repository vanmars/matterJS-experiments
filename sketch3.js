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

engine.world.gravity.y = 0;

var topWall = Bodies.rectangle(400, 50, 720, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 210, 20, 300, { isStatic: true });
var rightWall = Bodies.rectangle(750, 210, 20, 300, { isStatic: true });
var bottomWall = Bodies.rectangle(400, 350, 720, 20, { isStatic: true });

var box = Bodies.rectangle(460, 120, 40, 40, {
  render: {
    fillStyle: "pink",
    lineWidth: 15,
  }
});

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, box]);

Engine.run(engine);

Render.run(render);

document.querySelector('.scale').addEventListener('click', function () {
    Body.scale( box, 1.5, 1.2);
});

document.querySelector('.rotate').addEventListener('click', function () {
    Body.rotate( box, Math.PI/6);
});

document.querySelector('.translate').addEventListener('click', function () {
    Body.translate( box, {x: -10, y: 20});
});
