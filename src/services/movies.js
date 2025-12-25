

export const getMovies = async () => {
    try{
        const response = await fetch(`./movies.json`);
        const movies = response.json();
        return movies;
    }catch(error){
        console.log(error);
    }
}