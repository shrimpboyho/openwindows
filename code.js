// Set up padding and hide all windows and set up global variables



// Set up click handlers for menu items

$(".menuitem").click(function () {

    $(this).transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    
    $(this).css('transform', '');
});

$("#internet").click(function () {


    $(this).transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    
    $(this).css('transform', '');

    $('#menu').delay(1200).hide('slow');
    $("#getHappy").dialog({

        autoResize: true,
        height: windowHeight,
        width: windowWidth,
        close: function (e) {
            $('#menu').show('slow');
        }

    }).hide();

    $("#getHappy").delay(1900).show('slow');



});

$("#notepadmenubutton").click(function () {


    $(this).transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    
    $(this).css('transform', '');

    $('#menu').delay(1200).hide('slow');
    $("#notepaddiv").dialog({

        autoResize: true,
        height: windowHeight,
        width: windowWidth,
        close: function (e) {
            $('#menu').show('slow');
        }

    }).hide();

    $("#notepaddiv").delay(1900).show('slow');



});

$("#consolemenubutton").click(function () {


    $(this).transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    
    $(this).css('transform', '');

    $('#menu').delay(1200).hide('slow');
    $("#windowsconsole").dialog({

        autoResize: true,
        height: windowHeight,
        width: windowWidth,
        close: function (e) {
            $('#menu').show('slow');
        }

    }).hide();

    $("#windowsconsole").delay(1900).show('slow');



});

$("#settingsbutton").click(function () {


    $(this).transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    
    $(this).css('transform', '');

    $('#menu').delay(1200).hide('slow');
    $("#settings").dialog({

        autoResize: true,
        height: windowHeight,
        width: windowWidth,
        close: function (e) {
            $('#menu').show('slow');

        }

    }).hide();

    $("#settings").delay(1900).show('slow');
    $(".basic").spectrum();



});

// Set up the on hovers for the menu items

$(".menuitem").hover(

function () {
    $(this).animate({

        opacity: '9',

    });
},

function () {
    $(this).animate({

        opacity: '1',

    });
});

// Logic for getHappy

$("#div-id").hide();

$("#div-id").append("<image src = 'https://lh4.googleusercontent.com/-RvT0R9TXe5U/UM_B6xQh-ZI/AAAAAAAAAFU/mYNoNIhX_2Q/s374/Ttumblr_m2hbwjr1y51qhzdcuo1_40T0.gifg'>Woah!</image> ");

$("#kinch").click(function () {

    if ($("#kinch").is(":checked")) {

        //show the hidden div
        $("#div-id").show("slide");

    } else {


        $("#div-id").hide("slide");
    }
});

$("#stinch").click(function () {

    if ($("#kinch").is(":checked")) {

        $("#div-id").show("slide");

    } else {


        $("#div-id").hide("slide");
    }
});

// Logic for setting menu

$("#personalize").click(function () {

    $("#personalize").addClass("active");
    $("#apps").removeClass("active");
    $("#imageswitch").show();

});

$("#apps").click(function () {

    $("#apps").addClass("active");
    $("#personalize").removeClass("active");
    $("#imageswitch").hide();

});

$("#setimagebutton").click(function () {

    var urlforimage = $("#setbackgroundimage").val();
    $('body').css('background-image', 'url(' + urlforimage + ')');
    $('html').css('background-image', 'url(' + urlforimage + ')');

    $("#settings").transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });

    $("#settings").dialog().delay(1000).fadeOut(function () {
        $(this).dialog("close")
    });

});

$("#setcolorbutton").click(function () {

    
    $('body').css('background-image', 'none');
    $('html').css('background-image', 'none');

    $('body').css('background-color', $(".basic").spectrum("get").toHexString());
    $('html').css('background-color', $(".basic").spectrum("get").toHexString());

    $("#settings").transition({
        duration: 900,
        perspective: '200px',
        rotateY: '360deg'
    });
    $("#settings").css('transform', '');
    $("#settings").dialog().delay(1000).fadeOut(function () {
        $(this).dialog("close")
    });

});

/* SET UP BASH LOGIC*/

// Set up command line width properties

$('#givencommand').css("width", 350);

$('#consoleoutput').css("width", $("#consolebox").width() - $("#currentcommandcursor").width());

// Set up cursor blinking

var fIn = function () {
    $("#currentcommandcursor").fadeIn(500, fOut);
};
var fOut = function () {
    $("#currentcommandcursor").fadeOut(500, fIn);
};
fIn();

// Set up the action of the enter key and capture current command

$(document).keypress(function (e) {
    if (e.which == 13) {
       
            $("#consoleoutput").val($("#consoleoutput").val() + "\n" + "~$" + $("#givencommand").val());
            
  var commandtobegiven = $("#givencommand").val();      
            $("#givencommand").val("");
         $('#consoleoutput').scrollTop($('#consoleoutput')[0].scrollHeight);
        if(commandtobegiven != ""){
        
            bunzKernel(commandtobegiven);
        
        }
    }
});

//Set up kernel function

function bunzKernel(kernelcmd){
    
    if(kernelcmd == "help"){
        $("#consoleoutput").val($("#consoleoutput").val() + "\n\n==============================================================\nHello, I'm the Open8 Bash! Pipe. Here are a list of commands you can run:\n\n-> flush\n-> redubs\n-> launch");
    }
    
}

