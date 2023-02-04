import data from './data.json' assert { type: 'json' };

const cartIcon = document.querySelector('.cart-icon');
const cartModalContainer = document.querySelector('.modal-container-cart');
const cartModal = document.querySelector('.cart-modal');
const menuIcon = document.querySelector('.mobile-nav-toggle');
const menuModalContainer = document.querySelector('.modal-container-menu');
const overlay = document.querySelector('.overlay');
const menuModal = document.querySelector('.menu-modal');
const navbar = document.querySelector('.primary-nav');
const goBack = document.querySelector('.back');

// Form validation

const form = document.querySelector('.checkout-form');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const address = document.querySelector('#address');
const ZIP = document.querySelector('#ZIP');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const eMoneyRadio = document.querySelector('#e-money');
const cashOnDelieveryRadio = document.querySelector('#cash-on-delievery');
const eMoneyNumber = document.querySelector('#e-money-number');
const eMoneyPin = document.querySelector('#e-money-pin');

// display modal if cart icon is pressed
cartIcon.addEventListener('click', function (e) {
  e.preventDefault();
  menuModalContainer.classList.add('hidden');
  overlay.classList.add('hidden');
  cartModalContainer.style.display = 'block';
});

// remove modal if anything on the page is clicked except the modal
cartModalContainer.addEventListener('click', function (e) {
  e.preventDefault();
  if (cartModal !== e.target.closest('.cart-modal'))
    cartModalContainer.style.display = 'none';
});

// Display menu modal after hamburger click
menuIcon.addEventListener('click', function (e) {
  e.preventDefault();
  menuModalContainer.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// Remove menu modal
if (overlay)
  overlay.addEventListener('click', function (e) {
    e.preventDefault();

    console.log(navbar, e.target.closest('primary-nav'));

    if (menuModal !== e.target.closest('.menu-modal')) {
      menuModalContainer.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    }
  });

// Go back
if (goBack)
  goBack.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(window.history);
    window.history.back();
  });

