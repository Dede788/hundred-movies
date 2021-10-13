// const API_KEY = "f17611b7";
const API_KEY = "bc8ed6d7";

const responseToJson = (response) => response.json();

export default (searchValue) => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&type=movie`
  ).then(responseToJson);
};
