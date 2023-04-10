$(document).ready(function(){
    // new Swiper(".mySwiper",{
    //     // slidePerview: 'auto',
    //     // speed: 1500,
    //     loop:true,
    //     // autoplay:{
    //     //     delay: 1500,
    //     //     disableOnInteraction: false,
    //     // }
    // })
    var swiper = new Swiper(".mySwiper", {
        breakpoints :{
            1200:{
                slidePerview: 'auto',
                loop:true,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        }        
      });

      $('.studio').mouseenter(function(){
        $('.box1').addClass('active')
      })
      $('.box1').mouseleave(function(){
        $(this).removeClass('active')
      })
      $('.men').mouseenter(function(){
        $('.box2').addClass('active')
      })
      $('.box2').mouseleave(function(){
        $(this).removeClass('active')
      })
      $('.atelier').mouseenter(function(){
        $('.box3').addClass('active')
      })
      $('.box3').mouseleave(function(){
        $(this).removeClass('active')
      })
      $('.collection').mouseenter(function(){
        $('.box4').addClass('active')
      })
      $('.box4').mouseleave(function(){
        $(this).removeClass('active')
      })

      $('.btn').click(function(){
        $('.sec-2-imgbox').animate({
            bottom: 600
        },function(){
            $('.sec-2-imgbox').css({
                bottom: 0
            }).find('img').first().appendTo('.sec-2-imgbox');
        });
    });

    function time(){
        auto = setInterval(function(){
        $('.btn').trigger('click');
        },3500);
    }
    time();

    $('.btn').hover(function(){
        clearInterval(auto);
    },function(){
        time();
    });

    $('#hamburger').click(function(){
      $(this).toggleClass('active');
      $('#hamburger span').toggleClass('active');
      $('.icon-box').toggleClass('active');
      $('.main-menu').toggleClass('active');
  });

});