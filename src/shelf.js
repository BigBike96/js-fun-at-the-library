function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
  sciFiShelf.unshift(book);
 }
}

function unshelfBook(book, sciFiShelf) {
    sciFiShelf.splice(1,1);
}

module.exports = {
   shelfBook,
   unshelfBook,
  // listTitles,
  // searchShelf
};
