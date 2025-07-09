


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


    let whatDoIDoSplitP = SplitText.create("#what-do-i-do p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,

        
    });

    gsap.from(whatDoIDoSplitP.words, {
        scrollTrigger: {
            trigger: "p",
            start: "center 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            //markers: true,
        },
        y: 100,
        autoAlpha: 0,
        stagger: {
            amount: 2,
        },
    });

    let whatDoIDoSplitH1 = SplitText.create("#what-do-i-do h1", {
        type: "chars, lines",
        autoSplit: true,
    });

    gsap.from(whatDoIDoSplitH1.chars, {
        scrollTrigger: {
            trigger: "#what-do-i-do h1",
            start: "center 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            markers: true,
        },
        yPercent: "random([-30, 30])",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random"
        }
    });

    let projectsSplitP = SplitText.create("#projects p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,
    });
    gsap.from(projectsSplitP.words, {
        scrollTrigger: {
            trigger: "#projects p",
            start: "center 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            //markers: true,
        },
        y: 100,
        autoAlpha: 0,
        stagger: {
            amount: 2,
        },
    });

    let projectsSplitH2 = SplitText.create("#projects h2", {
        type: "chars, lines",
        autoSplit: true,
        smartSplit: true,
    });
    gsap.from(projectsSplitH2.chars, {
        scrollTrigger: {
            trigger: "#projects h2",
            start: "center 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            //markers: true,
        },
        yPercent: "random([-30, 30])",
        autoAlpha: 0,
        stagger: {
            amount: 2,
            from: "random"
        }
    });


});