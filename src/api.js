module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },
         thisIsAtest: () => console.log("this is a test")
};