// Function used to generate product markup for different pages
const generatemarkup = function (id) {
  const product = data.find(d => d.id === id);
  // console.log(product);

  return `  
  <a href="#" class="back">Go Back</a>

  <section class="product">
    <picture class="product--image">
      <source
        media="(min-width: 60em)"
        srcset=${product.image.desktop}
        
      />
      <source
        media="(min-width:40em)"
        srcset=${product.image.tablet}
      />
      <img
        src=${product.image.mobile}
      />
    </picture>
    <div class="product--content">
      <p class="text-orange-dark header-subtitle uppercase overline">
        new product
      </p>
      <h4 class="product--content-title">${product.name}</h4>
      <p class="product--content-text">
      ${product.description}
      </p>
      <h6>$ ${product.price}</h6>
      <div class="product--cart">
        <p class="subtitle">1</p>
        <button class="btn-orange-dark subtitle text-white">
          add to cart
        </button>
      </div>
    </div>
  </section>
  <section class="features">
    <div class="features--content">
      <h3>features</h3>
      <p>
        manual      
      </p>
      <p>
      manual
      </p>
    </div>
    <div class="features--box">
      <h3>in the box</h3>
      <ul>
        <li><span class="text-orange-dark">${product.includes[0]?.quantity}x</span>${product.includes[0]?.item}</li>
        <li>
          <span class="text-orange-dark">${product.includes[1]?.quantity}x </span>${product.includes[1]?.item}
        </li>
        <li>
          <span class="text-orange-dark">${product.includes[2]?.quantity}x </span>${product.includes[2]?.item}
        </li>
        <li><span class="text-orange-dark">${product.includes[3]?.quantity}x </span>${product.includes[3]?.item}</li>
        <li><span class="text-orange-dark">${product.includes[4]?.quantity}x</span>${product.includes[4]?.item}</li>
      </ul>
    </div>
  </section>

  <section class="gallery">
    <div>
      <picture>
        <source
          media="(min-width:  60em)"
          srcset=${product.gallery.first.desktop}
        />
        <source
          media="(min-width: 34em)"
          srcset=${product.gallery.first.tablet}
        />
        <img
          src=${product.gallery.first.mobile}
          alt=""
        />
      </picture>
      <picture>
        <source
          media="(min-width:  60em)"
          srcset=${product.gallery.second.desktop}
        />
        <source
          media="(min-width: 34em)"
          srcset=${product.gallery.second.tablet}
        />
        <img
          src=${product.gallery.second.mobile}
          alt=""
        />
      </picture>
    </div>
    <picture>
      <source
        media="(min-width:  60em)"
        srcset=${product.gallery.third.desktop}
      />
      <source
        media="(min-width: 34em)"
        srcset=${product.gallery.third.tablet}
      />
      <img
        src=${product.gallery.third.mobile}
        alt=""
      />
    </picture>
  </section>

  <section class="other-products">
    <h3>you may also like</h3>
    <div class="other-products-content">
      <div class="other-products-content--box">
        <picture>
          <source
            media="(min-width:60em)"
            srcset=${product.others[0].image.desktop}
          />
          <source
            media="(min-width:40em)"
            srcset=${product.others[0].image.tablet}
          />
          <img
            src=${product.others[0].image.mobile}
            alt=
          />
        </picture>
        <h5>${product.others[0].name}</h5>
        <a href="">
        <button class="btn-orange-dark subtitle text-white">
          See Product
        </button>
        </a >
      </div>
      <div class="other-products-content--box">
        <picture>
          <source
          media="(min-width:  60em)"
          srcset=${product.others[1].image.desktop}
          />
          <source
          media="(min-width: 40em)"
          srcset=${product.others[1].image.tablet}
          />
          <img
            src=${product.others[1].image.mobile}
          />
        </picture>
        <h5>${product.others[1].name}</h5>
        <a href="">
        <button class="btn-orange-dark subtitle text-white">
          See Product
        </button>
        </a>
      </div>
      <div class="other-products-content--box">
        <picture>
          <source
            media="(min-width:  60em)"
            srcset=${product.others[2].image.desktop}
          />
          <source
            media="(min-width: 40em)"
            srcset=${product.others[2].image.tablet}
          />
          <img src=${product.others[2].image.mobile}  />
        </picture>
        <h5>${product.others[2].name}</h5>
        <a href="">        
        <button class="btn-orange-dark subtitle text-white">
          See Product
        </button>
        </a>
      </div>
    </div>
  </section>
  <section class="categories">
    <div class="categories-box">
      <img
        class="categories-box--image"
        src="assets/shared/desktop/image-category-thumbnail-headphones.png"
        alt="mark one headphones"
      />
      <h5 class="categories-box--title">Headphones</h5>
      <span class="categories-box--subtitle subtitle">shop</span>
    </div>
    <div class="categories-box">
      <img
        class="categories-box--image"
        src="assets/shared/desktop/image-category-thumbnail-speakers.png"
        alt="mark one headphones"
      />
      <h5 class="categories-box--title">Speakers</h5>
      <span class="categories-box--subtitle subtitle">shop</span>
    </div>
    <div class="categories-box">
      <img
        class="categories-box--image"
        src="assets/shared/desktop/image-category-thumbnail-earphones.png"
        alt="mark one headphones"
      />
      <h5 class="categories-box--title">Earphones</h5>
      <span class="categories-box--subtitle subtitle">shop</span>
    </div>
  </section>
  <section class="best-gear">
    <picture class="best-gear--image">
      <source
        media="(min-width: 60em)"
        srcset="./assets/shared/desktop/image-best-gear.jpg"
      />
      <source
        media="(min-width:40em)"
        srcset="./assets/shared/tablet/image-best-gear.jpg"
      />
      <img src="./assets/shared/tablet/image-best-gear.jpg" />
    </picture>
    <div>
      <h4 class="best-gear--title">
        Bringing you the <span class="text-orange-dark">best</span> audio
        gear
      </h4>
      <p class="best-gear--text text-black">
        Located at the heart of New York City, Audiophile is the premier
        store for high end headphones, earphones, speakers, and audio
        accessories. We have a large showroom and luxury demonstration rooms
        available for you to browse and experience a wide range of our
        products. Stop by our store to meet some of the fantastic people who
        make Audiophile the best place to buy your portable audio equipment.
      </p>
    </div>
  </section>
  <footer class="footer bg-light-black">
    <div class="logo-list">
      <img
        src="./assets/shared/desktop/logo.svg"
        alt="Audiophile logo"
        class="logo"
      />
      <ul class="text-white footer--list">
        <li class="uppercase text-white">
          <a class="link" href="index.html">Home</a>
        </li>
        <li class="uppercase text-white">
          <a class="link" href="category.html">Headphones</a>
        </li>
        <li class="uppercase text-white">
          <a class="link" href="speakers.html">Speakers</a>
        </li>
        <li class="uppercase text-white">
          <a class="link" href="earphones.html">earphones</a>
        </li>
      </ul>
    </div>

    <p class="text-white footer--text">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our
      demo facility - we’re open 7 days a week.
    </p>

    <div class="footer-end">
      <p class="text-white footer--copyright">
        Copyright 2021. All Rights Reserved
      </p>
      <div class="footer--social">
        <a href="#">
          <svg
            class="footer--social-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              fill="#FFF"
              fill-rule="nonzero"
            /></svg
        ></a>
        <a href="#"
          ><svg
            class="footer--social-icon"
            width="24"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
        </a>
        <a href="#">
          <svg
            class="footer--social-icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              fill="#FFF"
              fill-rule="nonzero"
            /></svg
        ></a>
      </div>
    </div>
  </footer>
  
  `;
};

