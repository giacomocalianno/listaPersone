import React, {FC} from 'react';
import {Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {ArrowBack, ArrowForward, Star} from "@material-ui/icons";
import {flipCheck, superUserPerson} from "../../redux/actions";
import {useDispatch} from 'react-redux'

interface IDetailListProps {
    person: IPerson
    arrowDirection: string
    showClickedInfo(person?: IPerson): void
}

const DetailItem: FC<IDetailListProps> = props => {

    const {showClickedInfo, person, arrowDirection} = props;
    const dispatch = useDispatch()

    const handleFlipDispatch = (person: IPerson) => {
        dispatch(flipCheck(person))
    }
    const handleSuperUserDispatch = (person: IPerson) => {
        dispatch(superUserPerson(person))
    }

    return (
        <div>
            <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem onDoubleClick={() => handleSuperUserDispatch(person)}>
                        {/* avatar */}
                        <ListItemAvatar>
                            <Avatar src={person?.avatar} alt="avatar"/>
                        </ListItemAvatar>

                        {/* nome / se la persona è superuser vedo stella altrimenti no*/}
                        <ListItemText>
                            {person?.name} &nbsp;
                            {person.superUser ? <Star/> : null}
                        </ListItemText>

                        {/* bottone more info */}
                        <Button variant="outlined" startIcon={<ControlPointIcon/>}
                                onClick={() => showClickedInfo(person)}>More info</Button>
                        {/* <Checkbox color="primary" onChange={() => setCheckedUnchecked(person)}/>*/}

                        {/* controllo la variabile arrowDirection e a seconda del valore visualizzo o freccia a destra o sinistra*/}
                        {arrowDirection === "right" ?
                            // (<IconButton aria-label="delete" onClick={() => setCheckedUnchecked(person)}>
                            //     <ArrowForward/>
                            // </IconButton>) :
                            // (<IconButton aria-label="delete" onClick={() => setCheckedUnchecked(person)}>
                            //     <ArrowBack/>
                            // </IconButton>)
                            (<IconButton aria-label="delete" onClick={() => handleFlipDispatch(person)}>
                                <ArrowForward/>
                            </IconButton>) :
                            (<IconButton aria-label="delete" onClick={() => handleFlipDispatch(person)}>
                                <ArrowBack/>
                            </IconButton>)
                        }
                    </ListItem>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;
