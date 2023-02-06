import data from './data.json' assert { type: 'json' };

const cartIcon = document.querySelector('.cart-icon');
const cartModalContainer = document.querySelector('.modal-container-cart');
const cartModal = document.querySelector('.cart-modal');
const menuIcon = document.querySelector('.mobile-nav-toggle');
const menuModalContainer = document.querySelector('.modal-container-menu');
const overlay = document.querySelector('.overlay');
const overlayCheckout = document.querySelector('.overlay-checkout');
const menuModal = document.querySelector('.menu-modal');
const navbar = document.querySelector('.primary-nav');
const goBack = document.querySelector('.back');
const checkoutModalContainer = document.querySelector(
  '.modal-container-checkout'
);

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

const backHomeBtn = document.querySelector('.btn-back-home');

const cashOnDelieveryContainer = document.querySelector(
  '.checkout-form--payment--cash'
);
const inputs = [fullName, email, phoneNumber, address, ZIP, city, country];

if (eMoneyRadio)
  if (eMoneyRadio.hasAttribute('checked')) {
    eMoneyRadio.parentElement.classList.add('set-border');
  } else {
    cashOnDelieveryRadio.parentElement.classList.add('set-border');
  }

if (eMoneyRadio)
  eMoneyRadio.addEventListener('click', function () {
    if (eMoneyRadio.checked) {
      eMoneyRadio.parentElement.classList.add('set-border');
      cashOnDelieveryRadio.parentElement.classList.remove('set-border');
      eMoneyNumber.parentElement.style.display = 'flex';
      cashOnDelieveryContainer.style.display = 'none';
      eMoneyPin.parentElement.style.display = 'flex';
      eMoneyPin.style.display = 'block';
      eMoneyNumber.style.display = 'block';
    }
  });

