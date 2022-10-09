"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpaceInvader();

function drawSpaceInvader() {
    // Draw background
    context.beginPath();
    context.fillRect(0,0,300,300);


    // Draw space invader
    context.beginPath();
    context.fillStyle = '#00FF00';
    context.rect(125,25,50,50);

    context.rect(25,125,50,50);
    context.rect(75,175,50,50);
    context.rect(75,225,50,50);

    context.rect(125,125,50,50);
    context.rect(175,175,50,50);
    context.rect(175,225,50,50);

    context.rect(225,125,50,50);

    context.fill();
}