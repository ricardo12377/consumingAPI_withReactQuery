import axios from "axios"

const Endpoint = (id: number) => {
    return `https://rickandmortyapi.com/api/character/${id}`
}

export default (Endpoint)
