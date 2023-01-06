const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var orange ;
var orangetree ; 
var stone ; 
var backround ;
var rope ;
var button ;
var mutebutton;
var fruit_con;

function preload {
orange = loadImage('orange.png');
orangetree = loadImage('orangetree.png');
stone = loadImage('stone.png');
backround = loadImage('tropicalisland.png');
}

orange = createSprite(100,100);
orangetree = createSprite(50,100);
stone = createSprite(200,400);
backround = createSprite(400,400);

orange.scale =0.5
stone.scale = 0.3

orange = Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,stone);

fruit_con = new Link(rope,stone);

button = createImg('button.png');
button.position(20,30);
button.size(50,50);
button.mouseClicked(drop);

rope = new Rope(8,{x:40,y:30});

mutebutton = createImg('MuteButton.png');
  mutebutton.position(width-50,20);
  mutebutton.size(50,50);
  mutebuton.mouseClicked(mute);













function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  background(51);
  image(bg_img,0,0,width,height);

  if(collide(orangetree,stone)==true){
    orange.position(200,400)
    World.remove(engine.world,stone);
    stone = null;
  }
  rope.show();
}

function strike {

  rope.break()
  fruit_con.dettach()
    fruit_con = null
  
}

//show
stone.show
fruit_con.show

