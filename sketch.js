// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
     
// Create Engine
var engine = Engine.create();
 
// Create Renderer
var render = Render.create({
                element: document.querySelector('#shapes'),
                engine: engine,
                options: {
                    width: 800,
                    height: 400,
                    wireframes: false
                }
             });

// Create Bodies         
var boxA = Bodies.rectangle(400, 200, 80, 80);
var ballA = Bodies.circle(380, 100, 40, 10);
var ballB = Bodies.circle(460, 10, 40, 10);
var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });
 
// Add Bodies to World
World.add(engine.world, [boxA, ballA, ballB, ground]);
 
// Run Engine and Renderere
Engine.run(engine);
Render.run(render);