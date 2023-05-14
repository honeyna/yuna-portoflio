let vMove;
let defaultSpeed = 1;
let leftValue = 0;
let speed = defaultSpeed;

$(".works_wrap").append($(".works_wrap ul").clone());

const visualMove = () => {
    $(".works_wrap").css({ left: `${leftValue}px` });
    if ($(".works_wrap").offset().left <= -1 * $('.works_wrap ul').outerWidth()) {
        leftValue = 0;
    }
    leftValue -= speed;
}

$(".works_wrap").hover(() => {
    if(defaultSpeed !== 0)
    speed = 0.1;
}, () => {
    speed = defaultSpeed;
})

$('.works_wrap').on('mousedown', function () {
    speed = 0;
}).on('mouseup', function () {
    speed = 0.3;
}).on('mouseleave', function () {
    speed = defaultSpeed;
});

vMove = setInterval(() => visualMove(), 10);



console.clear();