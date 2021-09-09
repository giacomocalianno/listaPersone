import React, {useEffect, useState} from 'react'
import {IPerson} from './App'

export interface IFetchPeopleListReturn {
    fetching: boolean,
    error: string | null,
    people: IPerson[]
}

// CUSTOM HOOKS EXAMPLE

/**
 * @param url
 * @return IFetchPeopleListReturn
 */
export const useFetchPeopleList = (url: string): IFetchPeopleListReturn => {

    const [people, setPeople] = useState<IPerson[]>([])
    const [fetching, setFetching] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // per far vedere che funziona lo spinner chiamo la fetch dopo 2 secondi
        // fetch
        (async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    setError('Impossibile richiamare il servizio')
                }
                const data = await res.json()
                console.log(data)
                setPeople(data)

            } catch (e) {
                console.error('impossibile richiamre il servizio ', url, ' error', e)
                setError('Impossibile richiamare il servizio')
            }
        })()
        // stoppo lo spinner
        setFetching(false)
    }, [url])

    return {fetching, error, people}
}

