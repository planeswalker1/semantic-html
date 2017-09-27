const images = document.querySelectorAll('img');
const modalView = document.querySelector('.modal-view');
console.log(images, modalView);
modalView.addEventListener('click', onModalClick);

function onImageClick(event) {
  console.log('Hello clicked img');
  const image = createImage(event.currentTarget.src, event.currentTarget.alt);

  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.classList.remove('hidden');

  modalView.appendChild(image);
}

function onModalClick() {
  hideModal();
}

function hideModal() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
  const image = images[i];
  image.addEventListener('click', onImageClick);
}

function createImage(src, alt) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  return image;
}
