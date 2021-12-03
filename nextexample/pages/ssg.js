import axios from 'axios';

export default function SSGPage({user}) {
    return (
        <div>
            <h1>{user.name}, {user.email}</h1>
        </div>
    )
}

export async function getStaticProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/4');
    return {
        props: {user: res.data},
        revalidate: 60000 // In seconds
    }
}