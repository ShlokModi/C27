class Chain{
    constructor(bodyA,bodyB){
        var options={
            length: 75,
            stiffness: 0.04,
            bodyA: bodyA,
            bodyB: bodyB
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}