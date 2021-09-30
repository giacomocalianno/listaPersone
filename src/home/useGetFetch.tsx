import {useEffect, useState} from 'react'

export interface IGetFetchReturn<R> {
    fetching: boolean,
    error: string | null,
    data: R | null
}

// CUSTOM HOOKS EXAMPLE

/**
 * @param url
 * @return IGetFetchReturn
 */

export const useGetFetch = <R extends unknown>(url: string): IGetFetchReturn<R> => {

    const [data, setData] = useState<R | null>(null)
    const [fetching, setFetching] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // fetch
        (async () => {
            console.log('fetching in custom hook')
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    // se c'è un problema con la risposta
                    setError('Impossibile richiamare il servizio')
                }
                const data = await res.json()
                setData(data)

            } catch (e) {
                console.error('impossibile richiamre il servizio ', url, ' error', e)
                setError('Impossibile richiamare il servizio')
            }
        })()
        // stoppo lo spinner

        setFetching(false)
    }, [url])


    return {fetching, error, data}
}

