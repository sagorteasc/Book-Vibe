import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar, LabelList } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const PagesToRead = () => {

    const allBooks = useLoaderData();
    const bookpages = allBooks.map(book => {
        return {
            name: book.bookName,
            pages: book.totalPages
        }
    });

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <BarChart width="100%" height={400} responsive data={bookpages}>
                <XAxis
                    values='Book Name' />
                <YAxis dataKey="pages" />
                <Legend />
                <Bar dataKey="pages" fill="#8884d8" >
                    <LabelList dataKey="pages" position="top" />
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;