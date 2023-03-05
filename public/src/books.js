function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let checked = books.filter((out) => out.borrows[0].returned === false);
  let returned = books.filter((returnBook) => returnBook.borrows[0].returned === true);
  return [checked, returned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let info = accounts.find((acc) => acc.id === borrow.id);
    return {...borrow, ...info};

  }).slice(0,10);
  //slice takes a number of items from the array
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
