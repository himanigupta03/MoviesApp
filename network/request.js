import {Request} from './network';

export const getMovies = async page => {
  console.log('apicall', page);
  return Request.request({
    url:
      'https://api.themoviedb.org/3/movie/' +
      page.api +
      '?api_key=4047dac9df19636409bc473dd7b02f7c&page=' +
      page.page,
    method: 'GET',
  });
};
