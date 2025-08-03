import axios from 'axios';

const API_KEY = '51602245-fcbe599c3dab331c74561bb82';

export async function getImagesByQuery(query) {
  const response = await axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });
  return response.data;
}
// export  function getImagesByQuery(query) {
//   return axios('https://pixabay.com/api/', {
//     params: {
//       key: API_KEY,
//       q: query,
//       image_type: "photo",
//       orientation: "horizontal",
//       safesearch: true,
//     },
//   });
  
//}