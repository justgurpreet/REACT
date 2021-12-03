import axios from 'axios';
import React from 'react';
export default function CSRPage() {
    const [user, setUser] = React.useState();
    React.useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users/4')
        .then( response => {
            setUser(response.data.name)
        })
    }, []);
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}