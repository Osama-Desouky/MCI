var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  $("ul.nav-tabs a").click(function(e) {
    console.log($(this));
    e.preventDefault();
    $(this).tab('show');
  });
  

  $(".nav-item").on("click", function () {
    $('.nav-item').removeClass('active');

   
  });