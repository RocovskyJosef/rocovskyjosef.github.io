


document.addEventListener("DOMContentLoaded", (event) => {
    
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

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
                scrollTrigger: {
            trigger: "#fastabout",
            start: "top 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            //markers: true,
        },
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
            trigger: "#what-do-i-do",
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
            trigger: "#what-do-i-do",
            start: "center 70%",
            end: "center 20%",
            toggleActions: "play reverse play reverse",
            //markers: true,
        },
        yPercent: "random([-30, 30])",
        autoAlpha: 0,
        stagger: {
            amount: 1,
            from: "random"
        }
    });

    let projectsSplitPn1 = SplitText.create(".project:nth-child(1) p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,
    });
    gsap.from(projectsSplitPn1.words, {
        scrollTrigger: {
            trigger: ".project:nth-child(1)",
            start: "top 70%",
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

    let projectsSplitPn2 = SplitText.create(".project:nth-child(2) p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,
    });
    gsap.from(projectsSplitPn2.words, {
        scrollTrigger: {
            trigger: ".project:nth-child(2)",
            start: "top 70%",
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

    let projectsSplitPn3 = SplitText.create(".project:nth-child(3) p", {
        type: "words, lines",
        autoSplit: true,
        mask: "lines",
        smartSplit: true,
    });
    gsap.from(projectsSplitPn3.words, {
        scrollTrigger: {
            trigger: ".project:nth-child(3)",
            start: "top 70%",
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


    let projectsSplitH2n1 = SplitText.create(".project:nth-child(1) h2", {
        type: "chars, lines",
        autoSplit: true,
        smartSplit: true,
    });
    gsap.from(projectsSplitH2n1.chars, {
        scrollTrigger: {
            trigger: ".project:nth-child(1)",
            start: "top 70%",
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

        let projectsSplitH2n2 = SplitText.create(".project:nth-child(2) h2", {
        type: "chars, lines",
        autoSplit: true,
        smartSplit: true,
    });
    gsap.from(projectsSplitH2n2.chars, {
        scrollTrigger: {
            trigger: ".project:nth-child(2)",
            start: "top 70%",
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

    let projectsSplitH2n3 = SplitText.create(".project:nth-child(3) h2", {
        type: "chars, lines",
        autoSplit: true,
        smartSplit: true,
    });
    gsap.from(projectsSplitH2n3.chars, {
        scrollTrigger: {
            trigger: ".project:nth-child(3)",
            start: "top 70%",
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