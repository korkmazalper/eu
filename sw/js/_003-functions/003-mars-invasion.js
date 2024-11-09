/*
Mars Mission 
- We have a flying robot to use in Mars Mission.
- The Robot's initial coordinates are (x=0,y=0,z=0) relative to a cartesian coordinate system
- This is how coordinates are change when moving one step depending on directions:
right: x increases by 1
left: x decreases by 1
forward:y increases by 1
backward:y decreases by 1
up:z increases by 1
down:z decreases by 1
- The Robot cannot move into negativevalues or greater than 10.
    For example if x=0, the root cannot move to the left.
- Write a programme which makes the robot move using a first class functions. 
  After calling the correctfunctions, the robot should reach its strategic destination during its mission.(x=4,y=2,z=3)

- Robot Commands should be:
 moveUp(), moveDown(),moveRight(),
 moveLeft(), moveForward(), moveBackward()
 check()
*/

var robot = {
    name: "Mars Invader",
    coordinates: {
        x: 0,
        y: 0,
        z: 0
    }
};

robot.check = function () {
    console.log("Robot Position: x= " +
        this.coordinates.x +
        ", y=" + this.coordinates.y +
        ", z=" + this.coordinates.z
    );
    if (this.coordinates.x === 4 &&
        this.coordinates.y === 2 &&
        this.coordinates.z === 3) {
        console.log("mission complete!");
        }
}

robot.moveRight = function () {
    if(this.coordinates.x<10) this.coordinates.x++;
    this.check();
}
robot.moveLeft = function () {
    if(this.coordinates.x>0) this.coordinates.x--;
    this.check();
}
robot.moveForward = function () {
    if(this.coordinates.y<10) this.coordinates.y++;
    this.check();
}
robot.moveBackward = function () {
    if(this.coordinates.y>0) this.coordinates.y--;
    this.check();
}
robot.moveUp = function () {
    if(this.coordinates.z<10) this.coordinates.z++;
    this.check();
}
robot.moveDown = function () {
    if(this.coordinates.z>0) this.coordinates.z--;
    this.check();
}