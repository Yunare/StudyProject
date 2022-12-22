let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмов ви вже подививилися', 'Впишить кількість фільмов');
    // Ми перевіряємо черкз цикл на пусту строку, на пустоту, та на не число, якщо щось з цього правдиве то ми посторюємо питання
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмов ви вже подививилися', 'Впишить кількість фільмов');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    // Автомізуємо питання з допомогою циклів
    for (let i = 0; i < 2; i++) {

        const nameMovies = prompt('Один з останіх продивляних фільмов?', 'Впишіть назву фільму');
        const ratingMovies = prompt('На скільки ви оцінюєте його?', 'Впишіть оцінку фільма');

        /*  Перевіряємо щоб не було пустої строчки,  
        щоб користувач не нажав на кнопку відміна, щоб довжина строчки не
        привешала 50 символів (Ми використовуємо .length для того щоб перевірити 
        скільки символів в відповіді на питання), і якщо користувач ввів
        все правильно то ми продовжуємо наш алгоритм */
        if (nameMovies != null && ratingMovies != null && nameMovies != '' && ratingMovies != '' && nameMovies.length < 50 && ratingMovies.length < 50) {

            personalMovieDB.movies[nameMovies] = ratingMovies;

            console.log('done');
        } else {
            console.log('error');
            /* Якщо више условія не виконалось, то ми повинні вернутись 
            на один шаг цикла назад, тому нам треба зробити і-- (одна ітерація назад)*/
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фільмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('ви класичний переглядач');
    } else if (personalMovieDB.count >= 30) {
        console.log('ви кіноман');
    } else {
        console.log('Виникла проблема');

    }

}

detectPersonalLevel();

function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalMovieDB)
    }

    // if (personalMovieDB.privat == false) {
    //     console.log(personalMovieDB)
    // }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    // let generesMovies = '';

    for (let i = 0; i < 3; i++) {

        personalMovieDB.genres[i] = prompt(`Ваш любимий жанр під номером ${i + 1}`);
    }
}

writeYourGenres();
// console.log(personalMovieDB);2
