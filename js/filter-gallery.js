$(window).load(function () {

	var button = 1;
	var button_class = "gallery-links-current";
    var btn_class = "gallery-links-currents ";
	var $gal = $('#gal');

	$gal.isotope({ itemSelector: 'img' });


	function check_button() {
		$('.gallery-links').removeClass(button_class);
		if (button == 1) {
			$("#all").addClass(button_class);
			$("#gallery-title").html('All Gallery');
		}
		if (button == 2) {
			$("#cave-tub").addClass(button_class);
			$("#gallery-title").html('Cave Tubing Gallery');
		}
		if (button == 3) {
			$("#cave-expo").addClass(button_class);
			$("#gallery-title").html('Cave Exploring Gallery');
		}
		if (button == 4) {
			$("#kayaking").addClass(button_class);
			$("#gallery-title").html('Kayaking Gallery');
		}
	}


	$("#cave-tub").click(function () {
		$gal.isotope({ 
			filter: '.cave-tub' }); button = 1; check_button(); 
		});
	$("#cave-expo").click(function () { 
		$gal.isotope({ 
			filter: '.cave-expo' }); button = 2; check_button(); 
		});
	$("#kayaking").click(function () { 
		$gal.isotope({ 
			filter: '.kayaking' }); button = 3; check_button(); 
		});


	check_button();


	 // Trigger accordion for display of images

	 function check_cat() {
        if (button == 1) {
            $("#cave-tub2").addClass(btn_class);
        }else{
            $("#cave-tub2").removeClass(btn_class);
        }
        if (button == 2) {
            $("#cave-expo2").addClass(btn_class);
        }else{
            $("#cave-expo2").removeClass(btn_class);
        }
        if (button == 3) {
            $("#kayaking2").addClass(btn_class);
        }else{
            $("#kayaking2").removeClass(btn_class);
        }
        $('.gal2 .btn2').removeClass(btn_class);
    };


    $("#cave-tub2").click(() => {
        if ($(".row1").css('display') == 'none') {
            $(".row1").show("slow");
            $(".row2").hide("slow");
            $(".row3").hide("slow");
            button = 1; check_cat();
        } else {
            $(".row1").hide("slow");
            $("#cave-tub2").removeClass(btn_class)
        }
    });

    $("#cave-expo2").click(() => {
        if ($(".row2").css('display') == 'none') {
            $(".row2").show("slow");
            $(".row1").hide("slow");
            $(".row3").hide("slow");
            button = 2; check_cat();
        } else {
            $(".row2").hide("slow");
            $("#cave-expo2").removeClass(btn_class)
        }
    });

    $("#kayaking2").click(() => {
        if ($(".row3").css('display') == 'none') {
            $(".row3").show("slow");
            $(".row1").hide("slow");
            $(".row2").hide("slow");
            button = 3; check_cat();
        } else {
            $(".row3").hide("slow");
            $("#kayaking2").removeClass(btn_class)

        }
    });

});