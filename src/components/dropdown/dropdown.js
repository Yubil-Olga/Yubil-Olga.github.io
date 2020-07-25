document.querySelectorAll('.js-dropdown').forEach((dropdown) => {
  let totalCounter = 0;
  function showDropdown() {
    dropdown.classList.toggle('dropdown_active');
  }
  function titleCounter() {
    let word = '';
    let title = '';
    function roomsTitle() {
      if (totalCounter === 0) {
        title = 'Сколько комнат';
      } else {
        const arr = [];
        dropdown.querySelectorAll('.js-dropdown__option').forEach((el) => {
          function elementTitle(name, value) {
            let legend = '';
            if (name === 'спальни') {
              switch (value) {
                case 1:
                  legend = 'спальня';
                  break;
                default:
                  legend = 'спальни';
              }
            }
            if (name === 'кровати') {
              switch (value) {
                case 1:
                  legend = 'кровать';
                  break;
                default:
                  legend = 'кровати';
              }
            }
            if (name === 'ванные комнаты') {
              switch (value) {
                case 1:
                  legend = 'ванная комната';
                  break;
                default:
                  legend = 'ванные комнаты';
              }
            }
            return `${value} ${legend}`;
          }
          if (el.querySelector('.js-dropdown__input').value > 0) {
            arr.push(elementTitle(el.querySelector('.dropdown__option-name').textContent, parseInt(el.querySelector('.js-dropdown__input').value, 10)));
          }
          title = arr.join(', ');
        });
      }
    }
    function guestsTitle() {
      let baby = 0;
      let babyCount = '';
      dropdown.querySelectorAll('.js-dropdown__option').forEach((el) => {
        if (el.querySelector('.dropdown__option-name').textContent === 'младенцы') {
          baby = el.querySelector('.js-dropdown__input').value;
        }
      });
      if (baby === '1') {
        babyCount = `, ${baby} младенец`;
      }
      if (baby > 1) {
        babyCount = `, ${baby} младенца`;
      }
      title = 'Сколько гостей';
      switch (totalCounter) {
        case 0:
          return title;
        case 1:
          word = 'гость';
          title = `${totalCounter} ${word} ${babyCount}`;
          break;
        case 2:
        case 3:
        case 4:
          word = 'гостя';
          title = `${totalCounter} ${word} ${babyCount}`;
          break;
        default:
          word = 'гостей';
          title = `${totalCounter} ${word} ${babyCount}`;
      }
      return title;
    }
    if (dropdown.classList.contains('dropdown_type_room')) {
      roomsTitle();
    } else {
      guestsTitle();
    }
    return title;
  }
  function closeDropdown(event) {
    function toBeClosed() {
      return (event.target.closest('.js-dropdown') !== dropdown && dropdown.classList.contains('dropdown_active'));
    }
    if (toBeClosed()) {
      dropdown.classList.remove('dropdown_active');
      window.removeEventListener('click', closeDropdown);
    }
  }
  function changeOptions(event) {
    const item = event.target.closest('.js-dropdown__option').querySelector('.js-dropdown__input');
    let counter = Number(item.value);
    if (event.target.classList.contains('dropdown__btn-plus') && counter < 4) {
      counter += 1;
      totalCounter += 1;
    }
    if (event.target.classList.contains('dropdown__btn-minus') && counter > 0) {
      counter -= 1;
      totalCounter -= 1;
    }
    if (totalCounter === 0 && dropdown.querySelectorAll('.js-dropdown__clean-btn').length > 0) {
      dropdown.querySelector('.js-dropdown__clean-btn').style.visibility = 'hidden';
    }
    if (totalCounter > 0 && dropdown.querySelectorAll('.js-dropdown__clean-btn').length > 0) {
      dropdown.querySelector('.js-dropdown__clean-btn').style.visibility = 'visible';
    }
    item.value = counter.toString();
    dropdown.querySelector('.js-dropdown__title').textContent = titleCounter();
  }
  function dropdownClicked(event) {
    window.addEventListener('click', closeDropdown);
    if (event.target.closest('.js-dropdown__selection')) {
      showDropdown();
    }
    if (event.target.parentElement.className.indexOf('js-dropdown__accept-btn') >= 0) {
      event.preventDefault();
      showDropdown();
      window.removeEventListener('click', closeDropdown);
    }
    if (event.target.parentElement.className.indexOf('js-dropdown__clean-btn') >= 0) {
      event.preventDefault();
      totalCounter = 0;
      dropdown.querySelector('.js-dropdown__clean-btn').style.visibility = 'hidden';
      dropdown.querySelector('.dropdown__title').textContent = titleCounter(totalCounter, dropdown);
      dropdown.querySelectorAll('.dropdown__input').forEach((item) => {
        item.value = 0;
      });
    }
    if (event.target.closest('.js-dropdown__option')) {
      changeOptions(event);
    }
  }
  dropdown.querySelectorAll('.js-dropdown__input').forEach((el) => {
    totalCounter += Number(el.value);
  });
  dropdown.addEventListener('click', dropdownClicked);
});
