// configuration for TMDB API
// Read more about API here : https://developers.themoviedb.org/documentation/getting-started/authorization

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '50e7bf0010c2f2b60488074fb8f518d5';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
//available sizes : w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
//w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE};