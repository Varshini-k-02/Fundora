const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.3 });
tl.to(".abtus", {x: "0%", duration: 1});


const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });

t2.to(".text1", { y: "0%", duration: 1, stagger: 0.25 });
t2.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
t2.to(".intro1", { y: "-100%", duration: 1 }, "-=1");
console.log("Working??")