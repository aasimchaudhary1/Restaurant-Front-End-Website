
  // NAVBAR FIXED ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("active");

  }

  else{

    navbar.classList.remove("active");

  }

});
  // RISE-UP ANIMATION
  
  const animatedElements = document.querySelectorAll(
    ".about-images img, .about-content, .counter-box"
  );
  
  function animateOnScroll(){
  
    animatedElements.forEach((element) => {
  
      const elementTop = element.getBoundingClientRect().top;
  
      // SHOW ANIMATION
  
      if(elementTop < window.innerHeight - 100){
  
        element.classList.add("show");
  
      }
  
      // RESET ANIMATION
  
      else{
  
        element.classList.remove("show");
  
      }
  
    });
  
  }
  
  window.addEventListener("scroll", animateOnScroll);
  
  animateOnScroll();
  
  
  
  
  
  
  // COUNTER ANIMATION
  
  const counters = document.querySelectorAll(".counter");
  
  let counterStarted = false;
  
  function runCounter(){
  
    counters.forEach((counter) => {
  
      counter.innerText = "0";
  
      const target = +counter.getAttribute("data-target");
  
      let current = 0;
  
      const increment = target / 200;
  
      function updateCounter(){
  
        current += increment;
  
        if(current < target){
  
          counter.innerText =
          Math.ceil(current).toLocaleString();
  
          requestAnimationFrame(updateCounter);
  
        }
  
        else{
  
          counter.innerText =
          target.toLocaleString();
  
        }
  
      }
  
      updateCounter();
  
    });
  
  }
  
  
  
  
  
  
  // START COUNTER WHEN SECTION COMES INTO VIEW
  
  window.addEventListener("scroll", () => {
  
    const counterSection =
    document.querySelector(".counter-section");
  
    const sectionTop =
    counterSection.getBoundingClientRect().top;
  
    // START COUNTER
  
    if(sectionTop < window.innerHeight - 100
    && !counterStarted){
  
      runCounter();
  
      counterStarted = true;
  
    }
  
    // RESET COUNTER WHEN LEAVING SECTION
  
    if(sectionTop > window.innerHeight){
  
      counterStarted = false;
  
    }
  
  });
  
  /* ====================================
   ABOUT LINK CLICK EFFECT
==================================== */
/* ====================================
   ABOUT LINK CLICK EFFECT
==================================== */

const aboutLinks =
document.querySelectorAll('a[href="#about"]');

aboutLinks.forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const aboutSection =
        document.querySelector("#about");

        /* REMOVE SHOW */

        animatedElements.forEach((element)=>{

            element.classList.remove("show");

            /* FORCE RESET */

            void element.offsetWidth;
        });

        /* RESET COUNTERS */

        counterStarted = false;

        counters.forEach((counter)=>{

            counter.innerText = "0";
        });

        /* SMOOTH SCROLL */

        aboutSection.scrollIntoView({

            behavior:"smooth"
        });

        /* WAIT FOR SCROLL FINISH */

        setTimeout(()=>{

            /* RESTART ABOUT ANIMATION */

            animatedElements.forEach((element)=>{

                element.classList.add("show");
            });

            /* START COUNTER */

            runCounter();

            counterStarted = true;

        },1200);

    });

});
  
  
  
  
 

// SERVICES SCROLL ANIMATION

window.addEventListener("DOMContentLoaded", () => {

    const animateItems = document.querySelectorAll(
        ".service-title, .service-box"
    );

    function scrollAnimation(){

        animateItems.forEach((item)=>{

            const itemTop =
            item.getBoundingClientRect().top;

            if(itemTop < window.innerHeight - 100){

                item.classList.add("show");

            }else{

                item.classList.remove("show");
            }

        });

    }

    window.addEventListener("scroll", scrollAnimation);

    scrollAnimation();

});

const track = document.querySelector(".testimonial-track");

const cards = document.querySelectorAll(".testimonial-card");

const dotsContainer =
document.querySelector(".testimonial-dots");

let index = 0;

/* CARDS PER VIEW */

function getCardsPerView(){

    if(window.innerWidth <= 700){

        return 1;
    }

    else if(window.innerWidth <= 991){

        return 2;
    }

    else{

        return 3;
    }
}

/* CREATE DOTS */

function createDots(){

    dotsContainer.innerHTML = "";

    const cardsPerView = getCardsPerView();

    /* IMPORTANT */

    const totalSlides =
    cards.length - cardsPerView + 1;

    for(let i = 0; i < totalSlides; i++){

        const dot =
        document.createElement("button");

        dot.classList.add("dot");

        if(i === index){

            dot.classList.add("active");
        }

        dot.addEventListener("click",()=>{

            index = i;

            updateSlider();
        });

        dotsContainer.appendChild(dot);
    }
}

/* UPDATE SLIDER */

function updateSlider(){

    const cardWidth =
    cards[0].offsetWidth + 30;

    track.style.transform =
    `translateX(-${index * cardWidth}px)`;

    /* ACTIVE DOT */

    const dots =
    document.querySelectorAll(".dot");

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    if(dots[index]){

        dots[index].classList.add("active");
    }
}

/* RESIZE */

function handleResize(){

    index = 0;

    createDots();

    updateSlider();
}

window.addEventListener("resize",handleResize);

/* START */

createDots();

updateSlider();
const tabBtns = document.querySelectorAll(".tab-btn");

const menuItems = document.querySelectorAll(".menu-item");

tabBtns.forEach((button)=>{

    button.addEventListener("click", ()=>{

        // REMOVE ACTIVE
        tabBtns.forEach((btn)=>{
            btn.classList.remove("active");
        });

        // ADD ACTIVE
        button.classList.add("active");

        // CATEGORY
        const category = button.dataset.category;

        // SHOW/HIDE ITEMS
        menuItems.forEach((item)=>{

            if(item.classList.contains(category)){

                item.style.display = "block";

            }

            else{

                item.style.display = "none";

            }

        });

    });

});
document.querySelectorAll(".menu-item").forEach((item)=>{

    if(!item.classList.contains("breakfast")){

        item.style.display = "none";

    }

});