class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

attached(body){
    this.sling.bodyA = body;

}

    display(){
        image(this.sling1,190,100,50,120);
        image(this.sling2,165,98,40,70);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-9, pointA.y, pointB.x-18, pointB.y-5);
            line(pointA.x+9, pointA.y, pointB.x+19, pointB.y);
            image(this.sling3,pointA.x-10,pointA.y,20,10);
        }
    }
    
}

