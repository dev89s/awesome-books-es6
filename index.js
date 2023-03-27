import initializePage from './modules/init-page.js';
import BookList from './modules/book-list.js';
import loadDate from './modules/load-date.js';

initializePage();
loadDate();

// ---- create and load books on page ---- //
const bookObj = new BookList();
bookObj.loadBooks();