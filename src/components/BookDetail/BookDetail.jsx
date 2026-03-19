import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";


const BookDetail = () => {

    const { bookId } = useParams();
    const bookIdNumber = parseInt(bookId);
    const data = useLoaderData();
    const singleBookDetail = data.find(currentData => currentData.bookId === bookIdNumber)

    const { bookId: cuurentBookId, image, bookName, category, author, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBookDetail;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="card bg-base-100 text-white grid shadow-md drop-shadow-2xl p-5 border border-white lg:p-0 lg:grid-cols-2">

                <figure className="bg-[#F3F3F3] rounded-2xl m-6 p-6">
                    <img className="w-96 h-full rounded-xl" src={image} alt="Album" />
                </figure>

                <div className="space-y-2 p-5">

                    <h2 className="Titles font-bold text-3xl lg:text-[40px]">{bookName}</h2>
                    <p className="font-medium text-xl">By: {author}</p>
                    <hr />
                    <p className="font-medium text-xl">{category}</p>
                    <hr />
                    <p className="opacity-70"><span className="bold">Review: </span>{review}</p>

                    <div className="flex items-center gap-3">
                        <p className="font-bold mr-2">Tag</p>
                        {
                            tags.map((tag, idx) => <button className="btn font-medium bg-[#23BE0A25] text-[#23BE0A] w-fit border-none rounded-4xl shadow-none" key={idx}>{tag}</button>)
                        }
                    </div>
                    <hr />

                    <div className="flex gap-10">
                        <div>
                            <p className="opacity-70">Number of Pages: </p>
                            <p className="opacity-70">Publisher: </p>
                            <p className="opacity-70">Year of Publishing: </p>
                            <p className="opacity-70">Rating: </p>
                        </div>
                        <div>
                            <p className="font-semibold">{totalPages}</p>
                            <p className="font-semibold">{publisher}</p>
                            <p className="font-semibold">{yearOfPublishing}</p>
                            <p className="font-semibold">{rating}</p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <button onClick={() => handleMarkAsRead(cuurentBookId)} className="btn border-white bg-transparent shadow-none">Read</button>
                        <button onClick={() => handleAddToWishList(cuurentBookId)} className="btn btn-accent text-white shadow-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;