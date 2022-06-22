const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const result = this.films.map((film) => {
    return film.title
  })
}


Cinema.prototype.findByTitle = function (title) {
  return this.films.filter((film) => film.title === title)
}
Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre);
}
Cinema.prototype.findByYear = function (year) {
  return this.films.filter((film) => film.year === year);
}
Cinema.prototype.checkYearForFilms = function (year) {
  return this.films.every((film) => film.year === year)
}
Cinema.prototype.checkLength = function (length) {
  return this.films.every((film) => film.length > length)
}
Cinema.prototype.totalRuntime = function () {
  const total = this.films.reduce((tally, film) => {
    return tally += film.length;
  }, 0)

  return total

}

Cinema.prototype.findByProperty = function (property, value) {
  console.log(`${property} is the property and ${value} is the value`)
  return this.films.filter((film) => film[property] === value);
}
module.exports = Cinema;