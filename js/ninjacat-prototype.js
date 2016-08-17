$(function() {

        $("body").append('<img src="img/win10_skype_320x320.0.gif" class="ninjacat">')
        $(".ninjacat").hide();
    
        var enabled = false; var i=0;
        $(window).keypress(function( event ) {
             event.preventDefault();
            if ( event.which === 32  ) {
                i++;
                if(i===4){
                    enabled = true;
                }
            }
            if(enabled){
                $('.ninjacat').show();
            }

        });

        var mutex = false;
        $(document).bind('keydown',function(evt) {
            if(evt.keyCode !== 39 && evt.keyCode !==37 && evt.keyCode !==38) return;
                
            if(!mutex){
                mutex = true;
                move();
            }
                
            function move(){
                if(enabled){
                    switch(evt.keyCode) {
                        case 39: // right
                        $( ".ninjacat" ).removeClass('ninjacat-left').animate({
                            left: (parseInt($( ".ninjacat" ).css('left').replace('px','')) +40 ) + 'px'
                        }, 200 , "linear", function() {
                            mutex = false;
                        });
                        break;
                        case 37: // left
                        $( ".ninjacat" ).addClass('ninjacat-left').animate({
                            left: (parseInt($( ".ninjacat" ).css('left').replace('px','')) - 40 ) + 'px'
                        }, 200 , "linear", function() {
                            mutex = false;
                        });
                        break;
                        case 38: // jump
                        $('.ninjacat').animate({ bottom: 305, opacity: '1' }, 200,"linear",function(){
                            $('.ninjacat').animate({ bottom: -79, opacity: '1' }, 1000,"easeOutBounce",function(){
                                mutex = false;
                            })
                        })
                        break;
                    }
                }
            }
        });

    });