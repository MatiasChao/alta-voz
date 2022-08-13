import React from 'react';
import { withProtected } from "../hooks/route";
import { useRouter } from 'next/router';

const Detail = () => {
    const router = useRouter();

    const title = router.query.title;

    const backPage = () => {
        router.push('/dashboard');
    }

    return (
        <div className="py-4 px-4 my-4 mx-4">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => backPage()}>
                Prev
            </button>
            <h3> {title} </h3>
        </div>
    )
}

export default withProtected(Detail);