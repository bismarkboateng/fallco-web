import { useState } from "react"

export default function useFetch(path) {
    const [data, setData] = useState([])
    
    const url = `http://localhost:8000/api/v0.0.1/${path}`

    fetch(url)
     .then(res => res.json())
     .then(data => setData(data))

    return data;
}