const parallex_el = document.querySelectorAll('.parallax')

let xValue = 0, yValue = 0;

let rotateDegree = 0;


function update(cursorPosition) {
    parallex_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let speedr = el.dataset.speedr;
        


        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;
        let zValue = 500 + (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;


        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) 
                                rotateY(${rotateDegree * speedr }deg) translateY(calc(-50% + ${yValue * speedy}px))
                                perspective(2300px) translateZ(${zValue * speedz}px)`;
    })
}

update(0);

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20

    update(e.clientX);
})

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//     wrapper: '.smooth-wrapper',
//     content: '.smooth-content'
// })




let timeline = gsap.timeline({repeat: -1});

timeline.to(
    '.train', 
    {
        opacity: 100
    },
    '<'
);


timeline.to(
    '.train', 
    {
        left: -200,
        duration: 7,
        delay: 5,
        ease: 'power1.out',
        opacity: 0
    }
);

timeline.to(
    '.train', 
    {
        left: -200,
        opacity: 0
    }
);

timeline.to(
    '.train', 
    {
        left: '150%',
        opacity: 0
    }
);



