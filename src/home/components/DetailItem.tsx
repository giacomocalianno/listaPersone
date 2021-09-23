import React, {FC} from 'react';
import {Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {ArrowBack, ArrowForward, Star} from "@material-ui/icons";
import {check, toggleSuperAction, uncheck} from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import {superUserKeysSelector} from "../../redux/selectors";

interface IDetailListProps {
    person: IPerson
    arrowDirection: string
    superUser?: IPerson[]

    showClickedInfo(person?: IPerson): void
}

const DetailItem: FC<IDetailListProps> = props => {

    const {showClickedInfo, person, arrowDirection} = props;

    const dispatch = useDispatch()
    // prendo gli utenti superUser
    const superUserSelect = useSelector(superUserKeysSelector)
    // controllo se l'id dell'utente corrente è presente in questo array
    const isPresent = superUserSelect.some(key => key === person.id)
    // se è presente assegno a true la variabile superuser
    isPresent ? person["superUser"] = true : person["superUser"] = false

    const handleCheckDispatch = (person: IPerson) => {
        dispatch(check(person.id))
    }
    const handleUncheckDispatch = (person: IPerson) => {
        dispatch(uncheck(person.id))
    }
    const handleSuperUserDispatch = (person: IPerson) => {
        dispatch(toggleSuperAction(person.id))
    }

    // const superuserPerson = useSelector((state: IRootState) => state.flipSuperUser)

    return (
        <div>
            <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem onDoubleClick={() => handleSuperUserDispatch(person)}>
                        {/* avatar */}
                        <ListItemAvatar>
                            <Avatar src={person.avatar} alt="avatar"/>
                        </ListItemAvatar>

                        {/* nome / se la persona è superuser vedo stella altrimenti no*/}
                        <ListItemText>
                            {person.name} &nbsp;
                            {person.superUser ? <Star/> : null}
                        </ListItemText>

                        {/* bottone more info */}
                        <Button variant="outlined" startIcon={<ControlPointIcon/>}
                                onClick={() => showClickedInfo(person)}>More info</Button>
                        {/* <Checkbox color="primary" onChange={() => setCheckedUnchecked(person)}/>*/}

                        {/* controllo la variabile arrowDirection e a seconda del valore visualizzo o freccia a destra o sinistra*/}
                        {arrowDirection === "right" ?
                            (<IconButton aria-label="delete" onClick={() => handleCheckDispatch(person)}>
                                <ArrowForward/>
                            </IconButton>) :
                            (<IconButton aria-label="delete" onClick={() => handleUncheckDispatch(person)}>
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
