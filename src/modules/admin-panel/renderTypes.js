export const renderTypes = (services) => {
  const selectType = document.getElementById('typeItem');

  const renderType = () => {
    const setType = new Set();

    services.forEach(service => {
      setType.add(service.type)
    })

    setType.forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;

      selectType.append(option)
    })
  }

  renderType()
}