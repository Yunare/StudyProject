const numberOfFilms = +prompt('Скільки фільмов ви вже подививилися', 'Впишить кількість фільмов');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameMovies = prompt('Один з останіх продивляних фільмов?', 'Впишіть назву фільму');
const ratingMovies = prompt('На скільки ви оцінюєте його?', 'Впишіть оцінку фільма');

const nameMovies2 = prompt('Один з останіх продивляних фільмов?', 'Впишіть назву фільму');
const ratingMovies2 = prompt('На скільки ви оцінюєте його?', 'Впишіть оцінку фільма');

personalMovieDB.movies[nameMovies] = ratingMovies;
personalMovieDB.movies[nameMovies2] = ratingMovies2;

console.log(personalMovieDB); 
