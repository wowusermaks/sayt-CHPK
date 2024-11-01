
document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        userList.innerHTML = '<p>Немає зареєстрованих користувачів.</p>';
    } else {
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user-item');
            userElement.innerHTML = `<p>Ім'я: ${user.username}, Email: ${user.email}</p>`;
            userList.appendChild(userElement);
        });
    }

    const addProductForm = document.getElementById('add-product-form');
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
