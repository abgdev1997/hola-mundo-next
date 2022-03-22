import { useRouter } from 'next/router';
import { Head } from 'next/head';

function Car({car}) {

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

async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/cars.json');
    const data = await req.json();

    const paths = data.map(car => {
        return { params: { id: car } }
    })

    return {
        paths,
        fallback: false
    }
}

export default Car;
