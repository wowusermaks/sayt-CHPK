
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    // Відображення товарів у кошику
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.price}</p>
            <button class="remove-item" data-index="${index}">Видалити</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += parseFloat(item.price.replace(/[^\d]/g, ''));
    });

    totalPriceElement.textContent = `Загальна вартість: ${totalPrice} грн`;

    // Видалення товарів із кошика
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            window.location.reload();
        });
    });

    // Оформлення замовлення
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        alert(`Дякуємо, ${name}! Ваше замовлення підтверджено і буде відправлено на адресу: ${address}.`);

        // Очищення кошика після оформлення замовлення
        localStorage.removeItem('cartItems');
        window.location.reload();
    });
});
