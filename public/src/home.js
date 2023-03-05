function sortSliceHelper (array){
  let result = array.sort((a,b) => b.count - a.count).splice(0,5);
  return result 
}

function getTotalBooksCount(books) {
  let counter = 0;
  let result = books.forEach((book) => counter+= 1);
  return counter;
}

function getTotalAccountsCount(accounts) {
  let counter = 0;
  let result = accounts.forEach((acc) => counter += 1);
  return counter;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  let result = books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if(borrow.returned === false) {
        counter += 1;
      }
    })
  });
  return counter;
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);
  //creates a new array that contains just the genres
  let common = genres.reduce((acc, genre) => {
   if(!acc[genre]){ 
     acc[genre] = {name: genre, count: 0}
   }
   acc[genre].count++
   return acc
 } , [])
  return Object.values(common).sort((genreA, genreB) => genreB.count - genreA.count).splice(0, 5)
} 


function getMostPopularBooks(books) {
  //   let allBooks = books.map((book) => book.title);
    
    let popular = books.reduce((total , book) => {
       const addBook = {
         name:book.title,
         count:book.borrows.length
       }
       total.push(addBook);
      return total;
      
      
    },[])      
    return sortSliceHelper(popular)                                              
  }

function getMostPopularAuthors(books, authors) {
 let popular = books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
       name: `${author.name.first} ${author.name.last}`,
       count: book.borrows.length
    }
  })
  return sortSliceHelper(popular);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
