﻿var canvas = document.getElementById('canvas'),
    intro = document.getElementById('intro'),
    can_w = parseInt(canvas.getAttribute('width')),
    can_h = parseInt(canvas.getAttribute('height')),
    ctx = canvas.getContext('2d');

// console.log(typeof can_w);

var ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    alpha: 1,
    phase: 0
}
ball_color = {
    r: 155,
    g: 155,
    b: 155
},
    ball_color2 = {
        r: 255,
        g: 255,
        b: 255
    },
    R = 2,
    R2 = 50;
    balls = [],
    alpha_f = 0.03,
    alpha_phase = 0,

    // Line
    link_line_width = 0.5,
    dis_limit = 150,
    add_mouse_point = true,
    mouse_in = false,
    mouse_ball = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        r: 0,
        type: 'mouse'
    };

// Random speed
function getRandomSpeed(pos) {
    var min = -0.35,
        max =0.35;
    switch (pos) {
        case 'top':
            return [randomNumFrom(min, max), randomNumFrom(min, max)];
            break;
        case 'right':
            return [randomNumFrom(min, max), randomNumFrom(min, max)];
            break;
        case 'bottom':
            return [randomNumFrom(min, max), randomNumFrom(min, max)];
            break;
        case 'left':
            return [randomNumFrom(min, max), randomNumFrom(min, max)];
            break;
        case 'max':
            return [randomNumFrom(-20, 20), randomNumFrom(-20, 20)];
            break;
        default:
            return;

            break;
    }
}
function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min;
}

// Random Ball
function getRandomBall() {
    var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
        case 'top':
            return {
                x: randomSidePos(can_w),
                y: -R,
                vx: getRandomSpeed('top')[0],
                vy: getRandomSpeed('top')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'right':
            return {
                x: can_w + R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('right')[0],
                vy: getRandomSpeed('right')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'bottom':
            return {
                x: randomSidePos(can_w),
                y: can_h + R,
                vx: getRandomSpeed('bottom')[0],
                vy: getRandomSpeed('bottom')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
        case 'left':
            return {
                x: -R,
                y: randomSidePos(can_h),
                vx: getRandomSpeed('left')[0],
                vy: getRandomSpeed('left')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            }
            break;
    }
}
function randomSidePos(length) {
    return Math.ceil(Math.random() * length);
}

// Draw Ball
function renderBalls() {
    Array.prototype.forEach.call(balls, function (b) {
        if (!b.hasOwnProperty('type')) {
            ctx.fillStyle = 'rgba(' + ball_color.r + ',' + ball_color.g + ',' + ball_color.b + ',' + b.alpha + ')';
            ctx.beginPath();
            ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
    });
}

// Update balls
function updateBalls() {
    var new_balls = [];
    Array.prototype.forEach.call(balls, function (b) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x > -(50) && b.x < (can_w + 50) && b.y > -(50) && b.y < (can_h + 50)) {
            new_balls.push(b);
        }

        // alpha change
        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));
        // console.log(b.alpha);
    });

    balls = new_balls.slice(0);
}

// loop alpha
function loopAlphaInf() {

}

// Draw lines
function renderLines() {
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
        for (var j = i + 1; j < balls.length; j++) {

            fraction = getDisOf(balls[i], balls[j]) / dis_limit;

            if (fraction < 1) {
                alpha = (1 - fraction).toString();

                ctx.strokeStyle = 'rgba(155,155,155,' + alpha + ')';
                ctx.lineWidth = link_line_width;

                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

// calculate distance between two points
function getDisOf(b1, b2) {
    var delta_x = Math.abs(b1.x - b2.x),
        delta_y = Math.abs(b1.y - b2.y);

    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
}

// add balls if there a little balls
function addBallIfy() {
  
    if (balls.length < canvas.clientWidth/25) {
        balls.push(getRandomBall());
    }
}

// Render
function render() {
    ctx.clearRect(0, 0, can_w, can_h);

    renderBalls();

    renderLines();

    updateBalls();

    addBallIfy();

    window.requestAnimationFrame(render);
}

// Init Balls
function initBalls(num) {
    for (var i = 1; i <= num; i++) {
                
        balls.push({
            x: randomSidePos(can_w),
            y: randomSidePos(can_h),
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        });
    }
}

function spawnBalls(deltaX,deltaY) {
    for (var i = 1; i <= 3; i++) {

        balls.push({
            x: deltaX,
            y: deltaY,
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        });
    }
}

function spawnMoreBalls(deltaX, deltaY) {
    for (var i = 1; i <= 10; i++) {

        balls.push({
            x: deltaX,
            y: deltaY,
            vx: getRandomSpeed('max')[0],
            vy: getRandomSpeed('max')[1],
            r: R2,
            alpha: 1,
            phase: randomNumFrom(0, 10),
            ball_color: ball_color2
       
        });
    }
}
// Init Canvas
function initCanvas() {

    var section = document.getElementById('reference');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', section.offsetHeight);
    can_w = parseInt(canvas.getAttribute('width'));
    can_h = parseInt(canvas.getAttribute('height'));
  
   
}




window.addEventListener('resize', function (e) {
    
    initCanvas();   
  
});

function goMovie() {  
 

    initCanvas();   
      //initialize my service text   
       
    initBalls(canvas.clientWidth/2);
    window.requestAnimationFrame(render);
    canvas.style.width = '100%';   

}



goMovie();







// particles mouse effect 
var mainpage = document.getElementById('canvas');
mainpage.addEventListener('mouseenter', function () {
    
    mouse_in = true;
    balls.push(mouse_ball);
});

mainpage.addEventListener('mouseleave', function () {
    
    mouse_in = false;
    var new_balls = [];
    Array.prototype.forEach.call(balls, function (b) {
        if (!b.hasOwnProperty('type')) {
            new_balls.push(b);
        }
    });
    balls = new_balls.slice(0);
});
mainpage.addEventListener('mousemove', function (e) {
    //var e = e || window.event;

    var pos = e.currentTarget.getBoundingClientRect();
    mouse_ball.x = e.pageX +10;
    mouse_ball.y = e.pageY;
    // console.log(mouse_ball);

    //moveMouseBall();
});


mainpage.addEventListener('click', function (e) {
    spawnBalls(e.pageX+10 , e.pageY);
});










