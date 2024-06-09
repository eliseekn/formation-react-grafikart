import {useEffect, useState} from "react";

export type DataProps = {
    userId: number
    id: number
    title: string
    body: string
}

const useFetch = (url: string) => {
    const [data, setData] = useState<DataProps[]|DataProps>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => setError(e.toString()))
            .finally(() => setLoading(false))
    }, [url])

    return {data, loading, error, setData}
}

export default useFetch
