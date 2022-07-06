class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = window.innerHeight;
        this.width = width;
        this.height = height;
        this.controls = new Controls();
        this.speed = 0;
        this.angle = 0;
        this.maxSpeed = 5;
        this.acceleration = 0.03;
    }

    update() {
        if (this.controls.forward) 
            this.speed += this.acceleration;
        
        if (this.controls.reverse)
            this.speed -= this.acceleration;
        
        if (this.speed > this.maxSpeed) 
            this.speed = this.maxSpeed;
        
        if (this.speed < -this.maxSpeed / 2)
            this.speed = -this.maxSpeed / 2;
        
        if (this.controls.left) {
            this.angle += .03;
        }

        if (this.controls.right) {
            this.angle -= .03;
        }
            
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed; 
        
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore();
    }

}