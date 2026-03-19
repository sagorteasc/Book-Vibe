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
            <div className="card grid shadow-md drop-shadow-2xl p-5 border border-[#13131325] lg:p-0 lg:grid-cols-2">

                <figure className="bg-[#F3F3F3] rounded-2xl m-6 p-6">
                    <img className="w-96 h-full rounded-xl" src={image} alt="Album" />
                </figure>

                <div className="space-y-2 p-5">

                    <h2 className="Titles font-bold text-3xl lg:text-[40px]">{bookName}</h2>
                    <p className="font-medium text-xl text-[#13131380]">By: {author}</p>
                    <hr className="text-[#13131315]" />
                    <p className="font-medium text-xl text-[#13131380]">{category}</p>
                    <hr className="text-[#13131315]" />
                    <p className="text-[#13131370]"><span className="bold text-[#131313]">Review: </span>{review}</p>

                    <div className="flex items-center gap-3">
                        <p className="font-bold mr-2">Tag</p>
                        {
                            tags.map((tag, idx) => <button className="btn font-medium bg-[#23BE0A25] text-[#23BE0A] w-fit border-none rounded-4xl shadow-none" key={idx}>{tag}</button>)
                        }
                    </div>
                    <hr className="text-[#13131315]" />

                    <div className="flex gap-10">
                        <div>
                            <p className="text-[#13131370]">Number of Pages: </p>
                            <p className="text-[#13131370]">Publisher: </p>
                            <p className="text-[#13131370]">Year of Publishing: </p>
                            <p className="text-[#13131370]">Rating: </p>
                        </div>
                        <div>
                            <p className="font-semibold text-[#131313]">{totalPages}</p>
                            <p className="font-semibold text-[#131313]">{publisher}</p>
                            <p className="font-semibold text-[#131313]">{yearOfPublishing}</p>
                            <p className="font-semibold text-[#131313]">{rating}</p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <button onClick={() => handleMarkAsRead(cuurentBookId)} className="btn border-[#13131330] bg-transparent text-black shadow-none">Read</button>
                        <button onClick={() => handleAddToWishList(cuurentBookId)} className="btn btn-accent text-white shadow-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;