import React from 'react';
import { useRouter } from 'next/router';

const Car = () => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Id: {id}</h1>
        </div>
    );
}

export default Car;
