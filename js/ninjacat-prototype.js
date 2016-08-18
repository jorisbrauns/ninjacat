$(function () {

    $("body").append('<img src="images/win10_skype_320x320.0.gif" class="ninjacat">');
    $(".ninjacat").click(function() {
        window.location = 'https://insider.windows.com/';
    }).hide();

    var enabled = false; var i = 0;
    var lastInput = "";
    var mutex = false;
    var codes = [];
    var correctCodes = [78,73,78, 74, 65, 67, 65, 84];
    $(document).bind('keydown', function (evt) {

        if (!enabled) {
            codes.push(evt.keyCode);


            for (var j = 0; j < correctCodes.length; j++) {
                if (codes.length > j) {
                    if (correctCodes[j] !== codes[j]) {
                        codes = [];
                    }
                }

                if (codes.join("") === '7873787465676584') {
                    enabled = true;
                }
            }

            if (enabled) {
                $('.ninjacat').show();
            } else {
                return;
            }
        }

            console.log(evt.keyCode);
            console.log(mutex);

        if (evt.keyCode !== 39 &&
            evt.keyCode !== 65 &&
            evt.keyCode !== 81 &&
            evt.keyCode !== 87 &&
            evt.keyCode !== 68 &&
            evt.keyCode !== 90 ) 
            {
                mutex = false;
                return;
            };

        if (!mutex) {
            mutex = true;
            move();
        }

        function move() {

            if (enabled) {
                switch (evt.keyCode) {
                    case 68: // right
                        $(".ninjacat").removeClass('ninjacat-left').animate({
                            left: (parseInt($(".ninjacat").css('left').replace('px', '')) + 40) + 'px'
                        }, 200, "linear", function () {
                            mutex = false;
                        });
                        break;
                    case 65: // left
                    case 81: // left
                        $(".ninjacat").addClass('ninjacat-left').animate({
                            left: (parseInt($(".ninjacat").css('left').replace('px', '')) - 40) + 'px'
                        }, 200, "linear", function () {
                            mutex = false;
                        });
                        break;
                    case 87: // jump
                    case 90: // jump
                        $('.ninjacat')
                            .animate({ bottom: -$(window).scrollTop() + 160, opacity: '1' },
                                200,
                                "linear",
                                function() {
                                    $('.ninjacat')
                                        .animate({ bottom: -$(window).scrollTop(), opacity: '1' },
                                            1000,
                                            "easeOutBounce",
                                            function() {
                                                mutex = false;
                                            });
                                });
                        break;
                }
            }
        }
    });

    $(window).scroll(function () {
        $(".ninjacat").css('bottom', -$(window).scrollTop() + 'px');
    });

});
