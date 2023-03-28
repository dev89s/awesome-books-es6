const loadPage = (destPage) => {
  const formContainer = document.querySelector('.book-form');
  const bookListSection = document.querySelector('.book-list-section');
  const contactSection = document.querySelector('.contact-section');

  if (destPage === 'list-view') {
    bookListSection.style.display = 'block';
    formContainer.style.display = 'none';
    contactSection.style.display = 'none';
  }

  if (destPage === 'add-view') {
    bookListSection.style.display = 'none';
    formContainer.style.display = 'flex';
    contactSection.style.display = 'none';
  }

  if (destPage === 'contact-view') {
    bookListSection.style.display = 'none';
    contactSection.style.display = 'flex';
    formContainer.style.display = 'none';
  }
};

export default loadPage;