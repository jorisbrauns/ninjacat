# ninjacat

Type in 'ninjacat' to trigger the easter ninjacat egg! You can play using the game keys.

Do would like to have this friend on your website as well? All code is here on github!

Demo? Try http://www.owic.be

Integrate this on your website:

1. Add the img folder to your website root directory!
2. Include the css style:
 <style>
        .ninjacat {
            position: absolute;
            bottom: -79px;
            left: 0;
            display: none;
        }

        .ninjacat-left {
            -moz-transform: scaleX(-1);
            -o-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
            filter: FlipH;
            -ms-filter: "FlipH";
        }
    </style>
    
3. Add the javascript libs and your good to go!

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
    <script src="js/ninjacat-prototype.js"></script>

