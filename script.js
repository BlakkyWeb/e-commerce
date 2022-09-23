const thumb = document.querySelectorAll('[data-thumb]');
const product = document.querySelector('[data-product]');
const price = document.querySelector('[data-price]');
const number = document.querySelector('[data-number]');
const plus = document.querySelector('[data-plus]');
const minus = document.querySelector('[data-minus]');

thumb.forEach(options =>{
    options.addEventListener('click', ()=>{
        document.querySelector('.three .active').classList.remove('active');
        options.classList.add('active');
    })
})
document.querySelector('.thumbOne').addEventListener('click', ()=>{
    product.src = './images/image-product-1.jpg';
})
price.addEventListener('click', ()=>{
    console.log(price.innerText)
})
document.querySelector('.thumbTwo').addEventListener('click', ()=>{
    product.src = './images/image-product-2.jpg';
})
document.querySelector('.thumbThree').addEventListener('click', ()=>{
    product.src = './images/image-product-3.jpg';
})
document.querySelector('.thumbFour').addEventListener('click', ()=>{
    product.src = './images/image-product-4.jpg';
})

plus.addEventListener('click', ()=>{
    price.innerText = Number(price.innerText) + 125
    number.innerText = Number(number.innerText) + 1;
})
minus.addEventListener('click', ()=>{
    if(price.innerText > 0){
        price.innerText = Number(price.innerText) - 125;
        number.innerText = Number(number.innerText) - 1;
    }
})



const images = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];
const previous = document.querySelector('[data-previous]');
const next = document.querySelector('[data-next]');

let i = 0;
product.src = images[i];
next.addEventListener('click', ()=>{
    i++;
    if (i > images.length - 1){
        i = 0;
    }
    product.src = images[i];
})
previous.addEventListener('click', ()=>{
    i--;
    if (i < 0){
        i = images.length - 1;
    }
    product.src = images[i];
})

const menu = document.querySelector('[data-menu]');
const close = document.querySelector('[data-close]');
const nav = document.querySelector('[data-nav]');


menu.addEventListener('click', ()=>{
    nav.classList.add('show');
    menu.classList.add('lal');
    close.classList.add('reveal');
})
close.addEventListener('click', ()=>{
    nav.classList.remove('show');
    menu.classList.remove('lal');
    close.classList.remove('reveal');
})
