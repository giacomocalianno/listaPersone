import React, {FC, useState} from 'react';
import {List} from "@material-ui/core";
import DetailItem from "./components/DetailItem";
import {IPerson} from "./App";
import PersonDetailDialog from "./components/PersonDetailDialog";

interface IHomeContainerProps {
    people?: IPerson[];
    setPeopleChecked?: (people?: IPerson[]) => void
    setPeopleUnchecked?: (people?: IPerson[]) => void
}

const HomeContainer: FC<IHomeContainerProps> = props => {

    const {people, setPeopleChecked, setPeopleUnchecked} = props;
    console.log(people)

    const [clicked, setClicked] = useState(false)
    const [person, setPerson] = useState<IPerson>()

    const handleItemClose = () => {
        console.log("handle item close")
        setClicked(false)
    }

    const showClickedInfo = (person: IPerson) => {
        setClicked(true)
        setPerson(person)
    }

    const setCheckedUnchecked = (person?: IPerson) => {
        console.log(`Id persona cliccata ${person?.id}`)
        person!.checked = !person?.checked;
        console.log(person)
        const personeChecked = people?.filter(persona => persona.checked)
        const personeUnchecked = people?.filter(persona => !persona.checked)

        console.log("PERSONE CHECKED: " + JSON.stringify(personeChecked))
        console.log("PERSONE UNCHECKED: " + JSON.stringify(personeUnchecked))

        setPeopleChecked!(personeChecked)
        setPeopleUnchecked!(personeUnchecked)
    }

    return (
        <div>
            <div className="row m-2 w-100 d-flex justify-content-center align-items-center"
                 style={{backgroundColor: "lightgray", borderRadius: "8px"}}>
                <List className="w-100">
                    {people?.map((person: IPerson) => (
                        <DetailItem person={person} key={person.id}
                                    showClickedInfo={showClickedInfo} setCheckedUnchecked={setCheckedUnchecked}/>
                    ))}

                </List>
            </div>
            {clicked && <PersonDetailDialog person={person} open={clicked} handleItemClose={handleItemClose}/>}
        </div>
    );
};

export default HomeContainer;
