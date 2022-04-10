let ground = document.querySelector('.game'),
    hero = document.querySelector('.hero'),
    enemy = document.querySelector('.enemy'),
    w = document.body.clientWidth,
    h = document.body.clientHeight;
let shot = document.getElementById('shot');
let run = document.getElementById('run');
let start = document.getElementById('start');
let heroDie = document.getElementById('hero-die');

shot.volume = 0.6;
run.volume = 0.5;
start.volume = 0.3;
heroDie.volume = 0.6;

window.addEventListener('resize', function(){
    w = document.body.clientWidth,
    h = document.body.clientHeight;
  console.log(w, h)
});

document.addEventListener('keydown', move)
document.addEventListener('keyup', stop)

function move(e) {
    start.play()
    let key = e.key;
    let x = hero.offsetLeft;
    let y = hero.offsetTop;
    let X = enemy.offsetLeft;
    let Y = enemy.offsetTop;

    setTimeout(shotBot, 2000)

    if(key == 'ArrowUp') {
        if(hero.className == 'hero left' || hero.className == 'hero left run'  || hero.className == 'hero' || hero.className == 'hero shot-left'  || hero.className == 'hero left down-left'){
            hero.classList.add('up')
            function downLeft(){
                hero.classList.remove('up')
                hero.classList.add('down-left')
            }
            function downLeftRemove(){
                hero.className = 'hero left';
            }
            setTimeout(downLeft ,1000)
            setTimeout(downLeftRemove ,1400)
        }
        if(hero.className == 'hero right' || hero.className == 'hero right run' || hero.className == 'hero' || hero.className == 'hero shot-right' || hero.className == 'hero right down-right'){
            hero.classList.add('up')
            function downRight(){
                hero.classList.remove('up')
                hero.classList.add('down-right')
            }
            function downRightRemove(){
                hero.className = 'hero right';
            }
            setTimeout(downRight ,1000)
            setTimeout(downRightRemove, 1400)
        }
    }
    if(key == 'ArrowRight') {
        if(hero.className == 'hero right up' || hero.className == 'hero right down-right'){
            hero.classList.add('right');
            hero.classList.add('run');
            ground.classList.add('run');
            enemy.classList.add('run');
            if(x < w) hero.style.left = x+10+'px';
            run.play()
        }else{
            hero.className = 'hero';
            hero.classList.add('right');
            hero.classList.add('run');
            ground.classList.add('run');
            enemy.classList.add('run');
            if(x < w) hero.style.left = x+10+'px';
            run.play()
        }
    }
    if(key == 'ArrowLeft') {
        if(hero.className == 'hero left up' || hero.className == 'hero left down-left'){
            hero.classList.add('left');
            hero.classList.add('run');
            if(x > 0) hero.style.left = x-10+'px';
            run.play()
        }else{
            hero.className = 'hero';
            hero.classList.add('left');
            hero.classList.add('run');
            if(x > 0) hero.style.left = x-10+'px';
            run.play()
        }
    }
    if(key == 'ArrowDown') {
        if(hero.className == 'hero left' || hero.className == 'hero left run'  || hero.className == 'hero' || hero.className == 'hero shot-left' || hero.className == 'hero left up'){
            if(hero.className == 'hero left' && x > X){
                enemy.classList.add('die');
            }
            if(hero.className == 'hero left up' || hero.className == 'hero left down-left'){
                hero.classList.add('shot-left');
                shot.play()
            }else{
                hero.className = 'hero';
                hero.classList.add('shot-left');
                shot.play()
            }
        }
    }
    if(key == 'ArrowDown') {
        if(hero.className == 'hero right' || hero.className == 'hero right run' || hero.className == 'hero' || hero.className == 'hero shot-right' || hero.className == 'hero right up'){
            if(hero.className == 'hero right' && x < X){
                enemy.classList.add('die');
            }
            if(hero.className == 'hero right up' || hero.className == 'hero right down-right'){
                hero.classList.add('shot-right');
                shot.play()
            }else{
                hero.className = 'hero';
                hero.classList.add('shot-right');
                shot.play()
            }
        }
    }
    console.log(y)
    function shotBot(){
        if(enemy.className == 'enemy left'){
            enemy.className = 'enemy';
            enemy.classList.add('left');
            enemy.classList.add('shot');
            function shotEmet(){
                if(enemy.className == 'enemy left shot'){
                    enemy.classList.add('shots-left')
                    shot.play()
                    if(hero.className == 'hero up' || hero.className == 'hero right up' || hero.className == 'hero left up' || hero.className == 'hero right up shot' || hero.className == 'hero left up shot'){
                        console.log('Good')
                    }else{
                        hero.classList.add('die-right');
                        setTimeout(finish, 500)
                    }
                }
            }
            setTimeout(shotEmet, 500)
        }
        if(enemy.className == 'enemy right'){
            enemy.className = 'enemy';
            enemy.classList.add('right');
            enemy.classList.add('shot');
            function shotEmet(){
                if(enemy.className == 'enemy right shot'){
                    enemy.classList.add('shots-right')
                    shot.play()
                    if(hero.className == 'hero up' || hero.className == 'hero right up' || hero.className == 'hero left up' || hero.className == 'hero right up shot' || hero.className == 'hero left up shot'){
                        console.log('Good')
                    }else{
                        hero.classList.add('die-left');
                        setTimeout(finish, 500)
                    }
                }
            }
            setTimeout(shotEmet, 500)
        }
    }
    function finish(){
        start.pause()
        heroDie.play()
        alert('Ты проиграл! Попробуй снова')
        location.reload()
    }
}

function stop() {
    hero.classList.remove('run');
    if(hero.className == 'hero right' || hero.className == 'hero right run'){
        hero.className = 'hero right';
    }
    if(hero.className == 'hero left' || hero.className == 'hero left run'  || hero.className == 'hero'){
        hero.className = 'hero left';
    }
    ground.classList.remove('run');
    enemy.classList.remove('run');
  }

/*  function sayHi() {
    alert('Привет');
  }

  setTimeout(sayHi, 1000);*/