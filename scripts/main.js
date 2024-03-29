const canvas = document.getElementById("myCanvas");
const speedDisplay = document.getElementById("speedDisplay");


canvas.width = 200; 

const ctx = canvas.getContext("2d");
const car = new Car(100, window.innerHeight - 200, 30, 50);
car.draw(ctx)

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;   
    car.draw(ctx);
    requestAnimationFrame(animate);
    speedDisplay.innerHTML = car.speed;
}