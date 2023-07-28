import axios from "axios";

const searchMovie = async function (title) {

    return await axios.get('https://api.themoviedb.org/3/search/movie?api_key=db0ce6e8de411786ad825d67ed5b848b&query='+title);
}

export default searchMovie;