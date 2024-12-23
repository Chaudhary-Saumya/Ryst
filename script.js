var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var t1 = gsap.timeline()

t1.from(".second h1 span", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.5
})

t1.from(".second h4", {
    duration: 1,
    opacity: 0
})

t1.from(".second button", {
    duration: 1,
    opacity: 0
})

gsap.from(".t1 h3", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".t1 h3",
        scroller: ".main",
        start: "top 80%",
    }
})

gsap.from(".t1 button", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".t1 button",
        scroller: ".main",
        start: "top 80%",
    }
})

gsap.from(".footer h1", {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".footer h1",
        scroller: ".main",
        start: "top 80%",
    }
})

gsap.from(".forth h1", {
    duration: 1,
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".forth h1",
        scroller: ".main",
        start: "top 80%",
    }
})

gsap.from(".f-buy", {
    duration: 1,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".f-buy",
        scroller: ".main",
        start: "top 80%",
    }
})

gsap.from(".f-buy-1", {
    duration: 1.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".f-buy-1",
        scroller: ".main",
        start: "top 80%",
    }
})