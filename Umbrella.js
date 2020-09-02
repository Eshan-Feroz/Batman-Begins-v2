class Umbrella {
    constructor(x, y, r){
        // Options for the dustbin
        var options = {
            isStatic:true
        }

        this.image = loadImage("Walking Frame/walking_1.png");

        // Body of dustbin
        this.body = Bodies.circle(x, y, r, options);

        // Width, height, x and y of dustbin is initialized
        this.r = r;
        //this.height = height;
        this.x = x;
        this.y = y;

        // Load the image
        //this.image = loadImage("Sprites/dustbingreen.png");
        
        // Add class body to the world
        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        ellipseMode(CENTER);
        
        // Fill the bin outer layer with color green
        fill("black");

        // Draw the rectangle of outer layer
        ellipse(this.x, this.y, this.r, this.r);
        
        // Print the image
        //image(this.image, 1050,390,250, 300);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
