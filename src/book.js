function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
   name: name,
   age: age,
   pronouns: pronouns
 }
  return mainCharacter;
}

function saveReview(newReview, reviews) {
  if(!reviews.includes(newReview)) {
    reviews.push(newReview);
 }
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(createTitle, buildMainCharacter, genre) {
  var book = {
    title: createTitle,
    mainCharacter: buildMainCharacter,
    pageCount: calculatePageCount(createTitle),
    genre: genre
  }
  return book;
}

function editBook(book) {
  book.pageCount *= .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