if (cashOnDelieveryRadio)
  cashOnDelieveryRadio.addEventListener('click', function () {
    if (cashOnDelieveryRadio.checked) {
      cashOnDelieveryRadio.parentElement.classList.add('set-border');
      eMoneyRadio.parentElement.classList.remove('set-border');
      eMoneyNumber.parentElement.style.display = 'none';
      eMoneyNumber.style.display = 'none';
      eMoneyPin.parentElement.style.display = 'none';
      eMoneyPin.style.display = 'none';
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
if (form)
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const isEmpty = checkRequired(inputs);
    const emailIsValid = checkEmail(email);
    const nameIsValid = isLetters(fullName);
    const passedAllChecks = [];
    let eMoneyNumberIsValid = true;
    let eMoneyPinIsValid = true;
    if (eMoneyNumber.style.display !== 'none')
      [eMoneyNumberIsValid] = checkRequired([eMoneyNumber]);

    if (eMoneyPin.style.display !== 'none')
      [eMoneyPinIsValid] = checkRequired([eMoneyPin]);

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

    if (formIsValid) {
      overlayCheckout.classList.remove('hidden');
      checkoutModalContainer.classList.remove('hidden');
    }
  });

if (backHomeBtn)
  backHomeBtn.addEventListener('click', function () {
    overlayCheckout.classList.add('hidden');
    checkoutModalContainer.classList.add('hidden');
  });

//Add to Cart functionality
const addToCartBtn = document.querySelector('#add-to-cart');

// localStorage.clear();
// data to persist through other files
const localStorageItems = [
  ...new Map(
    JSON.parse(localStorage.getItem('cartItem'))?.map(item => [
      item['id'],
      item,
    ])
  ).values(),
];

const cartItemsArray =
  localStorage.getItem('cartItem') !== null ? localStorageItems : [];

function UpdateLocalStorage() {
  localStorage.setItem('cartItem', JSON.stringify(cartItemsArray));
}

function renderCartMarkup() {
  const footerText = document.querySelector('.cart-modal-footer-text--title');
  const checkoutBtn = document.querySelector('#checkout-btn');
  const totalNumberOfItemsElement = document.querySelector('#number-of-items');
  const cartItems = document.querySelector('.cart-modal--items');
  const totalPriceElement = document.querySelector('#total-price');

  if (cartItemsArray.length > 0) {
    const markup = cartItemsArray
      .map(
        item => `
  <div class="cart-modal--items-item">
  <img
    src=${item.cartImage}
    alt=""
  />
  <div class="cart-modal--items-item--text">
    <p>${item.cartItemName}</p>
    <span id='cart-price'>$ ${item.price}</span>
  </div>
  <div  class="cart-modal--items-item--number"><p id='cart-modal-minus'>-</p> <p id='cart-modal-quantity'>${item.quantity}</p> <p id='cart-modal-plus'>+</p></div>
</div>
  `
      )
      .join('');

    footerText.classList.remove('hidden');
    checkoutBtn.classList.remove('hidden');
    cartItems.insertAdjacentHTML('beforeend', markup);

    totalNumberOfItemsElement.innerText = cartItemsArray.length;

    const totalPrice = cartItemsArray.reduce(
      (acc, item) => acc + +item.price * +item.quantity,
      0
    );

    totalPriceElement.innerText = '$ ' + totalPrice;
  } else {
    cartItems.innerHTML = '';
    totalNumberOfItemsElement.innerText = 0;

    footerText.classList.add('hidden');
    checkoutBtn.classList.add('hidden');
    totalPriceElement.innerText = '';
  }
}

window.addEventListener('load', function () {
  renderCartMarkup();
});

function checkDuplicate(cartItems, cartItem) {
  let isUnique = true;

  cartItems.forEach(item => {
    if (item.children[1].children[0].innerText === cartItem.cartItemName)
      isUnique = false;
  });
  return isUnique;
}

if (addToCartBtn)
  addToCartBtn.addEventListener('click', function (e) {
    const cartItemID = +addToCartBtn.dataset.id;
    const cartQuantity = document.querySelector('#cart-quantity').innerText;
    const cartItems = Array.from(
      document.querySelectorAll('.cart-modal--items-item')
    );

    const cartItem = data.find(d => d.id === cartItemID);

    // TO DO: prevent adding duplicates
    const isUnique = checkDuplicate(cartItems, cartItem);

    if (isUnique) {
      const markup = `
    <div class="cart-modal--items-item">
    <img
      src=${cartItem.cartImage}
      alt=""
    />
    <div class="cart-modal--items-item--text">
      <p>${cartItem.cartItemName}</p>
      <span id='cart-price'>$ ${cartItem.price}</span>
    </div>
    <div  class="cart-modal--items-item--number"><p id='cart-modal-minus'>-</p> <p id='cart-modal-quantity'>${cartQuantity}</p> <p id='cart-modal-plus'>+</p></div>

  </div>
    `;
      cartItem.quantity = cartQuantity;
      cartItemsArray.push(cartItem);
      UpdateLocalStorage();
      updateCartItems(markup, cartQuantity);
      IncreaseDecreaseCartItems();
    } else {
      // check if the quantity changed
      cartItem.quantity = cartQuantity;
      UpdateLocalStorage();
      cartItems.forEach(item => {
        if (item.children[2].children[1].innerText !== cartItem.quantity)
          item.children[2].children[1].innerText = cartQuantity;
        updatetotalPrice();
      });
    }
  });

const updateCartItems = function (markup, quantity) {
  const totalNumberOfItemsElement = document.querySelector('#number-of-items');
  let totalNumberOfItems = +totalNumberOfItemsElement.innerText;
  const totalPriceElement = document.querySelector('#total-price');
  const footerText = document.querySelector('.cart-modal-footer-text--title');
  const checkoutBtn = document.querySelector('#checkout-btn');
  const cartItems = document.querySelector('.cart-modal--items');

  footerText.classList.remove('hidden');
  checkoutBtn.classList.remove('hidden');
  cartItems.insertAdjacentHTML('beforeend', markup);

  totalNumberOfItemsElement.innerText = totalNumberOfItems + 1;
  const cartItemPrice = Array.from(document.querySelectorAll('#cart-price'));

  const totalPrice = cartItemPrice.reduce(
    (acc, curr) => acc + +curr.innerText.slice(1) * +quantity,
    0
  );
  totalPriceElement.innerText = '$ ' + totalPrice;
};

// Increasing or decreasing cart items

function removeItem(item) {
  // const totalNumberOfItemsElement = document.querySelector('#number-of-items');
  // const itemName = item.closest('.cart-modal--items-item').children[1]
  //   .children[0].innerHTML;
  // console.log(cartItemsArray);
  // cartItemsArray.forEach((cartItem, i) => {
  //   if (cartItem.cartItemName === itemName) {
  //     cartItemsArray.splice(i, 1);
  //   }
  //   console.log(cartItemsArray);
  //   if (cartItemsArray.length != 0) {
  //     item.closest('.cart-modal--items-item').innerHTML = '';
  //     cartModalContainer.style.display = 'block';
  //     totalNumberOfItemsElement.innerText =
  //       +totalNumberOfItemsElement.innerText - 1;
  //     updatetotalPrice();
  //     UpdateLocalStorage();
  //   } else {
  //     renderCartMarkup();
  //   }
  // });
}

function IncreaseDecreaseCartItems() {
  const cartQuantity = document.querySelector('#cart-quantity');
  const cartQuantityAfter = cartQuantity?.nextElementSibling;
  const cartQuantityBefore = cartQuantity?.previousElementSibling;
  const cartQuantityModal = document.querySelectorAll('#cart-modal-quantity');

  cartQuantityBefore?.addEventListener('click', () => {
    if (cartQuantity.innerText !== '1') {
      +cartQuantity.innerText--;
    }
  });
  cartQuantityAfter?.addEventListener('click', () => +cartQuantity.innerText++);

  cartQuantityModal.forEach(element => {
    const cartQuantityModalAfter = element.nextElementSibling;
    const cartQuantityModalBefore = element.previousElementSibling;
    cartQuantityModalBefore.addEventListener('click', function (e) {
      e.preventDefault();
      if (element.innerText !== '1') {
        +element.innerText--;
        updatetotalPrice();
      } else {
        removeItem(element);
      }
    });
    cartQuantityModalAfter.addEventListener('click', () => {
      +element.innerText++;
      updatetotalPrice();
    });
  });
}

window.addEventListener('load', IncreaseDecreaseCartItems);

function updatetotalPrice() {
  const totalPriceElement = document.querySelector('#total-price');
  const cartItems = Array.from(
    document.querySelector('.cart-modal--items').children
  );

  for (let i = 0; i < cartItemsArray.length; i++) {
    cartItemsArray[i].quantity = cartItems[i].children[2].children[1].innerText;
  }

  const totalPrice = cartItemsArray.reduce(
    (acc, item) => acc + +item.price * +item.quantity,
    0
  );

  totalPriceElement.innerText = '$ ' + totalPrice;
  UpdateLocalStorage();
}

// Remove all cart items

const remove = document.querySelector('.remove');

remove.addEventListener('click', function (e) {
  cartItemsArray.length = 0;
  UpdateLocalStorage();
  renderCartMarkup();
});

// Render checkout summary

// const checkoutBtn = document.querySelector('#checkout-btn');

window.addEventListener('load', function (e) {
  const checkoutPage = document.querySelector('.checkout-page');
  const summaryItems = document.querySelector('.checkout-summary-items');
  const totalPrice = document.querySelector('#checkout-total-price');
  const VAT = document.querySelector('#checkout-VAT');
  const grandTotal = document.querySelector('#checkout-grand-total');
  if (checkoutPage) {
    const markup = cartItemsArray
      .map(item => {
        return `         
      <div class="checkout-summary-item">
        <div class="checkout-summary-item--content">
          <img
            src=${item.cartImage}
            alt=""
          />
          <div class="checkout-summary-item--content--text">
            <p>${item.cartItemName}</p>
            <span>$ ${item.price}</span>
          </div>
        </div>
        <p class="checkout-summary-item--quantity">x${item.quantity}</p>
      </div>`;
      })
      .join('');
    summaryItems.insertAdjacentHTML('afterbegin', markup);

    const totalSummaryPrice = cartItemsArray.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    totalPrice.innerText = '$ ' + totalSummaryPrice;
    VAT.innerText = '$ ' + Math.round(totalSummaryPrice * 0.2);
    grandTotal.innerText =
      '$ ' + (Math.round(totalSummaryPrice * 0.2) + totalSummaryPrice + 50);
  }
});

const submitBtn = document.getElementById('submit-btn');
if (submitBtn)
  submitBtn.addEventListener('click', function () {
    const checkoutModalItems = document.querySelector(
      '.modal-container-checkout--content-main'
    );
    checkoutModalItems.innerHTML = '';
    const markup = cartItemsArray
      .map(
        (item, i) =>
          `            
  <div class="modal-container-checkout--content-item ${i > 0 ? 'hidden' : ''}">
  <div style="display: flex">
    <img src=${item.cartImage} />
    <div class="modal-container-checkout--content-item--text">
      <p>${item.cartItemName}</p>
      <span>$ ${item.price}</span>
    </div>
  </div>
  <p class="modal-container-checkout--content-item--quantity">x${
    item.quantity
  }</p>
  </div>`
      )
      .join('');

    const finalMarkup =
      markup +
      `<div class="modal-container-checkout--content-main-others"><p id="other-items">and ${
        cartItemsArray.length - 1
      } other item(s)</p></div>`;
    checkoutModalItems.insertAdjacentHTML('afterbegin', finalMarkup);

    // const checkoutModalItem = document.querySelectorAll(
    //   '#modal-container-checkout--content-item'
    // );
    const checkoutModalTotal = document.querySelector('#checkout-modal-total');
    const grandTotal = document.querySelector('#checkout-grand-total');

    checkoutModalTotal.innerText = grandTotal.innerText;
    ExpandShrinkOtherItem(checkoutModalItems);
  });

// Expanding/shrinking checkout modal items

function ExpandShrinkOtherItem(ItemsContainer) {
  const otherItems = document.querySelector('#other-items');

  if (otherItems)
    otherItems.addEventListener('click', function () {
      const items = Array.from(ItemsContainer.children);

      const hiddenItem = items.filter(
        (item, i) => i > 0 && i < items.length - 1
      );
      console.log(hiddenItem);
      if (otherItems.innerText !== 'View less') {
        // Expand
        hiddenItem.forEach(item => {
          item.classList.remove('hidden');
        });
        otherItems.innerText = 'View less';
      } else {
        console.log('dandkaln');
        hiddenItem.forEach(item => {
          console.log(item);
          item.classList.add('hidden');
        });
        otherItems.innerText = `and ${cartItemsArray.length - 1} other item(s)`;
      }
    });
}

// Clear cart after checkout completion

if (backHomeBtn)
  backHomeBtn.addEventListener('click', function (e) {
    cartItemsArray.length = 0;
    UpdateLocalStorage();
  });
