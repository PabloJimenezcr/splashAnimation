let images = [
    'url("img/1.png")',
    'url("img/2.png")',
    'url("img/3.png")',
    'url("img/4.png")',
    'url("img/5.png")',
    'url("img/6.png")',
    'url("img/7.png")',
    'url("img/8.png")',
    'url("img/9.png")',
    'url("img/10.png")',
    'url("img/11.png")',
    'url("img/12.png")',
    'url("img/13.png")',
    'url("img/14.png")',
    'url("img/15.png")',
    'url("img/16.png")',
];

let body = document.querySelector('body');
body.onclick = function (e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('span');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    let bg = images[Math.floor(Math.random() * images.length)];

    splash.style.backgroundImage = bg;
    this.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 4000);
}