
document.addEventListener("DOMContentLoaded", () => {
    // Завантажуємо дані про продукт з localStorage
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));

    if (productData) {
        document.getElementById('product-title').textContent = productData.name;
        document.getElementById('product-price').textContent = `Ціна: ${productData.price}`;
        document.getElementById('product-image').src = productData.image;
        document.getElementById('product-description').textContent = productData.description;
    }

    // Додаємо товар у кошик
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault();

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(productData);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert('Товар додано в кошик!');
    });
});

// Додавання відгуків
const reviewForm = document.createElement('form');
reviewForm.id = 'review-form';
reviewForm.innerHTML = `
    <h3>Залиште свій відгук</h3>
    <label for="review-text">Ваш відгук:</label>
    <textarea id="review-text" rows="4" required></textarea>
    <button type="submit" class="btn-primary">Надіслати відгук</button>
`;
document.getElementById('product-details').appendChild(reviewForm);

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    reviews.push({ productName: productData.name, reviewText });
    localStorage.setItem('productReviews', JSON.stringify(reviews));

    alert('Дякуємо за ваш відгук!');
});
