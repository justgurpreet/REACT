import axios from 'axios';
import Head from 'next/head'
export default function Detail({user}) {
    return (
        <div>
             <Head>
        <title>Create Next App</title>
        <meta name="description" content="User {user.name}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1>{user.name}, {user.email}</h1>
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    return {
        props: {user: res.data},
        revalidate: 60000 // In seconds
    }
}

export async function getStaticPaths() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = res.data;
    const paths = users.map( user => {
        return {
            params: { id: user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}