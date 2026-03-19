import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";


const ReadListBooks = ({ readBook }) => {
    const { bookId, bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBook;

    return (
        <div>
            <div className="card md:card-side bg-base-100 text-white shadow-sm mb-5 border border-white">
                <figure className="bg-[#F3F3F3] rounded-2xl m-6 p-5">
                    <img className="w-40 h-44 rounded-xl md:w-full" src={image} alt={bookName} />
                </figure>
                <div className="space-y-3 p-5">
                    <h2 className="Titles font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium opacity-70">By: {author}</p>

                    <div className="flex flex-wrap items-center gap-3 md:gap-1 md:flex-nowrap">
                        <p className="font-bold mr-2">Tag:</p>
                        {
                            tags.map((tag, idx) => <button className="btn font-medium bg-[#23BE0A25] text-[#23BE0A] w-fit border-none rounded-4xl shadow-none" key={idx}>{tag}</button>)
                        }
                        <p className="flex items-center opacity-70 text-sm md:whitespace-nowrap lg:text-base lg:ml-5">
                            <CiLocationOn className="mr-2" />
                            Year of Publishing: {yearOfPublishing}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <p className="flex items-center opacity-70 mr-5 mb-2 md:mb-0">
                            <GoPerson className="mr-2" />
                            Publisher: {publisher}
                        </p>
                        <p className="flex items-center opacity-70">
                            <IoIosPaper className="mr-2" />
                            Page {totalPages}
                        </p>
                    </div>

                    <hr />

                    <div className="card-actions">
                        <button className="btn text-[#328EFF] bg-[#328EFF15] rounded-4xl border-none shadow-none">Category: {category}</button>
                        <button className="btn text-[#FFAC33] bg-[#FFAC3315] rounded-4xl border-none shadow-none">Rating: {rating}</button>

                        <Link to={`/book/${bookId}`}>
                            <button className="btn bg-[#23BE0A] text-white font-medium text-lg rounded-4xl border-none shadow-none">View Details</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

ReadListBooks.propTypes = {
    readBook: PropTypes.object.isRequired
}

export default ReadListBooks;