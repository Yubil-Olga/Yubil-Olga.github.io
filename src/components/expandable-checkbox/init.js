import ExpandableCheckbox from './expandable-checkbox';

$(() => {
  $('.js-expandable-checkbox').each((i, val) => new ExpandableCheckbox(val));
});
