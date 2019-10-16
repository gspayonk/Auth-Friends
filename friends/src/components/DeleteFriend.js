import { axiosWithAuth } from '../utils/axiosWithAuth';

const deleteFriend = async id => {

    const result = await axiosWithAuth()

    .delete(`/api/friends/${id}`)

    .then(response => console.log('deleted friend', response));

    return result;
};

export default deleteFriend;