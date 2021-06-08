class Hero {
    constructor(x, y,r) {

        var options ={
            denisty:1,
            frictionAir:1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);       
         World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};