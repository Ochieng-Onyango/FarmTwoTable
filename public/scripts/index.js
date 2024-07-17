// index.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form[action="/register"]');
    const loginForm = document.querySelector('form[action="/login"]');
    const meetFarmersBtn = document.querySelector('.meet-farmers button');

  if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(registerForm);
            const user = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
                location: formData.get('location')
            };
            localStorage.setItem(user.email, JSON.stringify(user));
            window.location.href = '/login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');
            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                window.location.href = '/home.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    meetFarmersBtn.addEventListener('click', () => {
        window.location.href = 'products.html#farmers';
      });

      renderCartItems();
});