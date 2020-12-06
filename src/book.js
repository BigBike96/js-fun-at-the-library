function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
   name: name,
   age: age,
   pronouns: pronouns
};
  return mainCharacter;
}

function saveReview(addReview, reviews) {
  if(!reviews.includes(addReview)) {
    reviews.push(addReview);
 }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(createTitle, buildMainCharacter, genre) {
  var book = {
    title: createTitle,
    mainCharacter: buildMainCharacter,
    pageCount: calculatePageCount(createTitle),
    genre: `fantasy`
  }
  return book;
}

function editBook(book) {
  return book.pageCount = (book.pageCount * .75);
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
