const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var monsterImg, Monster;
var superHeroImg;

function preload() {
//preload the images here
      backgroundImg = loadImage("images/GamingBackground.png");
      monsterImg = loadImage("images/Monster-02.png");
      superHeroImg = loadImage("images/SuperHero-02.png");
}


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600, 1200, 20);

      monster = new Monster(60, 60, 20/5);

    fly = new Fly(Hero.body,{x:200, y:50});

}

function draw() {
  background(0);

  ground.display();

  monster.display();

  fly.display();

}

function mouseDragged()
{
  Matter.body.setPosition(hero.body, {x:   mouseX, y: mouseY});
}

