
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert('Вхід успішний! Ласкаво просимо, ' + user.username + '!');
            window.location.href = 'index.html';
        } else {
            alert('Невірний email або пароль. Спробуйте ще раз.');
        }
    });
});
