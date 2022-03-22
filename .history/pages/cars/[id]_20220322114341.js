import React from 'react';
import { useRouter } from 'next/router';
import { Head } from 'next/document';

const Car = ({car}) => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>{car?.color} {car?.id}</title>
            </Head>
            <h1>Id: {id}</h1>
            <img src={car?.image} />
        </>
    );
}

async function getStaticProps({params}){
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}

export default Car;