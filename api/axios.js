import axios from "axios";


const baseUrl = "https://jsonplaceholder.typicode.com/albums"
const userUrl = "https://jsonplaceholder.typicode.com/users"
export const fetchAlbums = async () => {
    return (await axios.get(baseUrl)).data

}

export const fetchUserDetails = async () => {
    return (await axios.get(userUrl)).data
}
