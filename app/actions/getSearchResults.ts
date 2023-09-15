import axios from "axios";

export interface ISearchParams {
    title: string;
}

export default async function getSearchResults(params:ISearchParams) {
    try {

        const { title } = params;

        if(!title) {
            return;
        }

        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${title}&include_adult=false&language=en-US&page=1`)

        console.log(response.data.results)

        return response.data.results;

    } catch(error: any) {
        throw new Error(error);
    }
}