import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import ReadListBooks from '../ReadListBooks/ReadListBooks';
import WishListBooks from '../WishListBooks/WishListBooks';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [sort, setSort] = useState('');
    const [sortReadList, setSortReadList] = useState([]);
    const [sortWishList, setSortWishList] = useState([]);

    const storeReadListBooks = getStoredReadList();
    const storeWishListBooks = getStoredWishList();



    const readListBooksItem = allBooks.filter(book => storeReadListBooks.includes(book.bookId));
    const wishListBooksItem = allBooks.filter(book => storeWishListBooks.includes(book.bookId));

    const handleSort = sortType => {
        setSort(sortType);

        // sort by rating
        if (sortType === 'Rating') {
            const sortList = readListBooksItem.sort((a, b) => b.rating - a.rating);

            setSortReadList(sortList);
            setSortWishList(sortList);
        }

        // sort by number of pages
        if (sortType === 'No of pages') {
            const sortList = readListBooksItem.sort((a, b) => a.totalPages - b.totalPages);

            setSortReadList(sortList);
            setSortWishList(sortList);
        }

        // sort by publishing year
        if (sortType === 'Publishing year') {
            const sortList = readListBooksItem.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

            setSortReadList(sortList);
            setSortWishList(sortList);
        }
    }

    return (
        <div className="min-h-screen">
            <h2 className="text-[28px] bg-[#13131305] rounded-2xl py-4 font-bold text-center mb-10">Books</h2>

            <div className="dropdown dropdown-bottom dropdown-end flex justify-end mb-5">
                <div tabIndex={0} role="button" className="bg-[#23BE0A] text-white btn m-1 font-semibold text-lg">
                    {
                        sort ? `Sort By: ${sort}` : "Sort By"
                    }
                    <IoIosArrowDown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>No of pages</a></li>
                    <li onClick={() => handleSort('Publishing year')}><a>Publishing year</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        sort ?
                            sortReadList.map(readBook =>
                                <ReadListBooks
                                    key={readBook.bookId}
                                    readBook={readBook}>
                                </ReadListBooks>)

                            : readListBooksItem.map(readBook =>
                                <ReadListBooks
                                    key={readBook.bookId}
                                    readBook={readBook}>
                                </ReadListBooks>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        sort ?
                            sortWishList.map(wishListBook =>
                                <WishListBooks
                                    key={wishListBook.bookId}
                                    wishListBook={wishListBook}>
                                </WishListBooks>)

                            : wishListBooksItem.map(wishListBook =>
                                <WishListBooks
                                    key={wishListBook.bookId}
                                    wishListBook={wishListBook}>
                                </WishListBooks>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;