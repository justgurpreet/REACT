import React from 'react';
// import {fetchUsers} from './redux/thunkapi';
import {FETCH_USERS_REQUEST} from './redux/Actions';

//https://react-redux.js.org/api/hooks
import {useSelector, useDispatch} from 'react-redux';

export default function Users() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    let {loading, users, error} = state;

    React.useEffect(() => {
        dispatch({type: FETCH_USERS_REQUEST});
    }, []);

    return <>
    <button type="button" onClick={() => dispatch({type: FETCH_USERS_REQUEST})}>Refresh</button>
    {
        loading ? <h1>Loading....</h1> : users.map(user => <h1 key={user.id}>{user.name}</h1>)
    }
    </>
}