export const checkAuth = () => {
  if (window.location.pathname === '/index.html') {
    localStorage.removeItem('auth');
  }

  if (window.location.pathname === '/table.html') {
    if (!localStorage.getItem('auth')) {
      window.location.href = `/index.html`;
    }
  }
}