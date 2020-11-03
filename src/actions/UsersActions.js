import axios from 'axios'




export const getContacts = () =>  async dispatch => {
    const res = await axios.get('http://localhost:8000/api/admin/users')

    dispatch({
        type : 'GET_USERS',
        payload : res.data
    });
};
