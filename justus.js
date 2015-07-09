 $(".button-collapse").sideNav();

 $(function(){

        $("#typed").typed({
            strings: [ "It's coming soon!"],
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
