import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";


const ReadListBooks = ({ readBook }) => {
    const { bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBook;

    return (
        <div>
            <div className="card lg:card-side shadow-sm mb-5 border border-[#13131325]">
                <figure className="bg-[#F3F3F3] rounded-2xl m-6 p-5">
                    <img className="w-full h-44 rounded-xl" src={image} alt={bookName} />
                </figure>
                <div className="space-y-3 p-5">
                    <h2 className="Titles font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium text-[#13131380]">By: {author}</p>

                    <div className="flex items-center gap-3">
                        <p className="font-bold mr-2">Tag:</p>
                        {
                            tags.map((tag, idx) => <button className="btn font-medium bg-[#23BE0A25] text-[#23BE0A] w-fit border-none rounded-4xl shadow-none" key={idx}>{tag}</button>)
                        }
                        <p className="flex items-center text-[#13131380] ml-5">
                            <CiLocationOn className="mr-2" />
                            Year of Publishing: {yearOfPublishing}
                        </p>
                    </div>

                    <div className="flex">
                        <p className="flex items-center text-[#13131360] mr-5">
                            <GoPerson className="mr-2" />
                            Publisher: {publisher}
                        </p>
                        <p className="flex items-center text-[#13131360]">
                            <IoIosPaper className="mr-2" />
                            Page {totalPages}
                        </p>
                    </div>

                    <hr className="text-[#13131325]" />

                    <div className="card-actions">
                        <button className="btn text-[#328EFF] bg-[#328EFF15] rounded-4xl border-none shadow-none">Category: {category}</button>
                        <button className="btn text-[#FFAC33] bg-[#FFAC3315] rounded-4xl border-none shadow-none">Rating: {rating}</button>
                        <button className="btn bg-[#23BE0A] text-white font-medium text-lg rounded-4xl border-none shadow-none">View Details</button>
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