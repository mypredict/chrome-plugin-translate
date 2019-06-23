function handleMouseup () {
  const selectContent = window.getSelection().toString().replace(/\s+/g, '');
  if (selectContent) {
    console.log(selectContent);
  }
}

window.addEventListener('mouseup', handleMouseup);
