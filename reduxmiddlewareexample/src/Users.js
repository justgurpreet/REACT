import React from 'react';
import {fetchUsers} from './redux/thunkapi';

//https://react-redux.js.org/api/hooks
import {useSelector, useDispatch} from 'react-redux';

export default function Users() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    let {loading, users, error} = state;

    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <>
    {
        loading ? <h1>Loading....</h1> : users.map(user => <h1 key={user.id}>{user.name}</h1>)
    }
    </>
}