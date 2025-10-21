document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const logoutBtn = document.getElementById('logoutBtn');

  // Signup
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;
      localStorage.setItem('user', JSON.stringify({ username, password }));
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'dashboard.html';
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === username && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
      } else {
        alert('Неверные данные');
      }
    });
  }

  // Dashboard
  if (logoutBtn) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!localStorage.getItem('loggedIn')) window.location.href = 'login.html';
    document.getElementById('usernameDisplay').textContent = user.username;
    document.getElementById('userWelcome').textContent = user.username;
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('loggedIn');
      window.location.href = 'index.html';
    });
  }
});
