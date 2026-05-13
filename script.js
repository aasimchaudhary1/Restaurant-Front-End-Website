// =========================
// NAVBAR FIXED ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("active");

    }else{

        navbar.classList.remove("active");
    }

});


// =========================
// ABOUT ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
".about-images img, .about-content, .counter-box"
);

function animateOnScroll(){

    animatedElements.forEach((element)=>{

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < window.innerHeight - 100){

            element.classList.add("show");

        }else{

            element.classList.remove("show");
        }

    });

}

window.addEventListener("scroll",animateOnScroll);

animateOnScroll();


// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function runCounter(){

    counters.forEach((counter)=>{

        counter.innerText = "0";

        const target =
        +counter.getAttribute("data-target");

        let current = 0;

        const increment = target / 200;

        function updateCounter(){

            current += increment;

            if(current < target){

                counter.innerText =
                Math.ceil(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText =
                target.toLocaleString();
            }

        }

        updateCounter();

    });

}


// =========================
// START COUNTER
// =========================

window.addEventListener("scroll",()=>{

    const counterSection =
    document.querySelector(".counter-section");

    if(!counterSection) return;

    const sectionTop =
    counterSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100
    && !counterStarted){

        runCounter();

        counterStarted = true;
    }

    if(sectionTop > window.innerHeight){

        counterStarted = false;
    }

});


// =========================
// ABOUT LINK CLICK EFFECT
// =========================

const aboutLinks =
document.querySelectorAll('a[href="#about"]');

aboutLinks.forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const aboutSection =
        document.querySelector("#about");

        if(!aboutSection) return;

        animatedElements.forEach((element)=>{

            element.classList.remove("show");

            void element.offsetWidth;
        });

        counterStarted = false;

        counters.forEach((counter)=>{

            counter.innerText = "0";
        });

        aboutSection.scrollIntoView({

            behavior:"smooth"
        });

        setTimeout(()=>{

            animatedElements.forEach((element)=>{

                element.classList.add("show");
            });

            runCounter();

            counterStarted = true;

        },1200);

    });

});


// =========================
// SERVICES ANIMATION
// =========================

window.addEventListener("DOMContentLoaded",()=>{

    const animateItems =
    document.querySelectorAll(
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

    window.addEventListener("scroll",scrollAnimation);

    scrollAnimation();

});


// =========================
// TESTIMONIAL SLIDER
// =========================

const track =
document.querySelector(".testimonial-track");

const cards =
document.querySelectorAll(".testimonial-card");

const dotsContainer =
document.querySelector(".testimonial-dots");

let index = 0;

if(track && cards.length > 0 && dotsContainer){

    function getCardsPerView(){

        if(window.innerWidth <= 700){

            return 1;

        }else if(window.innerWidth <= 991){

            return 2;

        }else{

            return 3;
        }

    }

    function createDots(){

        dotsContainer.innerHTML = "";

        const cardsPerView =
        getCardsPerView();

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

    function updateSlider(){

        const cardWidth =
        cards[0].offsetWidth + 30;

        track.style.transform =
        `translateX(-${index * cardWidth}px)`;

        const dots =
        document.querySelectorAll(".dot");

        dots.forEach((dot)=>{

            dot.classList.remove("active");
        });

        if(dots[index]){

            dots[index].classList.add("active");
        }

    }

    function handleResize(){

        index = 0;

        createDots();

        updateSlider();
    }

    window.addEventListener("resize",handleResize);

    createDots();

    updateSlider();

}


// =========================
// MENU FILTER
// =========================

const tabButtons =
document.querySelectorAll(".tab-btn");

const menuItems =
document.querySelectorAll(".menu-item");

function filterMenu(category){

    menuItems.forEach((item)=>{

        if(item.classList.contains(category)){

            item.style.display = "grid";

        }else{

            item.style.display = "none";
        }

    });

}

/* DEFAULT */

filterMenu("breakfast");

/* BUTTON CLICK */

tabButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        tabButtons.forEach((btn)=>{

            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
        button.dataset.category;

        filterMenu(category);

    });

});
/* =========================
   HAMBURGER MENU
========================= */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

const navItems =
document.querySelectorAll(".nav-links a");
if(hamburger && navLinks){

    hamburger.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        hamburger.classList.toggle("open");

    });

}

/* NAV LINK CLICK */

navItems.forEach((item)=>{

    item.addEventListener("click",(e)=>{

        const target =
        item.getAttribute("href");

        /* INTERNAL SECTION */

        if(target.startsWith("#")){

            e.preventDefault();

            const targetSection =
            document.querySelector(target);

            /* CLOSE MENU */

            navLinks.classList.remove("active");

            hamburger.classList.remove("open");

            /* SCROLL */

            setTimeout(()=>{

                if(targetSection){

                    targetSection.scrollIntoView({

                        behavior:"smooth"
                    });

                }

            },300);

        }

        /* EXTERNAL PAGE */

        else{

            navLinks.classList.remove("active");

            hamburger.classList.remove("open");
        }

    });

});

/* =========================
   CART SIDEBAR
========================= */
/* =========================
   CART SIDEBAR
========================= */

const cartIcon =
document.querySelector(".cart-icon");

