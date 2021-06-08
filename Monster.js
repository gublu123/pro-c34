class Monster
{
    constructor(x, y, r)
    {
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body)
    }
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}
