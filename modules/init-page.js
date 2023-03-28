import BookList from './book-list.js';
import loadPage from './load-page.js';

const initializePage = () => {
  const bookObj = new BookList();
  bookObj.loadBooks();

  const listLink = document.querySelector('#menu-list-link');
  const AddNewLink = document.querySelector('#menu-add-link');
  const contactLink = document.querySelector('#menu-contact-link');

  listLink.addEventListener('click', () => {
    loadPage('list-view');
  });

  AddNewLink.addEventListener('click', () => {
    loadPage('add-view');
  });

  contactLink.addEventListener('click', () => {
    loadPage('contact-view');
  });
};

export default initializePage;