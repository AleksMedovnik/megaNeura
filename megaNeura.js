'use strict'

let expl = new Image();
const explosion = [];

function renderExplosion(w, h){
	for (let i = 0; i < explosion.length; i++) {
		ctx.drawImage(
			expl, w * Math.floor(explosion[i].animX),
			h * Math.floor(explosion[i].animY), w, h,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
			);
	};
};

function updateExplosion(gor, vert, vel = 1){
	for (let i = 0; i < explosion.length; i++) {
		explosion[i].animX += vel;
		if (explosion[i].animX >= gor) {
			explosion[i].animY++; 
			explosion[i].animX = 0;
		}
		if (explosion[i].animY >= vert) {
			explosion.splice(i, 1);
		}
	} 
};


function createExplosion(w, h, dx = 0, dy = 0, myX, myY) {
myX = myX || event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft;
myY = myY || event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop;       
    explosion.push({
                x: myX - w / 2 + dx,
                y: myY - h / 2 + dy,
                w,
                h,
                animX: 0,
                animY: 0
            });
};   