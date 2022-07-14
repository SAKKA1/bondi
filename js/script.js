const tl = gsap.timeline({defaults: {ease: 'pwer1.out'}})

tl.to("span",{y: '0%', duration:1 ,stagger: 0.25})
tl.to(".slider" , {y: '-100%',duration:1})
tl.to(".intro", {y: '-100%', duration:1},"=-1")
tl.fromTo(".text", {opacity:0},{opacity:1 ,duration:1})
