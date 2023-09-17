const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
Book.prototype.info = function(){
    return this.title
}

const donQuixote = new Book('Don Quixote', 'Miguel De Cervantes Saavedra', 1072, false);
const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 300, false);
const theLWW = new Book('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', 208, true);

function addToLibrary(newBook){
    myLibrary.push(newBook)
}

const dummy = new Book('dum', 'dum', 1, false)
addToLibrary(dummy);
myLibrary.forEach(book=>{
    console.log(book.title)
})