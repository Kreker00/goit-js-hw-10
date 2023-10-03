import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://api.thecatapi.com';
axios.defaults.headers.common['x-api-key'] =
  'live_nzq3i8DuaX9JyyHGLnlhhs6YuB6X8w46j2g0eXzA9Q0V0N0h32stlZP5ImY9YcBQ';

const refs = {
  breedList: document.querySelector('.breed-select'),
  container: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
};

function fetchBreeds() {
  refs.breedList.classList.replace('breed-select', 'breed-select-hidden');
  return axios
    .get('/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    });
}

function fetchCatByBreed(breedId) {
  refs.container.classList.replace('cat-info', 'cat-info-hidden');
  refs.loaderEl.classList.replace('loader-hidden', 'loader');
  return axios
    .get(`/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    });
}

export { fetchBreeds, fetchCatByBreed };
