function findAccountById(accounts, id) {
  let results = accounts.find((acc) => acc.id === id);
  /* 
  the find() method is used to find a comparison in each element in the array,
  it returns a single value, the first match as it loops through the elements 
  */
  return results;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1);
  //sort() method sorts based on the character value when sorting strings
  //add .toLowerCase() just in case if any last names in the accounts array is lowercased
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const acc = account.id;
  let result = books.forEach((book) => {
    //forEach method: takes a callback function as its argument
    //the book function is applied to every element in the array
    book.borrows.forEach((borrow) => {
      if (acc === borrow.id) {
        counter += 1;
      }
    })
  })
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const id = account.id;
  let result = books.filter((book) => book.borrows.find((theBook) => theBook.id === id && !theBook.returned));
  //filter the books that have not been returned by the given account id
  result.forEach((book) => {
    let author = authors.find((auth) => book.authorId === auth.id);
    //finds the correct author for the book by comparing the ids
    book["author"] = author;
    //addds the correct author object into the book object
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
