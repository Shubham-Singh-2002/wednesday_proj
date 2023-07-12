var tl = gsap.timeline();

tl.from("#nav h1,#nav h4,#nav i,#nav h5,#nav button", {
  delay: 0.4,
  opacity: 0,
  y: -50,
  stagger: 0.1,
});

tl.from("#center>h1", {
  opacity: 0,
  y: 40,
  scale: 1.2,
  duration: 0.6,
});

tl.from("#center>p", {
  opacity: 0,
  y: 40,
  duration: 0.3,
});

tl.from("#page1 img", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
});

var tl2 = gsap.timeline();

tl2.from("#page2>h1", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2>h1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});

tl2.from("#page2>p", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2>p",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});

tl2.from("#elem-container .elem", {
  opacity: 0,
  scale: 0.7,
  duration: 0.8,
  y: 100,
  scrollTrigger: {
    trigger: "#elem-container .elem",
    scroller: "body",
    // markers: true,
    start: "top 70%",
  },
});
