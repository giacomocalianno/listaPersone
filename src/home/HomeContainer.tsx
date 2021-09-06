import React, {FC, useState} from 'react';
import {List} from "@material-ui/core";
import DetailItem from "./components/DetailItem";
import {IPerson} from "./App";
import PersonDetailDialog from "./components/PersonDetailDialog";

interface IHomeContainerProps {
    people: IPerson[];
    person?: IPerson
}


const HomeContainer: FC<IHomeContainerProps> = props => {

    const [person, setPerson] = useState<IPerson>()
    const [clicked, setClicked] = useState(false)

    const handleItemClick = (person: IPerson) => {
        console.log("handle item click")
        console.log(person)
        setPerson(person)
        setClicked(true)
    }

    const handleItemClose = () => {
        console.log("handle item close")
        setClicked(false)
    }
    const {people} = props;

    return (
        <div className="col">
            <div className="row m-2 w-100 d-flex justify-content-center align-items-center"
                 style={{backgroundColor: "lightgray", borderRadius: "8px"}}>
                <List className="w-100">
                    {people.map((person: IPerson) => (
                        <DetailItem person={person} key={person.id} handleItemClick={handleItemClick}/>
                    ))}
                </List>
                {console.log("stato di open: " + clicked)}
            </div>
            {clicked && <PersonDetailDialog person={person} open={clicked} handleItemClose={handleItemClose}/>}
        </div>
    );
};

export default HomeContainer;
