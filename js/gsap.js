let animation = gsap.timeline();

function init() {
  const animationBehavior = {
    y: 40,
    opacity: 0,
    stagger: 0.1,
  };
  function desktopAnimation() {
    gsap.set("header", { autoAlpha: 1 });
    animation.from("header", animationBehavior);
  }

  function mobileAnimation() {
    gsap.set(".mobile-nav-list", { autoAlpha: 1 });
    animation.from(".mobile-nav-list >*", animationBehavior);
  }

  gsap.set("header", { autoAlpha: 1 });
  animation.from("header", animationBehavior);

  //   if (window.innerWidth < 800) {
  //     mobileAnimation();
  //   } else {
  //     desktopAnimation();
  //   }

  // nav list
  //   gsap.set(".mobile-nav-list", { autoAlpha: 1 });

  //   animation.from(".logo", { ...animationBehavior, y: 20 });

  animation.from("section", {
    autoAlpha: 1,
  });
  animation.from("section", {
    y: 40,
    opacity: 0,
  });
}

// init();
