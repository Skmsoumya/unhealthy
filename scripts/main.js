function main() {
	stickyNav();

    products.forEach(function(item) {
        var itemHeading = $("<div>").addClass("product-name text-center").html(item.name);
        var itemMore = $("<div>").addClass("show-more").html("<a class='show-link' href='#'><div class='show-more-button'><p class='show-text center-top text-center'>SHOW MORE</p></div></a>");
        var a = $("<div>").addClass("product").append(itemHeading, itemMore).css('background-image', 'url(' + item.img + ')');;
        $("#product").append(a);
    });

    events.forEach(function(event) {
        var ev = $("<a>").addClass("event-link").attr("href", event.link).html("<div class='event-container'><div class='event-name text-center'>"+event.name+"</div><div class='col container-fluid'></div><div class='event-description text-center container-fluid'>"+ event.description +"</div></div>");
        $("#event").append(ev);
    });


	$(".next").click(function( ) {
		$('html, body').animate({
        	scrollTop: $("nav").offset().top
    	}, 800);
	});

    $("#mobile-menu-switch").click(function() {
        $(".mobile-menu").removeClass("hidden");
    });

    $("#close").click(function() {
        $(".mobile-menu").addClass("hidden");
    });

    $(".menu-item").click(function() {
        $(".mobile-menu").addClass("hidden");
    });
}


function stickyNav() {
	var navPos = $('nav').offset().top;
	$(window).scroll(function() {  
    	if ($(window).scrollTop() > navPos) {
        	$('nav').addClass('fix');
    	}
    	else {
        	$('nav').removeClass('fix');
    	}  
	});
}

$(document).ready(main);