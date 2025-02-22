"use client"

import { useState,useEffect } from "react"

export default function Datafetcher() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return <div>Data: {data.title}</div>
}
