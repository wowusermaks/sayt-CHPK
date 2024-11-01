
document.addEventListener('DOMContentLoaded', () => {
    const userList = document.querySelector('.user-list');
    const addProductForm = document.getElementById('add-product-form');

    // Завантаження користувачів з localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    renderUserList(users);

    // Функція для відображення списку користувачів
    function renderUserList(users) {
        userList.innerHTML = '';
        if (users.length === 0) {
            userList.innerHTML = '<p>Немає зареєстрованих користувачів.</p>';
        } else {
            users.forEach(user => {
                const userItem = document.createElement('div');
                userItem.classList.add('user-item');
                userItem.innerHTML = `
                    <p>Ім'я користувача: ${user.username}</p>
                    <p>Електронна пошта: ${user.email}</p>
                `;
                userList.appendChild(userItem);
            });
        }
    }

    // Додавання нового товару
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('product-name').value;
        const description = document.getElementById('product-description').value;
        const price = document.getElementById('product-price').value;
        const image = document.getElementById('product-image').value;
        const category = document.getElementById('product-category').value;

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ name, description, price, image, category });
        localStorage.setItem('products', JSON.stringify(products));

        alert('Товар успішно додано!');
        addProductForm.reset();
    });
});
