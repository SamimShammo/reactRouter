import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
import { useHistory} from 'react-router';

const Friend = (props) => {
    console.log(props)
    const {name, username, email, address, id } = props.friend;
    const {street} = address;

    const history = useHistory()
    const visitMe = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className="friend">
            <h3>Friend: {name}</h3>
            <h5>Address: {street}</h5>
            {/* <Link to={`/friend/${id}`}>Visit Me</Link> */}
            <button onClick={visitMe} className="visit">Visit Me</button>


        </div>
    );
};

export default Friend;