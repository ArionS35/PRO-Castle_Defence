class Enemy5{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:0.1,
            speedX:5
           }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/skeleton_img-5.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.position;
        push();
        if((this.body.speed)<10){
        //translate(enemyPos.x, enemyPos.y);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height)
        pop();
    }else
    {
    World.remove(world,this.body)  
    }
      }
}