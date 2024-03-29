import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    
    },[])
    return (
        <div>
     
            <h3>I have {friends.length} Friends</h3>
            <div className="display">
            {
                friends.map(myFriend => <Friend 
                    key={myFriend.id} 
                    friend={myFriend}
                    ></Friend>)
            }
            </div>

        </div>
    );
};

export default Friends;