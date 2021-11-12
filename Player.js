class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        rectMode(CENTER);
        fill(0);
        rect(this.x - 20, this.y - 15, 10, 10);
        rect(this.x - 20, this.y + 15, 10, 10);
        rect(this.x + 15, this.y - 15, 10, 10);
        rect(this.x + 15, this.y + 15, 10, 10);
        fill(255, 0, 0);
        rect(this.x, this.y, 50, 30);
        fill(255);
        rectMode(CORNER);
    }
    get getX(){
        return this.x;
    }
    set setX(px){
        this.x = px;
    }
    get getY(){
        return this.y;
    }
    set setY(py){
        this.y = py;
    }
}