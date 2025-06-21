/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    moveright();
    tleft();
    moveleft();
    tright();
    moveright();
    tleft();
    moveleft();
    tright();
    moveright();
    
 }
 function tleft(){
    turnLeft();
    move();
    turnLeft();
 }
 function moveright(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    }
    
 function tright(){
    turnRight();
    move();
    turnRight();
 }
 
 function moveleft(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    }