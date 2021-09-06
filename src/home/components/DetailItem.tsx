import React, {FC, useState} from 'react';
import {Avatar, Button, Checkbox, IconButton, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';

interface IDetailListProps {
    person?: IPerson

    handleItemClick(person?: IPerson): void;

    // handleItemClick: (person?: IPerson) => void;
}

const DetailItem: FC<IDetailListProps> = props => {

    // useEffect(() => {
    //     console.log(props.person)
    // }, [props]);

    const {handleItemClick} = props;
    const [person, setPerson] = useState<IPerson>()
    const [clicked, setClicked] = useState(false)
    const [checked, setChecked] = useState(true)

    const handleClickInfo = (person?: IPerson) => {
        setClicked(true)
        setPerson(person)
    }

    return (
        <div>
            {checked ? <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={props.person?.avatar} alt="avatar"/>
                        </ListItemAvatar>
                        <ListItemText>{props.person?.name}</ListItemText>
                        <IconButton edge="end" aria-label="comments">
                            <Button startIcon={<ControlPointIcon/>} onClick={() => handleItemClick(props.person)}>More
                                info</Button>
                        </IconButton>
                        <Checkbox color="primary" checked={checked} onChange={() => setChecked(!checked)}/>

                    </ListItem>
                </div>
                {/*{clicked ? <PersonDetailDialog person={props.person} key={props.person?.id}/> : null}*/}
            </div> : null}
        </div>
    );
}

export default DetailItem;