import React, {FC, useState} from 'react';
import {List} from "@material-ui/core";
import DetailItem from "./components/DetailItem";
import {IPerson} from "./App";
import PersonDetailDialog from "./components/PersonDetailDialog";

interface IHomeContainerProps {
    people?: IPerson[];
    arrowDirection: string
}

const HomeContainer: FC<IHomeContainerProps> = props => {

    const {people, arrowDirection} = props;
    // console.log(people)

    const [clicked, setClicked] = useState(false)
    const [person, setPerson] = useState<IPerson>()

    const handleItemClose = () => {
        // funzione che chiude il dialog
        console.log("Chiudo il dialog")
        setClicked(false)
    }

    const showClickedInfo = (person: IPerson) => {
        // funzione che apre il dialog e visualizza la persona passata
        console.log("Apro il dialog")
        setClicked(true)
        setPerson(person)
    }

    return (
        <div>
            <div className="row m-2 w-100 d-flex justify-content-center align-items-center"
                 style={{backgroundColor: "lightgray", borderRadius: "8px"}}>
                <List className="w-100">
                    {people?.map((person: IPerson) => (
                        <DetailItem person={person} key={person.id} arrowDirection={arrowDirection}
                                    showClickedInfo={showClickedInfo}/>
                    ))}

                </List>
            </div>
            {/* se clicked è true allora è stato cliccato il bottone per visualizzare il dialog */}
            {clicked && <PersonDetailDialog person={person} open={clicked} handleItemClose={handleItemClose}/>}
        </div>
    );
};

export default HomeContainer;
