import 'inputmask/dist/jquery.inputmask';
$('.js-mask').inputmask({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    max: '01.01.2020'
  })

