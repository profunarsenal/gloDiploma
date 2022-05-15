export const sendForm = (formId) => {
  const form = document.getElementById(formId);
  const inputPhone = form.querySelector('input[name="phone"]');
  const inputName = form.querySelector('input[name="name"]');
  const inputCheck = form.querySelector('input[type="checkbox"]');
  const popupForm = document.querySelector('.popup-thank ');

  const popupOpen = () => {
    popupForm.style.cssText += `
      visibility: visible;
      opacity: 1;
    `;

    setTimeout(() => {
      popupForm.style.cssText += `
        visibility: hidden;
        opacity: 0;
      `;
    }, 3000)
  }

  const showMessage = (text) => {
    const statusBlock = document.createElement('div');
    statusBlock.textContent = text;
    statusBlock.style.cssText = `
      padding-top: 10px;
      color: #000;
    `;

    form.append(statusBlock);

    setTimeout(() => {
      statusBlock.remove()
    }, 5000)
  }

  const validateForm = () => {
    let isError = true;

    if (inputName) {
      if (inputName.value !== '') {
        inputName.style.border = 'none';
      } else {
        inputName.style.border = '1px solid red';
        isError = false
      }
    }

    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(inputPhone.value)) {
      inputPhone.style.border = 'none';
    } else {
      inputPhone.style.border = '1px solid red';
      isError = false
    }

    return isError
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    if (validateForm()) {
      if (inputCheck.checked) {
        sendData(formBody)
          .then(data => {
            popupOpen();

            formElements.forEach(input => {
              input.value = '';
            })

            inputCheck.checked = false;
          })
          .catch(e => {
            showMessage('Ошибка отправки!')
          })
      } else {
        showMessage('Прочитайте и примите соглашение!')
      }
    } else {
      showMessage('Неправильно заполнены поля!');
    }

  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  })

  document.addEventListener('input', (e) => {
    if (e.target === inputPhone) {
      e.target.value = e.target.value.replace(/\s+/, "");
      e.target.value = e.target.value.replace(/[^\+\d]/, "");
      e.target.value = e.target.value.replace(/\+{2,}/g, '');
    } else if (e.target === inputName) {
      e.target.value = e.target.value.replace(/[^\D]/gi, "");
    }
  })

}