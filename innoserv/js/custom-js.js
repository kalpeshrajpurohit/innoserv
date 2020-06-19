 $('.brand-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
        }
      })


$('#click_enquire').click(function(){
    $('#show_contact_form').addClass('active_form')
})

$(".close_btn").click(function(){
    $('#show_contact_form').removeClass('active_form')
})



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

