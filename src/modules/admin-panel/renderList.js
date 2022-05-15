export const renderList = (services) => {
  const table = document.getElementById('tbody');

  const renderList = () => {
    table.innerHTML = '';

    services.forEach(service => {
      const row = document.createElement('tr');
      row.classList.add('table__row');

      row.innerHTML = `
        <td class="table__id table__cell">${service.id}</td>
        <td class="table-type table__cell">${service.type}</td>
        <td class="table-name table__cell">
          ${service.name}
        </td>
        <td class="table-units table__cell">
          ${service.units}
        </td>
        <td class="table-cost table__cell">
          ${service.cost} руб
        </td>
        <td>
          <div class="table__actions table__cell">
            <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change">
                  <use xlink:href="./img/sprite.svg#change"></use>
                </svg></span><span>Изменить</span>
            </button>
            <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove">
                  <use xlink:href="./img/sprite.svg#remove"></use>
                </svg></span><span>Удалить</span>
            </button>
          </div>
        </td>
      `;

      table.append(row)
    })
  }

  renderList()
}