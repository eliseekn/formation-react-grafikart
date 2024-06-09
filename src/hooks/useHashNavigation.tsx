import {useEffect, useState} from "react";

const useHashNavigation = () => {
    const [hash, setHash] = useState<string>(window.location.hash)

    useEffect(() => {
        const handleHashChange = () => setHash(location.hash)
        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    const page: string =  hash.replace('#', '')
    const param: number = parseInt(page.split('-')[1])

    return {
        page: page,
        param: param
    }
}

export default useHashNavigation
