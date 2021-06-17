class Shooter{
    constructor(bodyA, pointB, width,height){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        this.sling1 = loadImage('images/shooter1.png');
        this.pointB = pointB
        this.sling1.width=width;
        this.sling1.height = height
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
attach(body)
{
    this.sling.bodyA=body;

}
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,280,50,100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
      strokeWeight(3)
      stroke("grey")
      line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,
           this.sling.pointB.x,this.sling.pointB.y);
           
            
        }
    }
    
}
