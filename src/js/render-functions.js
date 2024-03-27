import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const imgList = new SimpleLightbox('.gallery a', options);

function createGallery(image) {
  return `<li class="gallery-list-item">
       <a href="${image.largeImageURL}"> <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"></a>
        <ul class="img-description">
          <li class="img-description-item">
            <p class="description-key">Likes</p>
            <p class="description-value">${image.likes}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Views</p>
            <p class="description-value">${image.views}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Comments</p>
            <p class="description-value">${image.comments}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Downloads</p>
            <p class="description-value">${image.downloads}</p>
          </li>
        </ul>
      </li>`;
}

export function renderGallery(images) {
  const markup = images.hits.map(createGallery).join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  imgList.refresh();
}

// export function showEndCollectionMessage() {}
