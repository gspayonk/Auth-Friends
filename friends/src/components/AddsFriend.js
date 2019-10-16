import React from 'react';
import addFriend from '../../services/addFriend';

const AddsFriend = () => {

  const [friend, setFriend] = React.useState({ name: '', age: 0, email: '' });

  const handleChanges = event => {

    const { name, value } = event.target;
    setFriend({ ...friend, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addFriend(friend);
        setFriend({ name: '', age: 0, email: '' });
      }}
    >

      <input
        type = 'text'
        name = 'name'
        value = {friend.name}
        onChange = {handleChanges}
      />

      <input
        type = 'number'
        name = 'age'
        value = {friend.age}
        onChange = {handleChanges}
      />

      <input
        type = 'email'
        name = 'email'
        value = {friend.email}
        onChange = {handleChanges}
      />

      <button>Add new friend</button>
      
    </form>
  );
};

export default AddsFriend;