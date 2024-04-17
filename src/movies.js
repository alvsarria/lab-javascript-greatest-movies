// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map(element => element.director);
    return arrayDirectors.filter(element => arrayDirectors.lastIndexOf(element) === arrayDirectors.indexOf(element));
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        return moviesArray.reduce((acc, cur) => {
            if (cur.director === "Steven Spielberg" && cur.genre.includes("Drama")) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
    };
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        return Math.round(moviesArray.reduce((acc, cur) => {
            if (cur.score === undefined || cur === undefined) {
                return acc;
            } else {
                return acc + cur.score;
            }
        }, 0) / moviesArray.length * 1e2) / 1e2;
    };
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.filter(element => element.genre.includes("Drama")).length === 0) {
        return 0;
    } else {
        return Math.round(moviesArray.reduce((acc, cur) => {
            if (cur.genre.includes("Drama")) {
                return acc + cur.score;
            } else {
                return acc;
            }
        }, 0) / moviesArray.filter(element => element.genre.includes("Drama")).length * 1e2) / 1e2;
    };
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.map(element => element);
    return newArray.sort((a, b) => {
        if (a.year !== b.year) {
            if (a.year > b.year) {
                return 1;
            } else {
                return -1;
            };
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title === b.title) {
                return 0;
            } else {
                return -1;
            };
        };
    });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayTitles = moviesArray.map(element => element.title);
    arrayTitles.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        };
    });
    if (arrayTitles.length >= 0) {
        return arrayTitles.slice(0, 20);
    } else {
        return arrayTitles;
    };
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = moviesArray.map(element => structuredClone(element));
    return newArr.map(element => {
        let time = element.duration.split(' ');
        if (time.length === 1) {
            element.duration = Number(time[0].replace('h', '')) * 60;
        } else {
            element.duration = Number(time[0].replace('h', '')) * 60 + Number(time[1].replace('min', ''));
        };
        return element;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    } else {
        const yearArr = moviesArray.map(element => element.year).filter((value, index, self) => self.indexOf(value) === index);
        const avgArr = yearArr.map(element => {
            objectArr = {};
            objectArr.year = element;
            objectArr.averageScore = (moviesArray.reduce((acc, cur) => {
                if (cur.year === element) {
                    return acc + cur.score;
                } else {
                    return acc;
                };
            }, 0) / moviesArray.filter((element2) => element2.year === element).length).toFixed(1);
            return objectArr;
        });
        const maxValue =  avgArr.sort((a, b) => {
            if (b.averageScore !== a.averageScore) {
                if (b.averageScore < a.averageScore) {
                    return -1
                } else if (a.averageScore === b.averageScore) {
                    return 0
                } else {
                    return 1
                }
            } else {
                if (b.year > a.year) {
                    return -1
                } else if (a.year === b.year) {
                    return 0
                } else {
                    return 1
                }
            }
        })[0];
        return `The best year was ${maxValue.year} with an average score of ${maxValue.averageScore}`;
    }
};

test = [{ year: 2007, score: 8 }]
console.log(bestYearAvg(test));