
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Вітаємо, ${user.username}! Ви успішно увійшли.`);
            window.location.href = 'index.html';
        } else {
            alert('Невірна електронна пошта або пароль. Спробуйте ще раз.');
        }
    });
});
