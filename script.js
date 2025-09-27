document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', { 
    
    loop: true, 

    spaceBetween: 30, 

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
});

      let menu = document.querySelector("#menu-icon");
      let links = document.querySelector(".items");
      console.log(menu);
      console.log(links);
      
      
      menu.onclick = () => {
        menu.classList.toggle("bg-x");
        links.classList.toggle("open");
      };