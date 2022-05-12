export const accordeon = () => {
  const titleBlocks = document.querySelectorAll('.title_block');


  titleBlocks.forEach(title => {
    title.addEventListener('click', (e) => {

      titleBlocks.forEach(titleBlock => {
        if (titleBlock !== title) {
          titleBlock.classList.remove('msg-active');
        }
      })

      title.classList.toggle('msg-active')
    })
  })
}

