const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const boxs = gsap.utils.toArray(".project");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=5000",
    //snap: 1 / (sections.length - 1),
    // markers: true,
  }
});

// whizz around the sections
sections.forEach((section) => {
  let box = section.querySelectorAll(".project");
  
  if(box.length === 0)  return 
  
  gsap.from(box, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  });
});