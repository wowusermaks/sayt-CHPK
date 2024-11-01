
const productList = document.querySelector('.product-list');

// Збереження обраного товару в localStorage для відображення на сторінці товару
productList.addEventListener('click', (event) => {
    if (event.target.closest('.product-item')) {
        const product = event.target.closest('.product-item');
        const productData = {
            name: product.querySelector('h3').textContent,
            price: product.querySelector('.price').textContent,
            image: product.querySelector('img').src,
            description: 'Детальний опис товару...' // Замінити на динамічний опис, якщо є
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        window.location.href = 'product.html';
    }
});
