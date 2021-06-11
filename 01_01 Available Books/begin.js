/*
  WRITE YOUR SOLUTION HERE
*/

const Book = class {
  constructor(title, author, isbn, numcopies){
    this.title = title
    this.author = author
    this.isbn = isbn
    this.numcopies = numcopies
  }

  get availability(){
    return this.getAvailbility()
  }

  getAvailbility(){
    if(this.numcopies === 0){
      return 'Out Of Stock'
    } else if(this.numcopies < 10){
      return 'Low Stock'
    } return 'In Stock'
  }

}

const harryPotter = new Book('Prisoner of Azkaban', 'That Lady', '42069', 11)

console.log(harryPotter.availability)



 