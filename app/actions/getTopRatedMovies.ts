import axios from "axios";

export default async function getTopRatedMovies () {
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`)

        return response.data.results.slice(0,10);

    } catch(error: any) {
        throw new Error(error);
    }
}