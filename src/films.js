const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(films => films.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director)
  const result = moviesFromDirector.reduce((total, movie) => total + movie.score, 0) / moviesFromDirector.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let movieTitle = array.map(movie => movie.title).sort();

  if (movieTitle.length > 20) {
    let movies = movieTitle.slice(0, 20);
    return movies;
  } else {
    return movieTitle;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return result;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesFromGenre = array.filter(movie => movie.genre.includes(genre));
  if (moviesFromGenre.length === 0) {return 0};

  let averageMovies = moviesFromGenre.reduce((total, movie) => total + movie.score, 0)/moviesFromGenre.length;
  console.log("EXERCICE 6 ->", averageMovies);
  return parseFloat(averageMovies).toFixed(1);  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
