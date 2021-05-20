const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.3 });
tl.to(".abtus", {x: "0%", duration: 1});
