import axios from "axios";

export const getFetcher = async ( url: string ) => (
    await axios
        .get (
            url,
            {
                withCredentials: true
            }
        )
        .then(
            res => (
                res
            )
        )
        .catch(
            err => console.error(err)
        )

)

export const postFetcher = async ( url: string, data: object ) => {
    await axios
        .post ( 
            url,
            data,
            {
                withCredentials: true
            }
        )
        .then(
            res => res.data
        )
        .catch(
            err => console.error(err)
        )
}