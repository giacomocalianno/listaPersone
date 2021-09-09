import React, {FC, useState} from 'react';
import {List} from "@material-ui/core";
import DetailItem from "./components/DetailItem";
import {IPerson} from "./App";
import PersonDetailDialog from "./components/PersonDetailDialog";

interface IHomeContainerProps {
    people?: IPerson[];
    arrowDirection: string
    setCheckedUnchecked: (person: IPerson) => void
    setSuperUser: (person: IPerson) => void
}

const HomeContainer: FC<IHomeContainerProps> = props => {

    const {people, arrowDirection, setCheckedUnchecked, setSuperUser} = props;
    // console.log(people)

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


    return (
        <div>
            <div className="row m-2 w-100 d-flex justify-content-center align-items-center"
                 style={{backgroundColor: "lightgray", borderRadius: "8px"}}>
                <List className="w-100">
                    {people?.map((person: IPerson) => (
                        <DetailItem person={person} key={person.id} arrowDirection={arrowDirection}
                                    showClickedInfo={showClickedInfo} setSuperUser={setSuperUser}
                                    setCheckedUnchecked={setCheckedUnchecked}/>
                    ))}

                </List>
            </div>
            {clicked && <PersonDetailDialog person={person} open={clicked} handleItemClose={handleItemClose}/>}
        </div>
    );
};

export default HomeContainer;
