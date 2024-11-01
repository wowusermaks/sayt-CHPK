
document.addEventListener('DOMContentLoaded', () => {
    const productInfo = document.getElementById('product-info');
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        productInfo.innerHTML = `
            <h2>${selectedProduct.name}</h2>
            <img src="images/${selectedProduct.image}" alt="${selectedProduct.name}">
            <p>${selectedProduct.description}</p>
            <p class="price">${selectedProduct.price}</p>
            <button id="add-to-cart" class="btn-primary">Додати в кошик</button>
        `;

        document.getElementById('add-to-cart').addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(selectedProduct);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Товар додано в кошик!');
        });
    }
});
