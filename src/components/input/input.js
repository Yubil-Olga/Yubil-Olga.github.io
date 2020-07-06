import Inputmask from 'inputmask';

$(document).ready(() => {
  const field = document.getElementsByClassName('js-mask');
  const im = new Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    min: '01.01.1900',
    max: '01.01.2020',
  });
  im.mask(field);
});
