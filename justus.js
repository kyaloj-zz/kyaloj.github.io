 $(".button-collapse").sideNav();

 $(function(){

        $("#typed").typed({
            strings: ["Hello friend.", "It is quite nice of you to pass by today.", "I am still building this house of mine though.", "It's coming soon!"],
            typeSpeed: 40,
            backDelay: 600,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }
