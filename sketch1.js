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
var ball = Bodies.circle(460, 10, 40, 10);
var bottomWall = Bodies.rectangle(400, 400, 810, 30, { isStatic: true });

World.add(engine.world, [topWall, leftWall, ball, bottomWall]);

Engine.run(engine);
Render.run(render);


var addCircle = function () {
 return Bodies.circle(Math.random()*400 + 30, 30, 30);
};

var addSquare = function () {
 return Bodies.rectangle(Math.random()*400 + 30, 30, 60, 60);
};

var addRect = function () {
 return Bodies.rectangle(Math.random()*400 + 30, 30, 100, 60);
};


document.querySelector('.add-circle').addEventListener('click', function () {
    World.add(engine.world, addCircle());
});

document.querySelector('.add-square').addEventListener('click', function () {
    World.add(engine.world, addSquare());
})

document.querySelector('.add-rect').addEventListener('click', function () {
    World.add(engine.world, addRect());
})