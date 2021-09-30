import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FriendDetail.css'

const FriendDetail = () => {
    const {friendId} = useParams()
    const [userDe, setUserDe] = useState([])
    useEffect(() =>{
       let url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setUserDe(data))

    },[])
    const history = useHistory()
    const clickMe = () => {
        history.push('/friends')
    }
     console.log(friendId)
    return (
        <div>
            <h2>Name: {userDe.name}</h2>
            <h4>Phone: {userDe.phone}</h4>
            <h3>Id: {userDe.id}</h3>
            <button onClick={clickMe} className="visit">See All friend </button>
        </div>
    );
};

export default FriendDetail;