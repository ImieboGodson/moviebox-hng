import axios from "axios";

export default async function getPopularMovies () {
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

        return response.data.results.slice(0,5);

    } catch(error: any) {
        throw new Error(error);
    }
}