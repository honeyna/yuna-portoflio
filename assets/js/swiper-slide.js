const swiper = new Swiper('.work_container',{	
    direction: "horizontal",
    loop: true,						
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },	
    navigation : {				
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',			
    },
    spaceBetween: 0,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides :true,
    speed: 1500,
    effect:"coverflow",	
    coverflowEffect: {
        rotate: 0,
        stretch: -0,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000,		
        disableOnInteraction : true
    }	
});