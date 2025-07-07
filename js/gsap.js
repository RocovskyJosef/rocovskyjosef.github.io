


document.addEventListener("DOMContentLoaded", (event) => {
    
gsap.registerPlugin(SplitText);

    let textSplit = SplitText.create(".TextSplit", {

        type: "chars"
    
    });

    gsap.from(textSplit.chars, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.05
    });

});