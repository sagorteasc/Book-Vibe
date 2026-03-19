import PropTypes from "prop-types";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ bookData }) => {

    const { bookId, bookName, author, image, tags, category, rating } = bookData;

    return (
        <div className="card shadow-sm border bg-base-100 text-white border-white w-full">
            <Link to={`/book/${bookId}`}>
                <figure className="bg-[#F3F3F3] rounded-2xl m-6 p-5">
                    <img src={image} alt={bookName} className="w-40 h-52 rounded-xl" />
                </figure>
                <div className="card-body grow">
                    <div className="flex gap-2 items-center">
                        {
                            tags.map((tag, idx) => <button className="btn font-medium bg-[#23BE0A25] text-[#23BE0A] w-fit border-none rounded-4xl shadow-none" key={idx}>{tag}</button>)
                        }
                    </div>
                    <h2 className="Titles font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <hr className="border-dashed mt-2" />
                </div>
                <div className="flex justify-between px-7 pb-7">
                    <p className="font-medium">{category}</p>

                    <div className="flex items-center">
                        <p className="font-medium">{rating}</p>
                        <IoIosStarOutline></IoIosStarOutline>
                    </div>

                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    bookData: PropTypes.object.isRequired
}

export default Book;