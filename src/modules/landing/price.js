export const price = () => {
  const typesBlock = document.querySelector('.nav-list-popup-repair');

  const renderList = (btn, values) => {
    const table = document.querySelector('.popup-repair-types-content-table__list > tbody');
    const workArray = [];

    values.forEach(value => {
      if (value.type === btn.textContent) {
        workArray.push(value);
      }
    })

    table.innerHTML = '';

    workArray.forEach(work => {
      const tr = document.createElement('tr');
      tr.classList.add('mobile-row');

      tr.innerHTML = `
        <td class="repair-types-name">${work.name}</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
        <td class="repair-types-value">${work.units}</td>
        <td class="repair-types-value">${work.cost} руб.</td>
      `;

      table.append(tr);
    })
  }

  const toggleButtonTypes = () => {
    const buttons = document.querySelectorAll('.popup-repair-types-nav__item');

    buttons[0].classList.add('active');

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        buttons.forEach(btn => {
          btn.classList.remove('active');
        })

        e.target.classList.add('active');

        getData().then(data => renderList(button, data))
      })
    })
  }

  const renderTypes = (types) => {
    const typeArray = new Set();

    typesBlock.innerHTML = '';

    types.forEach(type => {
      typeArray.add(type.type)
    })

    typeArray.forEach(type => {
      const button = document.createElement('button');
      button.classList.add('button_o', 'popup-repair-types-nav__item');
      button.textContent = type;
      typesBlock.append(button);
    })

    toggleButtonTypes();
  }

  const getData = () => {
    return fetch('./db/db.json')
      .then(res => res.json())
  }

  getData().then(data => renderTypes(data))
}