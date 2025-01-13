"use client";
import Main from '@/components/Main';
import { useState } from "react";

const Workroom = (props) => {
    // Define products array in state
    const products = [
        { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
        { name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
        { name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
        { name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
        { name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
        { name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
        { name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
        { name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
        { name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
        { name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
        { name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
        { name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
        { name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
        { name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
        { name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
        { name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
        { name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
        { name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
        { name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
        { name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
        { name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
        { name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
        { name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
        { name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
        { name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
        { name: 'Samsung QLED 55"', color: 'Black', category: 'Television', price: '$999' },
        { name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
        { name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
        { name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
        { name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
        { name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
        { name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
        { name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
        { name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
        { name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
        { name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
        { name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
        { name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
        { name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
    ];

    // States for pagination and search
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const productsPerPage = 10;

    // Filter products based on search input

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
    product.color.toLowerCase() === lowerCaseSearchTerm || 
    product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
    product.price.toLowerCase().includes(lowerCaseSearchTerm)
);

   
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <Main page="workroom">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen mt-20">
                <div className='text-center my-2'>
                    <input
                        className='pl-2 border-2 rounded'
                        type="text"
                        placeholder='search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product Name</th>
                            <th scope="col" className="px-6 py-3">Color</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product, index) => (
                                <tr key={index} className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product.name}
                                    </th>
                                    <td className="px-6 py-2">{product.color}</td>
                                    <td className="px-6 py-2">{product.category}</td>
                                    <td className="px-6 py-2">{product.price}</td>
                                    <td className="px-6 py-2">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center px-6 py-4">No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <nav aria-label="Page navigation example" className='flex item-center justify-center mt-10 cursor-pointer'>
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a
                            onClick={() => paginate(currentPage - 1)}
                            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                            dark:hover:bg-gray-700 border ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                        >
                            Previous
                        </a>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <a
                                onClick={() => paginate(index + 1)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                                dark:hover:bg-gray-700 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            onClick={() => paginate(currentPage + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                            dark:hover:bg-gray-700 border ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </Main>
    );
};

export default Workroom;














































