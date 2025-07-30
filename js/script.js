let currentSplit = null;
let animating = false; 

function menuOpen() {
  if (animating) return; 

  animating = true;

  const menu = document.querySelector("#mobile-menu");
  const isOpening = !menu.classList.contains("show");

  if (currentSplit) {
    currentSplit.revert();
    currentSplit = null;
  }

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

    currentSplit = SplitText.create("#mobile-menu.show a", {
      type: "chars, lines",
      autoSplit: true,
      mask: "lines",
      smartSplit: true,
    });

    gsap.from(currentSplit.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: { amount: 1 },
      onComplete: () => {
        animating = false;
      }
    });

  } else {
    const state = Flip.getState(menu);

    currentSplit = SplitText.create("#mobile-menu a", {
      type: "chars, lines",
      autoSplit: true,
      mask: "lines",
      smartSplit: true,
    });

    gsap.to(currentSplit.chars, {
      y: -100,
      autoAlpha: 0,
      stagger: { amount: 1 },
      duration: 1,
    });

    gsap.delayedCall(1, () => {
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
        onComplete: () => {
          if (currentSplit) {
            currentSplit.revert();
            currentSplit = null;
          }
          animating = false;
        }
      });
    });
  }
}

function scrollSection(id) {
  if (animating) return;

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");

  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

