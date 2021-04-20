class grond{
constructor(x,y,width,height){

var kt = { isStatic : true }

this.ground = Bodies.rectangle(x,y,width,height,kt)

World . add(world,this.ground)

}
appear(){
var pose = this.ground.position;
fill(255);
rectMode(CENTER)
rect(pose.x,pose.y,this.width,this.height)



}

}