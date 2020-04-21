import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendForm(props) {
    
  // Creating state and handleChanges function
  const [form, setForm] = React.useState({ name: '', age: '', email: '' });
  const handleChanges = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // IF our editingFriend changes, we call useEffect:
  React.useEffect(() => {

    // If editingFriend is true -> We do have someone we want to edit, 
    // so setForm() with all of our current values so we can update them.
    if (props.editingFriend) {

      setForm({
        name: props.editingFriend.name,
        age: props.editingFriend.age,
        email: props.editingFriend.email
      });

    // If editingFriend is not true -> We don't have anyone we want to edit,
    // so reset the form.
    } else {
      setForm({ name: '', age: '', email: '' });
    }
  }, [props.editingFriend]); // Listening for props.editingFriend



  /**
   * When we submit our Form successfully, two things could happen.
   * - If we're editing a friend, we call a `PUT` request
   * - If we're simply adding a friend, we call a `POST` request
   * 
   * On a successful request, we always update our state, reset our form,
   * and set our EditingFriend to `null` so the code knows we're no longer editing.
   */
  const submitHandler = event => {
    event.preventDefault();

    // If editingFriend is true -> We are editing a friend, so we want a PUT request
    if (props.editingFriend) {
      axiosWithAuth()

        .put(`/api/friends/${props.editingFriend.id}`, form)

        .then(response => {
          console.log("EDIT", response);
          props.setFriends(response.data);
          setForm({ name: '', age: '', email: '' });
          props.setEditingFriend(null);
        });

    // If editingFriend is not true -> We aren't editing a friend, so we want a POST request
    } else {

      axiosWithAuth()
        .post('/api/friends', form)

        .then(response => {
          console.log('POST', response);
          props.setFriends(response.data);
          setForm({ name: '', age: '', email: '' });
        })
        .catch(error => console.log(error.response));
    }
  };

  // Set's editingFriend to null to tell the code that we are no longer editing
  const closeEdit = error => {
    error.preventDefault();
    props.setEditingFriend(null);
  };

  return (
    <div>
      <form onSubmit = {submitHandler}>
        <input
          required
          type = 'text'
          name = 'name'
          placeholder = 'Enter Name'
          value = {form.name}
          onChange = {handleChanges}
        />
        <input
          required
          type = 'number'
          name = 'age'
          placeholder = 'Enter Age'
          value = {form.age}
          onChange = {handleChanges}
        />
        <input
          required
          type = 'email'
          name = 'email'
          placeholder = 'Enter E-Mail'
          value = {form.email}
          onChange = {handleChanges}
        />
        <button type = 'submit'>
          {props.editingFriend ? 'Submit edit' : 'Add Friend'}
        </button>
        <button onClick = {closeEdit}>Cancel</button>
      </form>
    </div>
  );
}