// const content = document.querySelector('.content');
// content.innerHTML = '';
// const markup = generatemarkup(5);
// content.insertAdjacentHTML('afterbegin', markup);

// Form validation

// const submitBtn = document.querySelector('#submit-btn');
const cashOnDelieveryContainer = document.querySelector(
  '.checkout-form--payment--cash'
);
const inputs = [fullName, email, phoneNumber, address, ZIP, city, country];

if (eMoneyRadio.hasAttribute('checked')) {
  eMoneyRadio.parentElement.classList.add('set-border');
} else {
  cashOnDelieveryRadio.parentElement.classList.add('set-border');
}

eMoneyRadio.addEventListener('click', function () {
  if (eMoneyRadio.checked) {
    eMoneyRadio.parentElement.classList.add('set-border');
    cashOnDelieveryRadio.parentElement.classList.remove('set-border');
    eMoneyNumber.parentElement.style.display = 'flex';
    cashOnDelieveryContainer.style.display = 'none';
    eMoneyPin.parentElement.style.display = 'flex';
  }
});

cashOnDelieveryRadio.addEventListener('click', function () {
  if (cashOnDelieveryRadio.checked) {
    cashOnDelieveryRadio.parentElement.classList.add('set-border');
    eMoneyRadio.parentElement.classList.remove('set-border');
    eMoneyNumber.parentElement.style.display = 'none';
    eMoneyPin.parentElement.style.display = 'none';
    cashOnDelieveryContainer.style.display = 'flex';
  }
});

const showError = function (input) {
  const labelsChildren = input.parentElement.children[0];
  const label = labelsChildren.children[0];
  const small = labelsChildren.children[1];
  small.classList.add('error-label');
  label.classList.add('error-label');
  input.classList.add('error-input');
};
const showSuccess = function (input) {
  const labelsChildren = input.parentElement.children[0];
  const label = labelsChildren.children[0];
  const small = labelsChildren.children[1];
  small.classList.remove('error-label');
  label.classList.remove('error-label');
  input.classList.remove('error-input');
};

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input);
    return false;
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input);
  } else if (input.value.length > max) {
    showError(input);
  } else {
    showSuccess(input);
  }
}

const isLetters = function (input) {
  const letters = /^[A-Za-z]+$/;
  if (/[a-z]/i.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input);
    return false;
  }
};

const checkRequired = function (inputsArr) {
  let isValid = [];
  inputsArr.forEach(input => {
    // const labelsChildren = input.parent  Element.children[0];
    // const small = labelsChildren.children[1];
    if (input.value.trim() === '') {
      showError(input);
      isValid.push(false);
    } else {
      showSuccess(input);
      isValid.push(true);
    }
  });
  return isValid;
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const isEmpty = checkRequired(inputs);
  const emailIsValid = checkEmail(email);
  const nameIsValid = isLetters(fullName);
  const passedAllChecks = [];
  let eMoneyNumberIsValid;
  let eMoneyPinIsValid;
  if (eMoneyNumber) [eMoneyNumberIsValid] = checkRequired([eMoneyNumber]);

  if (eMoneyPin) [eMoneyPinIsValid] = checkRequired([eMoneyPin]);

  isEmpty.forEach(input => {
    passedAllChecks.push(input);
  });
  passedAllChecks.push(eMoneyNumberIsValid);
  passedAllChecks.push(eMoneyPinIsValid);
  passedAllChecks.push(emailIsValid);
  passedAllChecks.push(nameIsValid);

  let formIsValid = true;

  passedAllChecks.forEach(validity => {
    if (!validity) formIsValid = false;
  });
});

//Cart State

// cartState{

// }
