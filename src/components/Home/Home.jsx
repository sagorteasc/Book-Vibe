import { Suspense } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Skeleton from "react-loading-skeleton";


const Home = () => {

    const booksPromise = fetch('/booksData.json').then(res => res.json());

    return (
        <div>
            <Banner></Banner>

            <Suspense fallback={<AlbumsGlimmer />}>
                <Books booksPromise={booksPromise}></Books>
            </Suspense>
        </div>
    );
};

function AlbumsGlimmer() {
    return (
        <div className="glimmer-panel">
            <div className="glimmer-line" />
            <div className="glimmer-line" />
            <div className="glimmer-line" />
        </div>
    );
}

export default Home;