// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 10, 150, 150);

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "silver";
// ctx.stroke();
// ctx.closePath();


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
           if(y= y-paddleHeight){
            dy = -dy  ;
			 }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

let interval = setInterval(draw, 10);

ctx.fillStyle = 'red';
ctx.fillRect(x,y =60,width,height)
shapesArry.push({x,y:60,width,height})
// ctx.fillStyle = 'yellow';
// ctx.fillRect(x,y = 120,width,height)
// shapesArry.push({x,y: 120,width,height})
// ctx.fillStyle = 'pink';
// ctx.fillRect(x,y = 180,width,height)
// shapesArry.push({x,y: 180,width,height})
// ctx.fillStyle = 'red';
// ctx.fillRect(x,y = 240,width,height)
// shapesArry.push({x,y: 240,width,height})
// ctx.fillStyle = 'orange';
// ctx.fillRect(x,y = 300,width,height)
// shapesArry.push({x,y: 300,width,height})
// ctx.fillStyle = 'pink';
// ctx.fillRect(x,y = 360,width,height)
// shapesArry.push({x,y: 360,width,height})
// ctx.fillStyle = 'black';
// ctx.fillRect(x,y = 420,width,height)
// shapesArry.push({x,y: 420,width,height})
// ctx.fillStyle = 'yellow';
// ctx.fillRect(x,y = 480,width,height)
// shapesArry.push({x,y: 480,width,height})
// ctx.fillStyle = 'red';
// ctx.fillRect(x,y = 540,width,height)
// shapesArry.push({x,y : 540,width,height})
