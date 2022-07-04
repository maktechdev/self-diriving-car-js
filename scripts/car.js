class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = window.innerHeight;
        this.width = width;
        this.height = height;
        this.controls = new Controls();
        this.speed = 0;
        this.maxSpeed = 15;
        this.acceleration = 0.03;


    }

    update() {
        if (this.controls.forward) {
            this.speed += this.acceleration;
            this.y -= this.speed;
            if (this.speed >= this.maxSpeed) {
                this.speed = this.maxSpeed;
            }
            console.table(this.speed);
        }
        if (this.controls.reverse) {
            this.y += 1;
            console.table(this.speed);
        }

        
    }

    draw(ctx) {
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }

}