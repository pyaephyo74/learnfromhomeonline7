let logo = document.querySelector("#menu");
let navlist = document.querySelector(".lists");
logo.addEventListener("click",function(){
    navlist.classList.toggle("nav-toggle");
    logo.classList.toggle("fa-times");
});
window.addEventListener("scroll",function(){
    navlist.classList.remove("nav-toggle");
    logo.classList.remove("fa-times");
});







// $(document).ready(function () {

//     $('#menu').ckick(function(){
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });
//     $('#login').click(function(){
//         $('.login-form').addClass('popup');
//     });
//     $('.login-form from .fa-times').click(function(){
//         $('.login-form').removeClass('popup');
//     });
//     $(window).on('load scroll',function(){
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         $('.login-form').removeClass('popup');

//         $('section').each(function(){
//             let top = $(window).scrollTop();
//             let height = $(this).height();
//             let id = $(this).attr('id');
//             let offset = $(this).offset().top - 200;

//             if(top > offset && top < offset + height){
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find(`[href="#${id}"]`).addClass('active');
//             }


//         });

//     });
// }); 