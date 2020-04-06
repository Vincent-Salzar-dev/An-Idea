window.addEventListener("load", () => {
    var min900 = window.matchMedia("(min-width: 900px)")
    if (min900.matches) {
        var tl = gsap.timeline({
            repeat: 0,
            delay: 0,
        });
        tl.fromTo(".greeting h1", {
            y: -40,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
        tl.fromTo(".greeting h2", {
            y: 10,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
        }, "-=.5");
        tl.from("#box", {
            x: -50,
            opacity: 0,
            stagger: .2,
            delay: .3
        }, "<");
        tl.fromTo(".gmail", {
            x: -300,
            opacity: 0
        }, {
            opacity: 1,
            x: -20,
            y: 2,
            ease: "power3.out",
            duration: 2,
            rotation: 1080,
        })
        tl.fromTo(".twitter", {
            x: -300,
            opacity: 0,
        }, {
            x: -40,
            y: 3,
            opacity: 1,
            rotation: 1080,
            duration: 2,
            ease: "power3.out"
        }, "-=1.5")
        tl.fromTo(".linkedin", {
            opacity: 0,
            x: -300,
        }, {
            opacity: 1,
            x: -26,
            y: 2,
            ease: "power3.out",
            rotation: 1080,
            duration: 2
        }, "-=1.5");
        tl.fromTo(".git", {
            opacity: 0,
            x: -300,
            duration: 1
        }, {
            opacity: 1,
            x: 0,
            y: -2,
            ease: "power3.out",
            rotation: 1080,
            duration: 2
        }, "-=1.5");


        var imgtl = gsap.timeline({
            delay: 10,
            yoyo: true,
        });
        imgtl.fromTo("#icon-anime", {}, { stagger: 1, })


        var controller = new ScrollMagic.Controller();
        var tl3 = gsap.timeline({
            repeat: 0,
            delay: 0,
        });
        tl3.to("body", { y: 50 })
        tl3.fromTo("#box", { x: 0, y: 0, }, { duration: 1, y: -80, }, "<")
        var scene = new ScrollMagic.Scene({
                triggerElement: "#icon-anime",
                triggerHook: 0,
                duration: "75%"
            })
            .addIndicators({
                colorTrigger: "transparent",
                colorStart: "transparent",
                colorEnd: "transparent",
                indent: 5
            })
            .setTween(tl3)
            .addTo(controller);


        var controller2 = new ScrollMagic.Controller();
        var tl2 = gsap.timeline({
            repeat: 0,
            delay: 0,
        });
        tl2.to("body", { duration: 2, y: 50 })
        tl2.fromTo(".about h2", {
            y: -100
        }, {
            opacity: 0,
            duration: 1.5,
            y: -200
        }, "<")
        tl2.fromTo(".pic", {
            opacity: 0,
            x: 100,
            y: -100
        }, {
            opacity: 1,
            y: -210,
            x: 100,
            duration: 2

        }, '<+.1');
        tl2.fromTo(".pic2", {
            opacity: 0,
            x: 50,
            y: 400

        }, {
            opacity: 1.5,
            duration: 4,
            y: 200
        }, "<+.2")
        tl2.fromTo([".about p", ".about blockquote"], {
            opacity: 0
        }, {
            duration: 2,
            opacity: 1,
            y: -130,
            x: 70
        }, '<')
        var scene = new ScrollMagic.Scene({
                triggerElement: "#trigger",
                triggerHook: 0,
                duration: "100%"
            })
            .addIndicators({
                colorTrigger: "transparent",
                colorStart: "transparent",
                colorEnd: "transparent",
                indent: 5
            })
            .setTween(tl2)
            .addTo(controller2);


        const topIcons = document.querySelectorAll("#icon-anime");
        topIcons.forEach((e, i) => {
            const titl = gsap.timeline();
            titl.to(e, { y: -10 });
            e.addEventListener("mouseover", () => {
                titl.play();
                e.addEventListener("mouseout", () => {
                    itl.reverse();
                });
            });
        });

        // doesn't mesh with paralax
        const boxes = document.querySelectorAll("#box");
        boxes.forEach((e, i) => {
            // const boxtl = gsap.timeline();
            // boxtl.to(e, { duration: 1, y: -10, scale: 1 });
            // e.addEventListener("mouseover", () => {
            //     boxtl.play();
            //     e.addEventListener("mouseout", () => {
            //         boxtl.reverse();
            //     });
            // });
        });
    }
})
