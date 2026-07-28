$(document).ready(function() {
$(document).mouseup(function (e){ 
	var container = $("#floatFixed");

	if (!container.is(e.target) && container.has(e.target).length === 0){
		container.removeClass('active');
	}
}); 	

$('a.close-sticky-banner').click(function(e){
	e.preventDefault();
	$(this).parents('.sticker-head').hide();
});
	
	$(window).scroll(function(){
  var sticky = $('.head-cont'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

 $('.fancybox').fancybox();
 
  $(document).scroll(function() {
    "use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }
    if (y > 500) {
        $('.floating_wrap').addClass('visible');
        $('.floatbutton').addClass('visible');
    } else {
        $('.floating_wrap').removeClass('visible');
        $('.floatbutton').removeClass('visible');
    }
});


    $(".clickbutton").click(function() {
        $('.floatbutton').toggleClass("active");
        $('.crossplus').toggleClass("rotate");
    });
    $(".topformswitch").click(function() {
        $('.topformwrap').toggleClass("active");
    });


var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
    aggressive: true,
});




$(".footer-vld-frm").validate();
$(".validate-banner-frm").validate();
$(".banner-frm-right").validate();


 

     $('.content-testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
     
   responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
$('.various').click(function() {
    var leadprice = $(this).attr('name');
    var pkgname_action = $(this).attr('data-lead');
    var package_name = $(this).attr('data-package');
    var cutprice_action = $(this).attr('data-cutprice');
    $("input[name=package_price]").val(leadprice);
    $("input[name=package_name]").val(package_name);
    $("#packValue").text(leadprice)

    $(".lead_action").val(pkgname_action);
    var gettitle = $(this).attr('title');
    $('#popupform .popup-content h2').html(gettitle);
    $(".popupform .leadprice").val(leadprice)
    $('#popupform .popup-content .cutprice_pp').html(cutprice_action);


    });

     
    
    var str = location.href.toLowerCase();
    $(".navbar-nav li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.active").removeClass("active");
            $(this).parent().addClass("active");
        }
    });  

$('.customerslider').owlCarousel({
    loop:true,
    margin:30, 
    dots:true,
	nav:false,
    responsiveClass:true,
     
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

    $('[data-fancybox]').fancybox();
    $(".validate-popupform").validate();
    $('.contact-form').validate();
    $(".contactusform").validate();
    $(".validate-footer").validate();
    $(".contactusform-footer").validate();
 
 
});

function validate(evt) {
 var theEvent = evt || window.event;

 // Handle paste
 if (theEvent.type === 'paste') {
  key = event.clipboardData.getData('text/plain');
 } else {
  // Handle key press
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
 }
 var regex = /[0-9]|\./;
 if (!regex.test(key)) {
  theEvent.returnValue = false;
  if (theEvent.preventDefault) theEvent.preventDefault();
 }
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };










