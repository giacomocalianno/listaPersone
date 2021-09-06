import React, {useEffect, useState} from 'react';
import '../App.css';
import HomeContainer from "./HomeContainer";
import Intestazione from "./Intestazione"
import {CircularProgress, Container, makeStyles} from "@material-ui/core";

export interface IPerson {
    createdAt: string
    name: string
    avatar: string
    surname: string
    birthDate: string
    birthCity: string
    birthCoutry: string
    id: string
}

// const people: IPerson[] = [{
//     "createdAt": "2021-08-31T11:40:55.674Z",
//     "name": "Katrine",
//     "avatar": "https://cdn.fakercloud.com/avatars/goddardlewis_128.jpg",
//     "surname": "Tillman",
//     "birthDate": " 1",
//     "birthCity": "Port Danikaland",
//     "birthCoutry": "Borders",
//     "id": "1"
// }, {
//     "createdAt": "2021-08-31T23:36:16.894Z",
//     "name": "Alana",
//     "avatar": "https://cdn.fakercloud.com/avatars/marosholly_128.jpg",
//     "surname": "Dickens",
//     "birthDate": "birthDate 2",
//     "birthCity": "High Point",
//     "birthCoutry": "Cambridgeshire",
//     "id": "2"
// }, {
//     "createdAt": "2021-08-31T20:14:53.467Z",
//     "name": "Jaqueline",
//     "avatar": "https://cdn.fakercloud.com/avatars/1markiz_128.jpg",
//     "surname": "Hirthe",
//     "birthDate": "birthDate 3",
//     "birthCity": "O'Haraland",
//     "birthCoutry": "Buckinghamshire",
//     "id": "3"
// }, {
//     "createdAt": "2021-09-01T06:39:41.547Z",
//     "name": "Scarlett",
//     "avatar": "https://cdn.fakercloud.com/avatars/miguelmendes_128.jpg",
//     "surname": "Mertz",
//     "birthDate": "birthDate 4",
//     "birthCity": "North Isadore",
//     "birthCoutry": "Buckinghamshire",
//     "id": "4"
// }, {
//     "createdAt": "2021-08-31T17:03:16.941Z",
//     "name": "Peggie",
//     "avatar": "https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg",
//     "surname": "Emard",
//     "birthDate": "birthDate 5",
//     "birthCity": "South Carmelland",
//     "birthCoutry": "Cambridgeshire",
//     "id": "5"
// }, {
//     "createdAt": "2021-09-01T10:48:40.845Z",
//     "name": "Bryce",
//     "avatar": "https://cdn.fakercloud.com/avatars/rpeezy_128.jpg",
//     "surname": "Hackett",
//     "birthDate": "birthDate 6",
//     "birthCity": "East Antonina",
//     "birthCoutry": "Cambridgeshire",
//     "id": "6"
// }, {
//     "createdAt": "2021-09-01T05:32:45.332Z",
//     "name": "Providenci",
//     "avatar": "https://cdn.fakercloud.com/avatars/leehambley_128.jpg",
//     "surname": "Volkman",
//     "birthDate": "birthDate 7",
//     "birthCity": "Port Chetborough",
//     "birthCoutry": "Bedfordshire",
//     "id": "7"
// }, {
//     "createdAt": "2021-09-01T01:54:24.704Z",
//     "name": "Stefanie",
//     "avatar": "https://cdn.fakercloud.com/avatars/hafeeskhan_128.jpg",
//     "surname": "Streich",
//     "birthDate": "birthDate 8",
//     "birthCity": "Aurora",
//     "birthCoutry": "Borders",
//     "id": "8"
// }];

const useStyles = makeStyles({
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
})

const App: React.FC = props => {

    const classes = useStyles();
    const [people, setPeople] = useState<IPerson[]>();
    const [fetching, setFetching] = useState<Boolean>(true);
    const [error, setError] = useState<Boolean>(false);

    useEffect(() => {
        // per far vedere che funziona lo spinner chiamo la fetch dopo 2 secondi
        // fetch
        fetch("https://612f5b495fc50700175f159f.mockapi.io/api/users")
            .then(res => {
                if (!res.ok) {
                    throw Error("Errore nel caricamento dei dati")
                }
                return res.json()
            })
            .then(data => {
                // salvo le persone
                setPeople(data);
            })
            .catch(err => {
                    setError(true);
                    console.log(`Errore: ${err.message}`)
                }
            )
        // stoppo lo spinner
        setFetching(false)
    }, []);


    return (
        <Container>
            <div>
                <Intestazione/>
                <div className="row p-2">
                    {/*Prima colonna*/}

                    {/*se fetching è true allora non ha finito di caricare i dati e lo spinner è attivo*/}
                    {fetching &&
                    <div className={classes.center}>
                        <CircularProgress color="primary"/>
                    </div>
                    }

                    {error && <h1>Errore nel caricamento</h1>}

                    {!fetching && !error && < HomeContainer people={people}/>}
                    <div className="col">
                        {/*seconda colonna*/}
                        col2
                    </div>
                </div>
            </div>

            {/*renderizza l'errore*/}

        </Container>
    );
}

export default App;
