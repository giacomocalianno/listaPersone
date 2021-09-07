import React, {FC} from 'react';
import {Avatar, Button, Checkbox, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';

interface IDetailListProps {
    person?: IPerson
    checked: boolean

    handleItemClick(person?: IPerson): void;

    showClickedInfo(person?: IPerson): void

}

const DetailItem: FC<IDetailListProps> = props => {

    const {handleItemClick, showClickedInfo, checked} = props;
    // const [person, setPerson] = useState<IPerson>()
    // const [clicked, setClicked] = useState(false)
    //
    // const handleClickInfo = (person?: IPerson) => {
    //     setClicked(true)
    //     setPerson(person)
    // }


    return (
        <div>
            {checked ? <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={props.person?.avatar} alt="avatar"/>
                        </ListItemAvatar>
                        <ListItemText>{props.person?.name}</ListItemText>
                        <Button variant="outlined" startIcon={<ControlPointIcon/>}
                                onClick={() => handleItemClick(props.person)}>More info</Button>
                        <Checkbox color="primary" onChange={() => showClickedInfo(props.person)}/>
                    </ListItem>
                </div>
            </div> : null}
        </div>
    );
}

export default DetailItem;