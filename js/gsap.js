


document.addEventListener("DOMContentLoaded", (event) => {
    
gsap.registerPlugin(SplitText);

    gsap.from("header", {
        y: -100,
        autoAlpha: 0,
        duration: 1
    });

    let textSplit = SplitText.create(".TextSplit", {

        type: "chars, words, lines",
        
    
    });

    gsap.from(textSplit.chars, {
        yPercent: "random([-30, 30])",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random"
        }
    });

});