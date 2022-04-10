let d = new Date(0);
let time = document.querySelector('#cronometro');
let button = document.querySelectorAll('button');
let milis = 31;
let timer;

function cronometro () {
    milis += 31;
    d.setHours(0, 0, 0, milis);
    let h = ('00' + d.getHours()).slice(-2);
    let m = ('00' + d.getMinutes()).slice(-2);
    let s = ('00' + d.getSeconds()).slice(-2);
    let ms = ('000' + d.getMilliseconds()).slice(-3);
    time.innerHTML = h+':'+m+':'+s+':'+'<span id="ms">'+ms+'</span>';
}
function start () {
    timer = setInterval(cronometro, 31);
}
function stop () {
    clearInterval(timer);
}

button[0].addEventListener('click', function () {
    if (button[0].innerText == 'START') {
        start();         
        button[0].innerHTML = 'STOP';        
    } else {        
        stop();             
        button[0].innerHTML = 'START';
        
    }
});

button[1].addEventListener('click', () => {
    stop();
    time.innerHTML = '00:00:00:<span id="ms">000</span>';
    button[0].innerText = "START";
    milis = 31;
});