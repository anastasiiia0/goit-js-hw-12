import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more-btn');

let userInput = '';
let pageIterator = 1;
const limit = 15;

form.addEventListener('submit', submitForm);
loadBtn.addEventListener('click', clickLoadButton);

async function submitForm(event) {
  event.preventDefault();
  pageIterator = 1;

  gallery.innerHTML = '';
  removeLoadButton();
  addLoader();

  userInput = event.target.search.value.trim();
  if (userInput === '') {
    removeLoader();
    showErrorMessage('Please enter a search word');
    return;
  }

  try {
    const images = await searchImages(userInput, pageIterator, limit);
    renderGallery(images);
    addLoadButton();

    if (images.totalHits <= limit) {
      removeLoadButton();
      showInfoMessage(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }
  } catch (error) {
    showErrorMessage('Error fetching images');
  } finally {
    removeLoader();
    event.target.reset();
  }
}

async function clickLoadButton() {
  pageIterator++;
  removeLoadButton();
  addLoader();

  try {
    const images = await searchImages(userInput, pageIterator, limit);
    renderGallery(images);

    if (pageIterator * limit >= images.totalHits) {
      removeLoadButton();
      showInfoMessage(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }
    addLoadButton();

    const galleryCardHeight =
      gallery.firstElementChild.getBoundingClientRect().height;

    window.scrollBy({ top: galleryCardHeight * 2, behavior: 'smooth' });
  } catch (error) {
    showErrorMessage('Error fetching images');
  } finally {
    removeLoader();
  }
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: `${message}`,
  });
}

function showInfoMessage(message) {
  iziToast.info({
    title: 'Info',
    position: 'topRight',
    message: `${message}`,
  });
}

function addLoader() {
  loader.classList.add('is-open');
}

function removeLoader() {
  loader.classList.remove('is-open');
}

function addLoadButton() {
  loadBtn.classList.add('is-open');
}

function removeLoadButton() {
  loadBtn.classList.remove('is-open');
}
