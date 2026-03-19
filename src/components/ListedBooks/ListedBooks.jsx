import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utility/addToDb';
import ReadListBooks from '../ReadListBooks/ReadListBooks';
import WishListBooks from '../WishListBooks/WishListBooks';

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const readListBooks = getStoredReadList();
        const wishListBooks = getStoredWishList();
        const wishListBooksItem = allBooks.filter(book => wishListBooks.includes(book.bookId));
        const readListBooksItem = allBooks.filter(book => readListBooks.includes(book.bookId));
        setReadBooks(readListBooksItem);
        setWishListBooks(wishListBooksItem);
    }, []);

    return (
        <div className="min-h-screen">
            <h2 className="text-[28px] bg-[#13131305] rounded-2xl py-4 font-bold text-center mb-10">Books</h2>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBooks.map(readBook => <ReadListBooks key={readBook.bookId} readBook={readBook}></ReadListBooks>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishListBooks.map(wishListBook => <WishListBooks key={wishListBook.bookId} wishListBook={wishListBook}></WishListBooks>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;