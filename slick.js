
// Slick 
$(document).ready(function(){
    $('.cards').slick({
       slidesToShow: 3,
       slidesToScroll:2,
       arrows: false,
       dots: true,
       responsive: [
         {
      breakpoint: 1024,
      settings: {
        row: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        row: 1,
        dots: true
      }
    },
    {
    //   breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

// Navbar 
function block (){
	const add = document.querySelector(".tab-close")
	add.style.display = "block"
}
function none (){
	const close = document.querySelector(".tab-close")
	close.style.display = "none"
}
