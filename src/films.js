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
  if (moviesFromGenre.length === 0) { return 0 };

  let averageMovies = moviesFromGenre.reduce((total, movie) => total + movie.score, 0) / moviesFromGenre.length;
  console.log("EXERCICE 6 ->", averageMovies);
  let result = Number(averageMovies.toFixed(1));
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  //Had to create new array with objetcs like this because of Deep Copy.
  //This was the other option: let newMovies = JSON.parse(JSON.stringify(array));
  
  let newMovies = [];

  for (i = 0; i < array.length; i++) {
    let objeto = {
      title: array[i].title,
      year: array[i].year,
      director: array[i].director,
      duration: array[i].duration,
      genre: array[i].genre,
      score: array[i].score
    };

    newMovies.push(objeto);
  }

  let regexHours = /(\d+)(?=h)/;
  let regexMin = /(\d+)(?=min)/;

  for (i = 0; i < newMovies.length; i++) {
    let duration = newMovies[i].duration;
    let durationHours = duration.match(regexHours);
    let durationMins = duration.match(regexMin);

    let horas = 0;
    let minutos = 0;

    if (durationHours) {
      horas = parseInt(durationHours[0])
    } else {
      horas = 0;
    }

    if (durationMins) {
      minutos = parseInt(durationMins[0])
    } else {
      minutos = 0;
    }

    let durationInMinutes = horas * 60 + minutos;
    newMovies[i].duration = durationInMinutes;
  }

  console.log("newMovies", typeof durationHours);
  return newMovies;
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
