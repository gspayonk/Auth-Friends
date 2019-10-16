import React, { useEffect, useState } from 'react';
import getData from '../components/GetFriends';
import deleteFriend from '../components/DeleteFriend';

import AddFriend from './addFriend';
import FriendCard from './FriendForm';

const FriendsDashboard = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData().then(res => setFriends(res.data));
  }, [friends]);

  const deleteBud = id => {
    deleteFriend(id);
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <>
      {!friends.length ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <AddFriend />

          {friends.map(friend => {
            return (
              <FriendCard
                key={friend.id}
                id={friend.id}
                name={friend.name}
                email={friend.email}
                age={friend.age}
                deleteBud={deleteBud}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default FriendsDashboard;