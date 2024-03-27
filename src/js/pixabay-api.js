import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function searchImages(userInput, page, limit) {
  const API_KEY = '43065562-482e0c4e1ab6b062f2c90306d';
  const baseURL = 'https://pixabay.com/api/';

  const response = await axios.get(baseURL, {
    params: {
      key: API_KEY,
      q: userInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: limit,
    },
  });

  if (response.data.hits.length === 0) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });

    return;
  }

  return response.data;
}
