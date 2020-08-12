"use strict"


// Lesson_1
/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const main = {};
let star;

function playAnination() {
    init();  
    animation();  
};

function init() {
    star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 6,
        opacity: Math.random() * 0.3 + 0.6,
        coefOpacity: 0.004,
        setOpacity() {
            if (this.opacity <= 0.4 || this.opacity >= 1.0) {
                this.coefOpacity = -this.coefOpacity;
            }
            this.opacity += this.coefOpacity;
        }
    }

};

function animation() {

    update();
    render();
    main.anim = requestAnimationFrame(animation);

};

function render() {
 ctx.fillRect(0, 0, canvas.width, canvas.height);

 ctx.save();
 ctx.beginPath();
 ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
 ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
 ctx.fill();
 ctx.restore();

 ctx.save();
 ctx.beginPath();
 ctx.arc(star.x + star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
 ctx.fill();
 ctx.beginPath();
 ctx.arc(star.x + star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
 ctx.fill();
 ctx.beginPath();
 ctx.arc(star.x - star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
 ctx.fill();
 ctx.beginPath();
 ctx.arc(star.x - star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
 ctx.fill();
 ctx.restore();

};

function update() {
   star.setOpacity();

};

window.onload = () => playAnination(); 
*/


// Homework_1
/*Переписать существующий код. 
В проекте должны появляться 500 подобных объектов-звезд.
Реализовать данную возможность необходимо при помощи 
классов.*/


// Solution
/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const main = {};
const stars = [];


function playAnination() {
    init();  
    animation();  
};

function init() {
 for (let i = 0; i <= 500; i++) {
    stars.push(new CreateStar());
}

};

function animation() {

    update();
    render();
    main.anim = requestAnimationFrame(animation);

};

function render() {
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   for (let star of stars) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

};

function update() {
   for (let star of stars) {
    star.setOpacity();
}

};


class CreateStar {
    constructor(){
       this.x = Math.random() * canvas.width;
       this.y = Math.random() * canvas.height;
       this.radius = Math.random() * 6;
       this.opacity = Math.random() * 0.3 + 0.6;
       this.coefOpacity = 0.004;
   }

   setOpacity() {
    if (this.opacity <= 0.4 || this.opacity >= 1.0) {
        this.coefOpacity = -this.coefOpacity;
    }
    this.opacity += this.coefOpacity;
}

}

window.onload = () => playAnination(); */



// Lesson_2
/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const main = {};
const stars = [];
const explosion = [];

let explImg = new Image();
explImg.src = 'Images/explimg.png';


function playAnination() {
    init();  
    animation();  
};

function init() {
 for (let i = 0; i <= 500; i++) {
    stars.push(new CreateStar());
}
 canvas.addEventListener('click', function() {
let eventX = event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft;
let eventY = event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop;
    explosion.push({
                x: eventX - 50,
                y: eventY - 50,
                w: 100,
                h: 100,
                animX: 0,
                animY: 0
            });
});

};

function animation() {

    update();
    render();
    main.anim = requestAnimationFrame(animation);

};

function render() {
   ctx.fillRect(0, 0, canvas.width, canvas.height);

// star
for (let star of stars) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

// рисуем взрывы
    for (let i = 0; i < explosion.length; i++) {
        ctx.drawImage(
            explImg, 128 * Math.floor(explosion[i].animX),
            128 * Math.floor(explosion[i].animY), 128, 128,
            explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
        );
    }  


};

function update() {
// star
   for (let star of stars) {
    star.setOpacity();
}

// Анимация взрыва
    for (let i = 0; i < explosion.length; i++) {
        explosion[i].animX++;
        if (explosion[i].animX > 7) {
            explosion[i].animY++; 
            explosion[i].animX = 0;
        }
        if (explosion[i].animY > 7) {
            explosion.splice(i, 1);
        }
    }

};


class CreateStar {
    constructor(){
       this.x = Math.random() * canvas.width;
       this.y = Math.random() * canvas.height;
       this.radius = Math.random() * 6;
       this.opacity = Math.random() * 0.3 + 0.6;
       this.coefOpacity = 0.004;
   }

   setOpacity() {
    if (this.opacity <= 0.4 || this.opacity >= 1.0) {
        this.coefOpacity = -this.coefOpacity;
    }
    this.opacity += this.coefOpacity;
}

}

window.onload = () => playAnination();
*/


// Homework_2
/*
Представим себе задачу создать собственную библиотеку для JS-анимаций.
Начнем с анимации взрыва.
Необходимо создать отдельный JS-файл. В него нужно прописать весь код для функций.
В существующий JS-файл вносить изменения нельзя!
Рассмотрим все имеющиеся функции.

1. expl.src = 'Images/explimg.png';
Здесь все просто. Заливаем изображение в проект. Обратите внимание на то, что 
сам объект new Image() тоже создается в библиотеке.

2.createExplosion
createExplosion должна принимать 2 обязательных параметра и 4 необязательных.
Подробнее о параметрах.
1) Ширина взрыва, который должен отображаться на мониторе
2) Высота взрыва.
3) Смещение координаты по Х. Это может понадобиться, чтобы откорректировать
позицию взрыва. Если параметр не указан, считать его равным 0.
4) Смещение координаты по У. По умолчанию равен 0.
5) Координата взрыва по Х. По умолчанию - координата клика мыши. Этот параметр 
можно поменять, если событие происходит не на клике мыши, а, например, на 
клавиатурном событии. Или, если нужно указать собственные координаты взрыва.
6) Координата взрыва по У. По умолчанию, также это У мыши при клике.


3. renderExplosion
Она принимает 2 параметра. 
Ширину и высоту одного фрейма анимации.

4. updateExplosion
Принимает 2 обязательных параметра и 1 необязательный.
1) Количество фреймов по горизонтали (посчитать на изображении)
2) Количество фреймов по вертикали.
3) Скорость анимации. Определяет, насколько увеличивается animX. 
По умолчанию равен 1.*/


/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const main = {};
const stars = [];

expl.src = 'Images/explimg.png'; // * 1 


function playAnination() {
    init();  
    animation();  
};

function init() {
 for (let i = 0; i <= 500; i++) {
    stars.push(new CreateStar());
}
canvas.addEventListener('click', () => createExplosion(100, 100)); // * 2

};

function animation() {

    update();
    render();
    main.anim = requestAnimationFrame(animation);

};

function render() {
   ctx.fillRect(0, 0, canvas.width, canvas.height);

// star
for (let star of stars) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
    renderExplosion(128, 128); // * 3

};

function update() {
// star
    for (let star of stars) {
        star.setOpacity();
    } 

    updateExplosion(8, 8, 1);  // * 4

};


class CreateStar {
    constructor(){
       this.x = Math.random() * canvas.width;
       this.y = Math.random() * canvas.height;
       this.radius = Math.random() * 6;
       this.opacity = Math.random() * 0.3 + 0.6;
       this.coefOpacity = 0.004;
   }

   setOpacity() {
    if (this.opacity <= 0.4 || this.opacity >= 1.0) {
        this.coefOpacity = -this.coefOpacity;
    }
    this.opacity += this.coefOpacity;
}

}

window.onload = () => playAnination();

*/



//Solution

/*let expl = new Image();
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
}; */





// Lesson_3

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const main = {};
const stars = [];

expl.src = 'Images/explimg.png'; // * 1 


function playAnination() {
    init();  
    animation();  
};

function init() {
 for (let i = 0; i <= 500; i++) {
    stars.push(new CreateStar());
}
canvas.addEventListener('click', () => createExplosion(100, 100)); // * 2

};

function animation() {

    update();
    render();
    main.anim = requestAnimationFrame(animation);

};

function render() {
   ctx.fillRect(0, 0, canvas.width, canvas.height);

// star
for (let star of stars) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x + star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y + star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(star.x - star.radius, star.y - star.radius, star.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
    renderExplosion(128, 128); // * 3

};

function update() {
// star
    for (let star of stars) {
        star.setOpacity();
    } 

    updateExplosion(8, 8, 1);  // * 4

};


class CreateStar {
    constructor(){
       this.x = Math.random() * canvas.width;
       this.y = Math.random() * canvas.height;
       this.radius = Math.random() * 6;
       this.opacity = Math.random() * 0.3 + 0.6;
       this.coefOpacity = 0.004;
   }

   setOpacity() {
    if (this.opacity <= 0.4 || this.opacity >= 1.0) {
        this.coefOpacity = -this.coefOpacity;
    }
    this.opacity += this.coefOpacity;
}

}

window.onload = () => playAnination();