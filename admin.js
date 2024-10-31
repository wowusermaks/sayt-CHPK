
document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productListContainer = document.getElementById('product-list');

    // Завантаження існуючих товарів з localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
    renderProductList(products);

    // Додавання нового товару
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newProduct = {
            name: document.getElementById('product-name').value,
            category: document.getElementById('product-category').value,
            price: document.getElementById('product-price').value,
            image: document.getElementById('product-image').value,
            description: document.getElementById('product-description').value
        };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        renderProductList(products);

        productForm.reset();
        alert('Товар успішно додано!');
    });

    // Функція для відображення списку товарів
    function renderProductList(products) {
        productListContainer.innerHTML = '';
        products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <h4>${product.name}</h4>
                <p>Категорія: ${product.category}</p>
                <p>Ціна: ${product.price}</p>
                <img src="${product.image}" alt="${product.name}" width="100">
                <p>${product.description}</p>
                <button class="btn-primary delete-product" data-index="${index}">Видалити</button>
            `;
            productListContainer.appendChild(productElement);
        });

        // Додавання обробників подій для видалення товарів
        document.querySelectorAll('.delete-product').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                renderProductList(products);
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Existing code for managing products
    // ...

    // Управління користувачами
    const userListContainer = document.getElementById('user-list');

    // Завантаження зареєстрованих користувачів з localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    renderUserList(users);

    // Функція для відображення списку користувачів
    function renderUserList(users) {
        userListContainer.innerHTML = '';
        if (users.length === 0) {
            userListContainer.innerHTML = '<p>Немає зареєстрованих користувачів.</p>';
        } else {
            users.forEach((user, index) => {
                const userElement = document.createElement('div');
                userElement.classList.add('user-item');
                userElement.innerHTML = `
                    <p>Ім'я користувача: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <button class="btn-primary delete-user" data-index="${index}">Видалити</button>
                `;
                userListContainer.appendChild(userElement);
            });

            // Додавання обробників подій для видалення користувачів
            document.querySelectorAll('.delete-user').forEach(button => {
                button.addEventListener('click', (event) => {
                    const index = event.target.getAttribute('data-index');
                    users.splice(index, 1);
                    localStorage.setItem('users', JSON.stringify(users));
                    renderUserList(users);
                });
            });
        }
    }
});
