
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Завантаження товарів з кошика з localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderCartItems(cartItems);

    // Функція для відображення товарів у кошику
    function renderCartItems(items) {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        if (items.length === 0) {
            cartItemsContainer.innerHTML = '<p>Кошик порожній</p>';
        } else {
            items.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <a href="#" class="remove-item" data-index="${index}">Видалити</a>
                `;
                cartItemsContainer.appendChild(cartItem);

                // Обчислення загальної суми
                totalPrice += parseFloat(item.price.replace(/[^\d]/g, ''));
            });

            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Додавання обробників подій для видалення товарів
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    const index = button.getAttribute('data-index');
                    cartItems.splice(index, 1);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCartItems(cartItems);
                });
            });
        }
    }
});
