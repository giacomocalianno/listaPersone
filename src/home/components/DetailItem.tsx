import React, {FC} from 'react';
import {Avatar, Button, Checkbox, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {IPerson} from "../App";
import ControlPointIcon from '@material-ui/icons/ControlPoint';

interface IDetailListProps {
    person: IPerson

    showClickedInfo(person?: IPerson): void

    setCheckedUnchecked: (person?: IPerson) => void
}

const DetailItem: FC<IDetailListProps> = props => {

    const {showClickedInfo, person, setCheckedUnchecked} = props;
    // const [person, setPerson] = useState<IPerson>()
    // const [clicked, setClicked] = useState(false)
    //
    // const handleClickInfo = (person?: IPerson) => {
    //     setClicked(true)
    //     setPerson(person)
    // }


    return (
        <div>
            <div className="row w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={person?.avatar} alt="avatar"/>
                        </ListItemAvatar>
                        <ListItemText>{person?.name}</ListItemText>
                        <Button variant="outlined" startIcon={<ControlPointIcon/>}
                                onClick={() => showClickedInfo(person)}>More info</Button>
                        <Checkbox color="primary" onChange={() => setCheckedUnchecked(person)}/>
                    </ListItem>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;