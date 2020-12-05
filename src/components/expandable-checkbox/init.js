import ExpandableCheckbox from './ExpandableCheckbox';

$(() => {
  $('.js-expandable-checkbox').each((_, val) => new ExpandableCheckbox(val));
});
