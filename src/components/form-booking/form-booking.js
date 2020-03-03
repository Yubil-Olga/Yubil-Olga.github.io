// import '../date-dropdown/date-dropdown';
import '../dropdown/dropdown';

let arrival;
let departure;
const price = Number.parseInt(document.querySelector('.form-booking .room-details__price').textContent);
document.querySelector('.form-booking .room-details__price').textContent = price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, minimumFractionDigits: 0});

$('.arrival .datepicker-here').datepicker({
    onSelect: function(formattedDate, date, inst) {
        arrival = new Date(date);
        if (departure !== undefined) {
            priceCulc();
        }
    }
});

$('.departure .datepicker-here').datepicker({
    onSelect: function(formattedDate, date, inst) {
        departure = new Date(date);
        if (arrival !== undefined) {
            priceCulc();
        }
    }
});
function priceCulc() {
    let days = 0;
    if (departure > arrival) {
        days = (departure - arrival)/86400000;
        if (days == 1) {
            document.querySelector('.form-booking .order-item__days').textContent = days + ' сутки';
        }
        else {
            document.querySelector('.form-booking .order-item__days').textContent = days + ' суток';
        }
        document.querySelector('.form-booking .order-item__price').textContent = days*price;
    }  
    else {
        document.querySelector('.form-booking .order-item__days').textContent = 0;
        document.querySelector('.form-booking .order-item__price').textContent = 0;
    }
    totalSum();
}
function totalSum() {
    let sum = 0;
    document.querySelectorAll('.order-item__price').forEach(el => {
        sum += Number.parseInt(el.textContent);
    })
    sum -= Number.parseInt(document.querySelector('.form-booking__order-details .discount').getAttribute('date-discount'));
    if (sum>=0) {
        document.querySelector('.item-total__price').textContent = sum.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, minimumFractionDigits: 0});
    }
    else {
        document.querySelector('.item-total__price').textContent = 0;
    }
}