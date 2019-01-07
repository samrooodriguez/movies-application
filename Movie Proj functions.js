// This is the dummy array for testing purposes
const movies = [
    {
	"title": "Home Alone",
	"rating": "5",
  "id": 1
},
    {
		"title": "Stuart Little",
		"rating": "3",
    "id": 2
}];
// This is the search movie funciton
function search(a){
   for (var i=0; i < movies.length; i++) {
       if (movies[i].title === a) {
           return movies[i];
       }
   }
};
// This is the display moives funciton -
const displayMovies = () => console.log(movies);

//  This is the add movies funciton -
const addMovie = (title,rating,id) => movies.push({"title":title,"rating":rating, "id":id});

// This is the delete movies function, when passed in a movie to delete it will actually just delete all of the movies in the array
// function deleteMovie(input){
// 	for(var i = 0; i < movies.length; i++){
// 		if(movies[i].title === input){
// 			return movies.splice(movies[i],1);
// }
// 	}
// };
// This is the refactored DeleteMovie funciton *thank you chris lol*
const movieDelete = (movieToDelete) => {
    let movieIndexToDelete = movies.findIndex(movie => {
		return movie.title === movieToDelete.title})
    movies.splice(movieIndexToDelete, 1)
}
// This is the editMovie funciton - so far, all you can do is edit the title
function editMovie(beforeEdit,afterEdit){
for (var i=0; i < movies.length; i++) {
       if (movies[i].title === beforeEdit) {
           return movies[i].title = afterEdit;
       }
   }
};
// THIS WAS A FAILED ATTEMPT BUT I STILL NEED TO ADJUST THE DELETEMOVIES FUNCTION TO PERFORM WITH A SIMILAR DESIRED OUTCOME
// This funciton needs more work - so far all it does is run the *else* whenever a string is passed through -
// function deleteMovies(x){
// if(movies.title === x){
// 	movies.remove(x);
// }else{
// console.log("That movie does not exist");
// }
// };

// this is the updated verson of the deleteMovies function - THIS ONE SUCKED IT DIDN'T EVEN WORK
// let deleteMovies = (x) =>
// movies.splice(movies.findIndex(movie => movie.name === x));
// when ran, this will return the object that has been deleted and will update the current array of movies- ***SPECIAL NOTE*** this function will ONLY delete the last movie in the array, still need to create a search function to add into this one

// TODO: Build a search movies function and an edit movies function (edit movie function can only be built after search movie funciton is built)-
