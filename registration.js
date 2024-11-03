
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Зберігаємо дані користувача в localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Реєстрація пройшла успішно! Тепер ви можете увійти.');
    window.location.href = 'login.html';
});
