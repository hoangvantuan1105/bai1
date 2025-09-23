let allSlide = document.querySelectorAll('.heading_page');
let currentSlide = 0;
function next(){
    allSlide[currentSlide].classList.remove('active');
    currentSlide++;
    if(currentSlide > allSlide.length-1){
        currentSlide = 0;
    }
    allSlide[currentSlide].classList.add('active');
}
setInterval(next,5500);



const addCartButtons = document.querySelectorAll('.add_cart');


let cart = JSON.parse(localStorage.getItem('cart')) || [];

addCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productDiv = button.closest('.product_home');
        const name = productDiv.querySelector('.text_product').innerText;
        const priceText = productDiv.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('$', '')) * 1000;  320000 
        const quantity = parseInt(productDiv.querySelector('.quantity').value);
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} x${quantity} đã được thêm vào giỏ hàng!`);
    });
});
