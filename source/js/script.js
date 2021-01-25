let modalCart = document.querySelector('.modal-cart');
let goodsButtonBuy = document.querySelector('.main-goods__button');
let overLay = document.querySelector('.page-body::after');

goodsButtonBuy.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCart.classList.add('modal-show');
});

if (modalCart.classList == 'modal-show') {
  overLay.style.display = 'block';
}

overLay.addEventListener('click', function(evt) {
  modalCart.classList.remove('modal-show');
  overLay.style.display = 'none'
});
