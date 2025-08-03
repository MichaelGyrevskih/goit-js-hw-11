import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
event.preventDefault();
const query = event.target.elements['search-text'].value.trim();
if (query === '') {
    iziToast.warning({
      icon: 'ico-error',
      message: 'Поле пошуку не може бути порожнім.',
      position: 'topRight',
    });
    return;
    }

   clearGallery();
   showLoader();
    
    const data = await getImagesByQuery(query);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({
        icon: 'ico-error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(images);
    }
    hideLoader();
  });



// const form = document.querySelector('.form');
// form.addEventListener('submit', event => {
// event.preventDefault(); 
// const query = event.target.elements['search-text'].value.trim();
// if (query === '') {
//     iziToast.warning({
//       icon: 'ico-error',
//       message: 'Поле пошуку не може бути порожнім.',
//       position: 'topRight',
//     });
//     return;
//     }

//     clearGallery();
//     showLoader();
    
//     getImagesByQuery(query).then(response => {
//     if (response.data.hits.length === 0) {
//         iziToast.info({
//           icon: 'ico-error',
//           message: 'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//         });
//     } else {
//         createGallery(response.data.hits);
//     }}).catch(error => {
//     iziToast.error({
//       icon: 'ico-error',
//       message: 'Помилка сервера. Спробуйте ще раз.',
//       position: 'topRight',
//     });
//     }).finally(() => {
//     hideLoader();
//     form.reset();
//     });
    
//   });