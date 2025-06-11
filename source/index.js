
const swiper = new Swiper('.trainers__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop:true,
  slidesPerView:3,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const this_swiper = document.querySelector('.trainers__swiper').swiper;

function Next(){
    
    if (this_swiper.activeIndex == 4){
      this_swiper.slideTo(0);
    }
    else{
      this_swiper.slideNext();
    }
    console.log(this_swiper.activeIndex);
}

console.log(this_swiper.scrollbar);





