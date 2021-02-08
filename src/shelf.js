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
  }
  return titles.join(", ");
}

function searchShelf(shelf, titles) {
  var shelfed = [];
  for (i = 0; i < shelf.length; i++) {
    shelfed.push(shelf[i].title);
}
  if (shelfed.includes(titles)) {
    return true
    } else {
    return false
  }
}

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
