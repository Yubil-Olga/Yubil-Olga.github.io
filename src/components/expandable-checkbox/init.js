import ExpandableCheckbox from './expandable-checkbox';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-expandable-checkbox').forEach((el) => new ExpandableCheckbox(el));
});
