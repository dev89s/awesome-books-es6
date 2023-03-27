import { DateTime } from '../node_modules/luxon/build/es6/luxon.js'

const loadDate = () => {
  const dateContainer = document.querySelector('.date-conainer');
  const now = DateTime.now();
  dateContainer.textContent = now;
}
export default loadDate