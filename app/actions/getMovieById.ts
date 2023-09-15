import axios from "axios";

interface IParams {
    movieId: number;
}

export default async function getMovieById(params: IParams) {
    
    try {

        const { movieId } = params;

        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&append_to_response=credits`)

        return movie.data;

    } catch(error: any) {
        throw new Error('Ooops, something broke');
    }

}