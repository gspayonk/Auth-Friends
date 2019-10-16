import { axiosWithAuth } from '../utils/axiosWithAuth';

const getFriends = async () => {
    const result = await axiosWithAuth()
    .get('/api/friends')
    .then(res => res);

    return result;
};

export default getFriends;