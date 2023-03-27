import BookList from './book-list.js';

const initializePage = () => {
  const bookObj = new BookList();
  const formContainer = document.querySelector('.book-form');
  const bookListSection = document.querySelector('.book-list-section');
  const contactSection = document.querySelector('.contact-section');

  const listLink = document.querySelector('#menu-list-btn');
  const AddNewLink = document.querySelector('#menu-add-btn');
  const contactLink = document.querySelector('#menu-contact-btn');

  listLink.addEventListener('click', () => {
    bookListSection.style.display = 'block';
    formContainer.style.display = 'none';
    contactSection.style.display = 'none';
  });

  AddNewLink.addEventListener('click', () => {
    bookListSection.style.display = 'none';
    formContainer.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  contactLink.addEventListener('click', () => {
    bookListSection.style.display = 'none';
    contactSection.style.display = 'flex';
    formContainer.style.display = 'none';
  });

  bookObj.loadBooks();
};

export default initializePage;