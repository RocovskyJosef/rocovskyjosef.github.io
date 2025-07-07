


document.addEventListener("DOMContentLoaded", (event) => {
    
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

    gsap.from("header", {
        y: -100,
        autoAlpha: 0,
        duration: 1
    });

    let textSplit = SplitText.create(".TextSplit", {

        type: "chars, lines",
        autoSplit: true,

    });

    gsap.from(textSplit.chars, {
        yPercent: "random([-30, 30])",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random"
        }
    });


    let whatDoIDoSplit = SplitText.create("#what-do-i-do p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,

        
    });

    gsap.from(whatDoIDoSplit.words, {
        scrollTrigger: {
            trigger: "p",
            start: "0% 70%",
            end: "300% 80%",
            toggleActions: "play none reverse none",
            markers: true,
        },
        y: 100,
        autoAlpha: 0,
        stagger: {
            amount: 2,
        },
    });

});