const cartSidebar =
document.querySelector(".cart-sidebar");

const cartOverlay =
document.querySelector(".cart-overlay");

const closeCart =
document.querySelector(".close-cart");

/* CHECK EXISTS */

if(cartIcon && cartSidebar && cartOverlay && closeCart){

    /* OPEN CART */

    cartIcon.addEventListener("click",()=>{

        cartSidebar.classList.add("active");

        cartOverlay.classList.add("active");

    });

    /* CLOSE CART */

    closeCart.addEventListener("click",()=>{

        cartSidebar.classList.remove("active");

        cartOverlay.classList.remove("active");

    });

    /* CLOSE OVERLAY */

    cartOverlay.addEventListener("click",()=>{

        cartSidebar.classList.remove("active");

        cartOverlay.classList.remove("active");

    });

}

const cartIconCount = document.querySelector(".cart-icon span");
const cartItemsContainer = document.querySelector(".cart-items");

let cart = [];

// ALL ORDER BUTTONS
const orderButtons = document.querySelectorAll(".menu-content button");

orderButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const menuItem = button.closest(".menu-item");

        const itemName =
        menuItem.querySelector(".menu-top h3").innerText;

        const itemPrice =
        menuItem.querySelector(".menu-top span").innerText;

        const itemImg =
        menuItem.querySelector(".menu-img img").src;

        addToCart(itemName, itemPrice, itemImg);
    });

});

// ADD TO CART FUNCTION
function addToCart(name, price, image){

    // CHECK IF ITEM ALREADY EXISTS
    const existingItem = cart.find(item => item.name === name);

    if(existingItem){

        existingItem.quantity += 1;

    }else{

        cart.push({

            name:name,
            price:price,
            image:image,
            quantity:1
        });
    }

    updateCart();
}

// UPDATE CART
function updateCart(){

    // UPDATE COUNT
    let totalCount = 0;

    cart.forEach(item => {

        totalCount += item.quantity;
    });

    cartIconCount.innerText = totalCount;

    // DISPLAY ITEMS
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    if(cart.length === 0){

        cartItemsContainer.innerHTML =
        "<p>Your cart is empty</p>";

        return;
    }

    cart.forEach((item,index) => {
      totalPrice +=
      parseInt(item.price.replace("$","")) * item.quantity;
        cartItemsContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <p>${item.price}</p>

                <span>Qty: ${item.quantity}</span>

            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">
            ✕
            </button>

        </div>

        `;
        document.getElementById("cart-total").innerText =
"$" + totalPrice;
    });

}

// REMOVE ITEM
function removeItem(index){

    cart.splice(index,1);

    updateCart();
}

const checkoutBtn =
document.querySelector(".checkout-btn");

if(checkoutBtn){

    checkoutBtn.addEventListener("click",()=>{

        if(cart.length === 0){

            alert("Cart is empty!");

            return;
        }

        localStorage.setItem(
            "checkoutCart",
            JSON.stringify(cart)
        );

        window.location.href = "checkout.html";

    });

}

if(document.getElementById("bookingForm")){

  const bookingForm =
  document.getElementById("bookingForm");

  const bookingPopup =
  document.getElementById("bookingPopup");

  const closePopup =
  document.getElementById("closePopup");

  bookingForm.addEventListener("submit",(e)=>{

      e.preventDefault();

      bookingPopup.classList.add("active");
  });

  closePopup.addEventListener("click",()=>{

      bookingPopup.classList.remove("active");

      window.location.href = "index.html";
  });

}



const cart1 =JSON.parse(localStorage.getItem("checkoutCart")) || [];

if(document.getElementById("order-summary")){

  const cart1 =
  JSON.parse(localStorage.getItem("checkoutCart")) || [];

  const summary =
  document.getElementById("order-summary");

  const totalPrice =
  document.getElementById("total-price");

  let total = 0;

  cart1.forEach(item=>{

      const itemTotal =
      parseInt(item.price.replace("$",""))
      * item.quantity;

      total += itemTotal;

      summary.innerHTML += `

      <div class="order-item">

          <div>

              <h4>${item.name}</h4>

              <p>Qty: ${item.quantity}</p>

          </div>

          <strong>
              $${itemTotal}
          </strong>

      </div>
      `;
  });

  totalPrice.innerText = "$" + total;

}

if(document.getElementById("checkoutForm")){

  const checkoutForm =
  document.getElementById("checkoutForm");

  const orderPopup =
  document.getElementById("orderPopup");

  const closePopup1 =
  document.getElementById("closePopup");

  checkoutForm.addEventListener("submit",(e)=>{

      e.preventDefault();

      orderPopup.classList.add("active");

  });

  closePopup1.addEventListener("click",()=>{

      orderPopup.classList.remove("active");

      window.location.href = "index.html";
  });

}

if(document.getElementById("contactForm")){

    const contactForm =
    document.getElementById("contactForm");

    const contactPopup =
    document.getElementById("contactPopup");

    const closePopup2 =
    document.getElementById("closePopup");

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        contactPopup.classList.add("active");
    });

    closePopup2.addEventListener("click",()=>{

        contactPopup.classList.remove("active");
    });

}

