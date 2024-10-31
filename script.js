
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    // Завантаження товарів з localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    renderProductList(products);

    // Функція для відображення списку товарів на сторінці
    function renderProductList(products) {
        productList.innerHTML = '';
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
                const index = event.target.closest('.product-link').getAttribute('data-index');
                const selectedProduct = products[index];
                localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
            });
        });

        // Додавання обробників подій для додавання товарів в кошик
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const index = event.target.getAttribute('data-index');
                const selectedProduct = products[index];
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                cartItems.push(selectedProduct);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                alert('Товар додано в кошик!');
            });
        });
    }

    // Існуючий код для пошуку товарів, фільтрації та сортування
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const categoryFilter = document.getElementById('category-filter');
    const sortSelect = document.getElementById('sort');

    // Пошук товарів
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        renderProductList(filteredProducts);
    });

    // Фільтрація за категоріями
    categoryFilter.addEventListener('change', () => {
        const category = categoryFilter.value;
        const filteredProducts = products.filter(product => category === 'all' || product.category === category);
        renderProductList(filteredProducts);
    });

    // Сортування товарів
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const sortedProducts = [...products].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^\d]/g, ''));
            const priceB = parseFloat(b.price.replace(/[^\d]/g, ''));
            const popularityA = parseInt(a.popularity || 0);
            const popularityB = parseInt(b.popularity || 0);

            if (sortValue === 'price-low') return priceA - priceB;
            if (sortValue === 'price-high') return priceB - priceA;
            if (sortValue === 'popularity') return popularityB - popularityA;
        });

        renderProductList(sortedProducts);
    });
});
