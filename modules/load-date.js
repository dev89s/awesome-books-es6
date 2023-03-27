import { DateTime } from '../node_modules/luxon/build/es6/luxon.js'

const loadDate = () => {
  const dateContainer = document.querySelector('.date-container');
  const now = DateTime.now();
  dateContainer.textContent = now.toFormat('DD hh:mm:ss a');
};
export default loadDate;