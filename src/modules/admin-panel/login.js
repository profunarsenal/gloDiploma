export const login = () => {
  const form = document.getElementById('login');
  const inputName = document.getElementById('name');
  const inputPass = document.getElementById('type');
  const messageName = document.querySelector('.text-warning-name');
  const messagePass = document.querySelector('.text-warning-password');

  const addCookie = () => {
    let date = new Date(2022, 6, 4,);
    document.cookie = `name=${inputName.value}; expires=${date.toUTCString()};`
  }

  const authorization = (users) => {
    messageName.style.display = 'none';
    messagePass.style.display = 'none';

    users.forEach(user => {
      if (inputName.value === user.login && inputPass.value === user.password) {
        localStorage.setItem('auth', JSON.stringify({ auth: true }));
        addCookie();

        window.location.href = `/table.html`;
      } else {
        if (inputName.value !== user.login) {
          messageName.style.display = 'block';
        }

        if (inputPass.value !== user.password) {
          messagePass.style.display = 'block';
        }

        inputName.value = '';
        inputPass.value = '';
      }
    })
  }

  const sendRequest = () => {
    return fetch('http://localhost:4444/users')
      .then(res => res.json())
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendRequest().then(users => authorization(users));
  })

}