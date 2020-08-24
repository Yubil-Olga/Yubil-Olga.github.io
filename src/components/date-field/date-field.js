import Datepicker from '../datepicker/datepicker';

document.querySelectorAll('.js-date-field__input input').forEach((el) => new Datepicker(el));