function createLibrary(locationName) {
  return {name: locationName, shelves: {fantasy: [], fiction: [], nonFiction: []}};
}

function addBook(locationNameFunc, bookTitleObj) {
  var shelf = bookTitleObj.genre;
  locationNameFunc.shelves[shelf].push(bookTitleObj);
}

function checkoutBook(locationNameFunc, bookTitle, bookGenre) {
  var genreValue = bookGenre;
  if (locationNameFunc.shelves[genreValue].length === 0) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${locationNameFunc.name}`;
  } else {
    locationNameFunc.shelves[bookGenre].pop();
    return `You have now checked out ${bookTitle} from the ${locationNameFunc.name}`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
