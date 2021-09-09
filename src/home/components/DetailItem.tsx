import React, {FC} from 'react';
import {Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {ArrowBack, ArrowForward, Star} from "@material-ui/icons";

interface IDetailListProps {
    person: IPerson
    arrowDirection: string

    showClickedInfo(person?: IPerson): void

    setSuperUser: (person: IPerson) => void
    setCheckedUnchecked: (person: IPerson) => void
}

const DetailItem: FC<IDetailListProps> = props => {

    const {showClickedInfo, person, setCheckedUnchecked, arrowDirection, setSuperUser} = props;

    return (
        <div>
            <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem onDoubleClick={() => setSuperUser(person)}>
                        <ListItemAvatar>
                            <Avatar src={person?.avatar} alt="avatar"/>
                        </ListItemAvatar>
                        <ListItemText>{person?.name}</ListItemText>
                        {person.superUser ? <Star/> : null}
                        <Button variant="outlined" startIcon={<ControlPointIcon/>}
                                onClick={() => showClickedInfo(person)}>More info</Button>
                        {/*<Checkbox color="primary" onChange={() => setCheckedUnchecked(person)}/>*/}

                        {arrowDirection === "right" ?
                            (<IconButton aria-label="delete">
                                <ArrowForward onClick={() => setCheckedUnchecked(person)}/>
                            </IconButton>) :
                            (<IconButton aria-label="delete">
                                <ArrowBack onClick={() => setCheckedUnchecked(person)}/>
                            </IconButton>)
                        }
                    </ListItem>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;