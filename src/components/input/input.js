import 'inputmask/dist/jquery.inputmask';
$('.mask').inputmask({
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'ДД.ММ.ГГГГ',
    min: '01.01.2020',
	max: '31.12.2030'
  })

