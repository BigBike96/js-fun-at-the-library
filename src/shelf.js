function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
  sciFiShelf.unshift(book);
 }
}

function unshelfBook(book, sciFiShelf) {
  sciFiShelf.splice(1,1);
}

function listTitles(shelf) {
  var titles = [];
  for (i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  // console.log(titles);
  }
  return titles.join(", ");
};

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
  // searchShelf
};
