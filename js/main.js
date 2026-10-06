const btn = document.querySelector('.add-cart-btn');
const productNumber = document.querySelector('.product-plus-minus p');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const basket = document.querySelector('.basket-container');
const cartLogo = document.querySelector('.cart-logo-and-avatar svg');
const bigImages = document.querySelectorAll('.big-product img');
const smallImages = document.querySelectorAll('.small-product img');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeSvg = document.querySelector('.close-svg');
const nextSvg = document.querySelector('.next-svg');
const previousSvg = document.querySelector('.previous-svg');
const modalBigProducts = document.querySelectorAll('.modal-big-product img');
const modalSmallProducts = document.querySelectorAll('.modal-small-product img');
const cartArea = document.querySelector('.cart-logo-and-avatar')
const cartLogoHover = document.querySelector('.cart-logo');
const basketContainer = document.querySelector('.basket-container');
const addCartBtn = document.querySelector('.add-cart-btn');
const addProductContainer = document.querySelector('.add-product-container');
const emptyTxt = document.querySelector('.empty-txt');
const basketSvgNumber = document.querySelector('.basket-svg-number');
const numberOfProduct = document.querySelector('.number-of-product');
const totalPrice = document.querySelector('.total-price');
const singlePrice = document.querySelector('.single-price');
const remove = document.querySelector('.add-product-container svg');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenuBg = document.querySelector('.mobile-menu-bg');
const mobileMenu = document.querySelector('.mobile-menu');
const closeSvgMenu = document.querySelector('.close-svg-menu');
const checkoutBtn = document.querySelector('.checkout-btn');


function totalPrc(){
    const oncePrice = Number(singlePrice.textContent.replace('$', ''));
    const basketSvgNum = Number(basketSvgNumber.textContent);
    const total = oncePrice * basketSvgNum;

    totalPrice.textContent = `$${total.toFixed(2)}`;
}

function showImage(index) {
    currentIndex = index;

    // عکس‌های بزرگ اصلی
    bigImages.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // thumbnail های اصلی
    smallImages.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = '25%';
        } else {
            image.style.opacity = '100%';
        }
    });

    // عکس‌های بزرگ داخل modal
    modalBigProducts.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    // thumbnail های داخل modal
    modalSmallProducts.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = '25%';
        } else {
            image.style.opacity = '100%';
        }
    });
}

let count = 0;
btn.addEventListener('click', ()=>{
    count++;
    if(count >= 10){
        count = 10
    }
    productNumber.textContent = count;
    numberOfProduct.textContent = `x ${count}`;
    basketSvgNumber.textContent = count;
    basketContainer.style.height = 'fit-content';
    totalPrc();
});

plus.addEventListener('click', ()=>{
    addProductContainer.style.display = 'block';
    emptyTxt.style.display = 'none';
    basketSvgNumber.style.display = 'flex';
    count++;
    if(count >= 10){
        count = 10
    }
    productNumber.textContent = count;
    numberOfProduct.textContent = `x ${count}`;
    basketSvgNumber.textContent = count;
    basketContainer.style.height = 'fit-content';
    totalPrc();
});

minus.addEventListener('click', ()=>{
    count--;
    if(count < 0){
        count = 0
    }
    productNumber.textContent = count;
    numberOfProduct.textContent = `x ${count}`;
    basketSvgNumber.textContent = count;
    if(count === 0){
        basketSvgNumber.style.display = 'none';
        addProductContainer.style.display = 'none';
        emptyTxt.style.display = 'flex';
        basketContainer.style.height = '280px';
    }
    totalPrc();
});
remove.addEventListener('click', ()=>{
    location.reload();
})

smallImages[0].style.opacity = '25%';

smallImages.forEach((smallImage, index)=>{
    smallImage.addEventListener('click', ()=>{
        showImage(index);
    })
});

bigImages.forEach((bigImage)=>{
    bigImage.addEventListener('click', ()=>{
        overlay.classList.add('overlay2');
        modal.classList.add('modal2');
    })
});

modalSmallProducts[0].style.opacity = '25%';

modalSmallProducts.forEach((smallImage, index)=>{
    smallImage.addEventListener('click', ()=>{
        showImage(index);
    })
});

let currentIndex = 0;
nextSvg.addEventListener('click', ()=>{
    
    currentIndex++;

    if(currentIndex >= modalBigProducts.length){
        currentIndex = 0;
    }

    showImage(currentIndex)
});

previousSvg.addEventListener('click', ()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = 3;
    }

    showImage(currentIndex)
});

closeSvg.addEventListener('click', ()=>{
    overlay.classList.remove('overlay2');
    modal.classList.remove('modal2')
});

cartLogoHover.addEventListener('mouseenter', ()=>{
    basketContainer.classList.add('show')
});

cartArea.addEventListener('mouseleave', ()=>{
    basketContainer.classList.remove('show')
});

addCartBtn.addEventListener('click', ()=>{
    addProductContainer.style.display = 'block';
    emptyTxt.style.display = 'none';
    basketSvgNumber.style.display = 'flex';
});

closeSvgMenu.addEventListener('click', ()=>{
    mobileMenuBg.classList.remove('active')
    mobileMenu.classList.remove('active');
});

iconMenu.addEventListener('click', ()=>{
    mobileMenuBg.classList.add('active');
    mobileMenu.classList.add('active');
});

checkoutBtn.addEventListener('click', ()=>{
    location.reload()
})