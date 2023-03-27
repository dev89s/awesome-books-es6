import { DateTime } from './luxon-mini.js';

const loadDate = () => {
  const dateContainer = document.querySelector('.date-container');
  const now = DateTime.now();
  dateContainer.textContent = now.toFormat('DD hh:mm:ss a');
};
export default loadDate;