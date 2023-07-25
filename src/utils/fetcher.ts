import axios from "axios";

export const getFetcher = ( url: string ) => (
    axios
        .get ( url, {
            withCredentials: true
        })
        .then((response) => response.data)

)

export const postFetcher = ( url: string, data: object ) => {
    axios
        .post ( 
            url,
            data,
            {
                withCredentials: true
            }
        )
        .then((response) => response.data)
}