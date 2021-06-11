/*
  WRITE YOUR SOLUTION HERE
*/
function Movie(title, director, genre, releaseYear, rating){
  this.title = title
  this.director = director
  this.genre = genre
  this. releaseYear = releaseYear
  this.rating = rating
}

Movie.prototype.getOverview = function(){
  return (
    `${this.title}, a ${this.genre} film was directed by
            ${this.director} was released in ${this.releaseYear}.
            It received a rating of ${this.rating}`
  )
    
}

const crap = new Movie('crap', 'mr crap', 'crapfest', 1969, 8)
console.log(crap)
console.log(crap.getOverview())