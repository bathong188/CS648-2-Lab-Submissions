//STEP 1
let favMovies = [
    "Violet Evergarden",
    "Top Gun: Maverick",
    "The Grand Budapest Hotel",
    "Ninja Scroll",
    "Howl's Moving Castle",
];
console.log(favMovies[1]);

//STEP 2
let movies = new Array(5);
for (let i = 0; i < movies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);

//STEP 3
movies.splice(2, 0, "The Wind Rises");
console.log(movies.length);

//STEP 4
movies = ["Violet Evergarden", "Top Gun: Maverick", "The Grand Budapest Hotel", "Ninja Scroll", "Howl's Moving Castle"];
delete movies[0];
console.log(movies + "\n");

//STEP 5
movies = ["Violet Evergarden", "Top Gun: Maverick", "The Grand Budapest Hotel", "Ninja Scroll", "Howl's Moving Castle",
    "The Wind Rises", "Interstellar"];
for (let i in movies) {
    console.log(movies[i]);
}
console.log("\n");

//STEP 6
for (let movie of movies) {
    console.log(movie);
}
console.log("\n");

//STEP 7
movies.sort();
for (let movie of movies) {
    console.log(movie);
}
console.log("\n");

//STEP 8
let leastFavMovies = ["White Chicks", "The Lighthouse", "John Wick: Chapter 4"];
console.log("Movies I like:");
console.log("\n");
for (let movie of movies) {
    console.log(movie);
}
console.log("\n");
console.log("Movies I regret watching:");
console.log("\n");
for (let movie of leastFavMovies) {
        console.log(movie);
}
console.log("\n");

//STEP 9
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies);

//STEP 10
console.log(movies.pop());
