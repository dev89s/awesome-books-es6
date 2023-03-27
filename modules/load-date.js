import { DateTime } from "../node_modules/luxon/build/es6/luxon.js";
const loadDate = () => {
  const dateContainer = document.querySelector('.date-container');
  const now = DateTime.now();
  dateContainer.textContent = `${now.monthLong} ${DateTime.fromISO(now).toFormat("dd yyyy hh:mm:ss a")}`;
};

export default loadDate;