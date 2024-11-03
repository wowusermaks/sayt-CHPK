
// Placeholder JavaScript for handling add-to-cart functionality

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Товар додано до кошика!');
        });
    });
});
