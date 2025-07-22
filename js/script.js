function menuOpen() {
  const menu = document.querySelector("#mobile-menu");
  const isOpening = !menu.classList.contains("show");

  if (isOpening) {
    const state = Flip.getState(menu);

    menu.classList.add("show");

    Flip.from(state, {
      duration: 0.8,
      ease: "power1.inOut",
      absolute: true,
      scale: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.8 }
        ),
    });


    const split = SplitText.create("#mobile-menu.show a", {
      type: "chars, lines",
      autoSplit: true,
      mask: "lines",
      smartSplit: true,
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: { amount: 1 },
    });

  } else {
    // Zavírání
    const split = SplitText.create("#mobile-menu a", {
      type: "chars, lines",
      autoSplit: true,
      mask: "lines",
      smartSplit: true,
    });

    gsap.to(split.chars, {
      y: -100,
      autoAlpha: 0,
      stagger: { amount: 1 },
      duration: 1,
      onComplete: () => {
        const state = Flip.getState(menu);

        menu.classList.remove("show");

        Flip.from(state, {
          duration: 0.6,
          ease: "power1.inOut",
          absolute: true,
          scale: true,
          onLeave: (elements) =>
            gsap.to(elements, {
              opacity: 0,
              scale: 0,
              duration: 0.5,
            }),
        });

      },
    });
  }
}

function scrollSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
