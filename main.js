let button=document.querySelector('button');
let element=document.querySelector('html');
let header=document.querySelector('header');
let projects=document.querySelector('.projects');
let button2=document.querySelector('.secondButton');
let button3=document.querySelector('.thirdButton');
let words=document.querySelector('.thirdButton p');

function changeBackgroundColor() {
    element.style.backgroundColor='Orange';
    header.style.backgroundColor='DeepPink';
    projects.style.backgroundColor='DarkRed';
    projects.style.color='White';
    button2.style.display='block';
}

function changeBackgroundColor2() {
    element.style.backgroundColor='DarkKhaki';
    header.style.backgroundColor='PeachPuff';
    projects.style.backgroundColor='Lime';
    projects.style.color='Black';
    button3.style.display='block';
    words.style.display='block';
}

function changeBackgroundColor3() {
    element.style.backgroundColor='Cyan';  
    header.style.backgroundColor='mediumspringgreen';
    projects.style.backgroundColor='limegreen';
    projects.style.color='Black';
    button3.style.display='none';
    button2.style.display='none';
}

button.onclick=changeBackgroundColor;
button2.onclick=changeBackgroundColor2;
button3.onclick=changeBackgroundColor3;