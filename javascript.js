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

function addToLibrary(newBook){
    myLibrary.push(newBook)
}

const dummy = new Book('dum', 'dum', 1, false)
addToLibrary(dummy);
myLibrary.forEach(book=>{
    console.log(book.title)
})