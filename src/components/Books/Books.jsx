import PropTypes from "prop-types";
import { use } from "react";
import Book from "../Book/Book";

const Books = ({ booksPromise }) => {

    const booksData = use(booksPromise);

    return (
        <div>
            <h3 className="Titles font-bold text-[40px] text-center">Books</h3>
            <div className="grid justify-items-center gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    booksData.map(bookData => <Book key={bookData.bookId} bookData={bookData}></Book>)
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    booksPromise: PropTypes.instanceOf(Promise).isRequired
}

export default Books;