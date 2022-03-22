import React from 'react';
import { useRouter } from 'next/router';

export const Car = ({car}) => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Id: {id}</h1>
            <img src={car.image} alt={car.id}/>
            <h2>Color: {car.color}</h2>
        </div>
    );
}

export const getStaticProps = async({params}) => {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}