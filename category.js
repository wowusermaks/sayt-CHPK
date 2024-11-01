
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const category = document.querySelector('script[data-category]').getAttribute('data-category');

    // Завантаження товарів з localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filteredProducts = products.filter(product => product.category === category);
    renderProductList(filteredProducts);

    // Функція для відображення списку товарів на сторінці
    function renderProductList(products) {
        productList.innerHTML = '';
        if (products.length === 0) {
            productList.innerHTML = '<p>У цій категорії поки немає товарів.</p>';
        } else {
            products.forEach((product, index) => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <a href="product.html" class="product-link" data-index="${index}">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p class="price">${product.price}</p>
                    </a>
                    <a href="#" class="btn-primary add-to-cart" data-index="${index}">Додати в кошик</a>
                `;
                productList.appendChild(productItem);
            });

            // Додавання обробників подій для переходу на сторінку товару
            document.querySelectorAll('.product-link').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const productIndex = link.getAttribute('data-index');
                    const selectedProduct = filteredProducts[productIndex];
                    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
                    window.location.href = "product.html";
                });
            });

            // Додавання обробників подій для додавання товарів в кошик
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    const index = button.getAttribute('data-index');
                    const selectedProduct = filteredProducts[index];
                    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                    cartItems.push(selectedProduct);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    alert('Товар додано в кошик!');
                });
            });
        }
    }
});
