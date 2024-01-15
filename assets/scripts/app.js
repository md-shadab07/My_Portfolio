const Portfolio = function() {
    function makeWords() {
        var words = [{
                text: "Java",
                weight: 10
            }, {
                text: "CSS",
                weight: 8
            }, {
                text: "Javascript",
                weight: 9
            }, {
                text: "DSA",
                weight: 6
            }, {
                text: "Programming",
                weight: 7
            }, {
                text: "React",
                weight: 8
            }, {
                text: "Nodejs",
                weight: 9
            }, {
                text: "Tailwind",
                weight: 6
            }, {
                text: "GitHub",
                weight: 7
            },
            {
                text: "Git",
                weight: 7
            }
        ];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 120 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        // Typed.new("#writing-text", {
        // 	strings: [
        // 		"am a Student.", "Love Coding", "am Learning MERN",
        // 	],
        // 	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        // 	stringsElement: null,
        // 	// typing speed
        // 	typeSpeed: 1,
        // 	contentType: 'text',
        // 	callback: function() {
        // 		$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
        // 	},
        // 	preStringTyped: function() {},
        // 	onStringTyped: function() {}
        // });
        Typed.new("#writing-text", {
            strings: [
                "Web Developer",
                "DSA Lover",
                "Problem Solver",
                "Coder",
                "Learning MERN",
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });
    }


    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();