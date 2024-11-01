
document.addEventListener('DOMContentLoaded', () => {
    // Завантаження обраного товару з localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (selectedProduct) {
        document.getElementById('product-image').src = selectedProduct.image;
        document.getElementById('product-name').textContent = selectedProduct.name;
        document.getElementById('product-description').textContent = selectedProduct.description;
        document.getElementById('product-price').textContent = selectedProduct.price;
    }

    // Додавання товару до кошика
    document.getElementById('add-to-cart').addEventListener('click', (event) => {
        event.preventDefault();
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(selectedProduct);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Товар додано в кошик!');
    });
});
