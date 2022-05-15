export const checkAuth = () => {
  if (window.location.pathname !== '/table.html') {
    localStorage.removeItem('auth');
  } else {
    if (!localStorage.getItem('auth')) {
      window.location.href = `/index.html`;
    }
  }
}