import axios from 'axios'




export const getUsers = () =>  async dispatch => {
    const res = await axios.get('http://localhost:8000/api/admin/users')

    dispatch({
        type : 'GET_USERS',
        payload : res.data
    });
};

export const getUser = (id) =>  async dispatch => {
    const res = await axios.get('http://localhost:8000/api/admin/showUser/'+id)

    dispatch({
        type : 'GET_USER',
        payload : res.data
    });
};

export const getClasses = () =>  async dispatch => {
    const res = await axios.get('http://localhost:8000/api/admin/classes')

    dispatch({
        type : 'GET_CLASSES',
        payload : res.data
    });
};

export const addUser = (newUser) =>  async dispatch => {

    const url = 'http://localhost:8000/api/admin/add/store'

    const res = await axios.post(url,newUser)
    

    dispatch({
        type : 'ADD_USER',
        payload : res.data
    });
};


