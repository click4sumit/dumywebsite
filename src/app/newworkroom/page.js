"use client";

import Main from "@/components/Main";
import { useState, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const NewWorkroom = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const products = [
        { id: 1, name: "iPhone 13", color: "Black", category: "Phone", price: "$999" },
        { id: 2, name: "MacBook Pro", color: "Silver", category: "Laptop", price: "$1999" },
        { id: 3, name: "Bose QuietComfort 35", color: "Silver", category: "Headphones", price: "$299" },
        { id: 4, name: "Dell XPS 13", color: "Black", category: "Laptop", price: "$1299" },
        { id: 5, name: "Google Pixel 6", color: "Sorta Seafoam", category: "Phone", price: "$599" },
        { id: 6, name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
        { id: 7, name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
        { id: 8, name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
        { id: 9, name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
        { id: 10, name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
        { id: 11, name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
        { id: 12, name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
        { id: 13, name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
        { id: 14, name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
        { id: 15, name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
        { id: 16, name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
        { id: 17, name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
        { id: 18, name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
        { id: 19, name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
        { id: 20, name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
        { id: 21, name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
        { id: 22, name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
        { id: 23, name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
        { id: 24, name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
        { id: 25, name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
        { id: 26, name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
        { id: 27, name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
        { id: 28, name: 'Black QLED 55"', color: 'Red', category: 'Television', price: '$999' },
        { id: 29, name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
        { id: 30, name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
        { id: 31, name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
        { id: 32, name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
        { id: 33, name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
        { id: 34, name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
        { id: 35, name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
        { id: 36, name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
        { id: 37, name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
        { id: 38, name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
        { id: 39, name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
        { id: 40, name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
        { id: 41, name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
        { id: 42, name: 'Sony Bluetooth', color: 'Red', category: 'Speaker', price: '$329' }
    ];

    const productsPerPage = 10;
    const [curentTableRow, setCurrentTableRow] = useState(false)

    // State Management
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get("page") || "1"));
    const [searchTerm, setSearchTerm] = useState({});
    const [subMenuIndex, setSubMenuIndex] = useState(null);

    // Filtering Products
    const filteredProducts = products.filter((product) =>
        Object.keys(searchTerm).every((key) =>
            product[key]?.toLowerCase().includes(searchTerm[key].toLowerCase())
        )
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle Search Input Change
    const handleSearchChange = (property, value) => {
        const updatedSearchTerm = { ...searchTerm, [property]: value };
        setSearchTerm(updatedSearchTerm);

        const updatedSearchParams = new URLSearchParams();
        for (const key in updatedSearchTerm) {
            if (updatedSearchTerm[key]) {
                updatedSearchParams.set(key, updatedSearchTerm[key]);
            }
        }
        router.push(`/newworkroom?${updatedSearchParams.toString()}`);
    };

    // Pagination Navigation
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        router.push(`/newworkroom?page=${pageNumber}`);
    };

    // const handleEdit = (product) => {
    //     const productData = JSON.stringify(product);
    //     router.push(`/handleReaction?data=${encodeURIComponent(productData)}`);
    // };

    // Render Table Headers
    const renderHeaders = () => {
        const headers = ["name", "color", "category", "price"];
        return headers.map((property) => (
            <th key={property} className="px-6 py-2">
                <input
                    placeholder={`Search ${property}`}
                    type="text"
                    className="border text-xs py-1 px-2 rounded-lg"
                    value={searchTerm[property] || ""}
                    onChange={(e) => handleSearchChange(property, e.target.value)}
                />
            </th>
        ));
    };

    return (
        <Main page="workroom">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {renderHeaders()}
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product, index) => (
                            <tr key={product.id} className="border-b">
                                <th className="px-6 py-2">{product.name}</th>
                                <td className="px-6 py-2">{product.color}</td>
                                <td className="px-6 py-2">{product.category}</td>
                                <td className="px-6 py-2">{product.price}</td>
                                <td className="px-6 py-2">
                                    <button
                                        onClick={() =>
                                            setSubMenuIndex(subMenuIndex === index ? null : index)
                                        }
                                    >
                                        <EllipsisVertical size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation" className="flex items-center justify-center mt-10">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <button
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            className={`px-3 h-8 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                        >
                            Previous
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => paginate(index + 1)}
                                className={`px-3 h-8 ${
                                    currentPage === index + 1 ? "bg-blue-50 text-blue-600" : ""
                                }`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            className={`px-3 h-8 ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>


            {subMenuIndex !== null && (
                <div
                    className="fixed top-0 left-0 h-screen w-full"
                    onClick={() => {
                        setCurrentTableRow(false);
                        setSubMenuIndex(null);
                        document.body.classList.toggle('overflow-hidden');
                    }}
                >
                    {currentProducts[subMenuIndex] && (
                        <div
                            className="absolute right-24 mt-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg p-2"
                            style={{ width: 200, left: curentTableRow.x - 100, top: curentTableRow.y - 100 }}
                        >
                            
                            <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
                                Delete
                            </button>
                            <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
                                View Details
                            </button>
                            <button
                                onClick={() =>
                                    router.push(`/handleaction?id=${currentProducts[subMenuIndex].id}`)
                                }
                                className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            )}





            {/* {subMenuIndex !== null && (

               <div className='fixed top-0 left-0 h-screen w-full' onClick={() => {

                     setCurrentTableRow(false)
                     setSubMenuIndex(null)
                     document.body.classList.toggle('overflow-hidden');
                 }}>
                     <div className="absolute right-24 mt-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg p-2" style={{width:200, left: curentTableRow.x - 200, top: curentTableRow.y}}>
                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
                             Edit
                         </button>
                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
                             Delete
                         </button>
                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
                             View Details
                         </button>
                     </div>
                 </div>
             )} */}
        </Main>
    );
};

export default NewWorkroom;








// "use client";

// import Main from "@/components/Main";
// import { useState, useEffect } from "react";
// import { EllipsisVertical } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// const NewWorkroom = () => {
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const products = [
//         { id: 1, name: "iPhone 13", color: "Black", category: "Phone", price: "$999" },
//         { id: 2, name: "MacBook Pro", color: "Silver", category: "Laptop", price: "$1999" },
//         { id: 3, name: "Bose QuietComfort 35", color: "Silver", category: "Headphones", price: "$299" },
//         { id: 4, name: "Dell XPS 13", color: "Black", category: "Laptop", price: "$1299" },
//         { id: 5, name: "Google Pixel 6", color: "Sorta Seafoam", category: "Phone", price: "$599" },
//         { id: 6, name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//         { id: 7, name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//         { id: 8, name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//         { id: 9, name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//         { id: 10, name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//         { id: 11, name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//         { id: 12, name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//         { id: 13, name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//         { id: 14, name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//         { id: 15, name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//         { id: 16, name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//         { id: 17, name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//         { id: 18, name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//         { id: 19, name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//         { id: 20, name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//         { id: 21, name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//         { id: 22, name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//         { id: 23, name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//         { id: 24, name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//         { id: 25, name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//         { id: 26, name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//         { id: 27, name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//         { id: 28, name: 'Black QLED 55"', color: 'Red', category: 'Television', price: '$999' },
//         { id: 29, name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//         { id: 30, name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//         { id: 31, name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//         { id: 32, name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//         { id: 33, name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//         { id: 34, name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//         { id: 35, name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//         { id: 36, name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//         { id: 37, name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//         { id: 38, name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//         { id: 39, name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//         { id: 40, name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//         { id: 41, name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
//         { id: 42, name: 'Sony Bluetooth', color: 'Red', category: 'Speaker', price: '$329' }
//         // (Truncated for brevity, add the rest of your product data)
//     ];

//     const productsPerPage = 10;

//     const [currentPage, setCurrentPage] = useState(
//         parseInt(searchParams.get("page") || "1")
//     );
//     const [searchTerm, setSearchTerm] = useState({
//         name: searchParams.get("name") || "",
//         color: searchParams.get("color") || "",
//         category: searchParams.get("category") || "",
//         price: searchParams.get("price") || "",
//     });
//     const [subMenuIndex, setSubMenuIndex] = useState(null);
//     const [currentTableRow, setCurrentTableRow] = useState(null);

//     // Filtered Products
//     const filteredProducts = products.filter((product) =>
//         Object.keys(searchTerm).every((key) =>
//             product[key]?.toLowerCase().includes(searchTerm[key].toLowerCase())
//         )
//     );

//     // Pagination
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Handle Search Input Change
//     const handleSearchChange = (property, value) => {
//         const updatedSearchTerm = { ...searchTerm, [property]: value };
//         setSearchTerm(updatedSearchTerm);

//         const updatedSearchParams = new URLSearchParams();
//         for (const key in updatedSearchTerm) {
//             if (updatedSearchTerm[key]) {
//                 updatedSearchParams.set(key, updatedSearchTerm[key]);
//             }
//         }
//         router.push(`/newworkroom?${updatedSearchParams.toString()}`);
//     };

//     // Pagination Navigation
//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         router.push(`/newworkroom?page=${pageNumber}`);
//     };

//     // Dropdown Action Menu Position
//     const handleSubMenu = (index, event) => {
//         const rect = event.currentTarget.getBoundingClientRect();
//         setCurrentTableRow({ x: rect.right, y: rect.bottom });
//         setSubMenuIndex(subMenuIndex === index ? null : index);
//     };

//     // Render Table Headers
//     const renderHeaders = () => {
//         const headers = ["name", "color", "category", "price"];
//         return headers.map((property) => (
//             <th key={property} className="px-6 py-2">
//                 <input
//                     placeholder={`Search ${property}`}
//                     type="text"
//                     className="border text-xs py-1 px-2 rounded-lg"
//                     value={searchTerm[property] || ""}
//                     onChange={(e) => handleSearchChange(property, e.target.value)}
//                 />
//             </th>
//         ));
//     };

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
//                 <table className="min-w-full text-sm text-left text-gray-500">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//                         <tr>
//                             {renderHeaders()}
//                             <th className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentProducts.map((product, index) => (
//                             <tr key={product.id} className="border-b">
//                                 <td className="px-6 py-2">{product.name}</td>
//                                 <td className="px-6 py-2">{product.color}</td>
//                                 <td className="px-6 py-2">{product.category}</td>
//                                 <td className="px-6 py-2">{product.price}</td>
//                                 <td className="px-6 py-2">
//                                     <button
//                                         onClick={(e) => handleSubMenu(index, e)}
//                                         className="focus:outline-none"
//                                     >
//                                         <EllipsisVertical size={14} />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Pagination */}
//             <nav aria-label="Page navigation" className="flex items-center justify-center mt-10">
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <button
//                             onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                             disabled={currentPage === 1}
//                             className={`px-3 h-8 ${
//                                 currentPage === 1 ? "cursor-not-allowed text-gray-300" : ""
//                             }`}
//                         >
//                             Previous
//                         </button>
//                     </li>
//                     {[...Array(totalPages)].map((_, index) => (
//                         <li key={index}>
//                             <button
//                                 onClick={() => paginate(index + 1)}
//                                 className={`px-3 h-8 ${
//                                     currentPage === index + 1
//                                         ? "bg-blue-50 text-blue-600"
//                                         : ""
//                                 }`}
//                             >
//                                 {index + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//                             disabled={currentPage === totalPages}
//                             className={`px-3 h-8 ${
//                                 currentPage === totalPages
//                                     ? "cursor-not-allowed text-gray-300"
//                                     : ""
//                             }`}
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Submenu */}
//             {subMenuIndex !== null && currentTableRow && (
//                 <div
//                     className="fixed top-0 left-0 h-screen w-full"
//                     onClick={() => {
//                         setCurrentTableRow(null);
//                         setSubMenuIndex(null);
//                     }}
//                 >
//                     <div
//                         className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-2"
//                         style={{
//                             left: currentTableRow.x - 200,
//                             top: currentTableRow.y,
//                         }}
//                     >
//                     <button
//                         className="w-full px-2 py-1 text-left text-xs hover:bg-gray-100"
//                             onClick={() => {
//                             const productData = encodeURIComponent(JSON.stringify(currentProducts[subMenuIndex]));
//                             router.push(`/handleaction?data=${productData}`);
//                         }}
//                         >
//                             Edit
//                     </button>
                        
//                         <button className="w-full px-2 py-1 text-left text-xs hover:bg-gray-100">
//                             Delete
//                         </button>
//                         <button className="w-full px-2 py-1 text-left text-xs hover:bg-gray-100">
//                             View Details
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </Main>
//     );
// };

// export default NewWorkroom;



// "use client";

// import Main from '@/components/Main';
// import { useState, useEffect, useRef } from "react";
// import { EllipsisVertical } from "lucide-react";

// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// const NewWorkroom = (props) => {

//     const router = useRouter()
//     const searchParams = useSearchParams();

//     const products = [
//             { id: 1, name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//             { id: 2, name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//             { id: 3, name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//             { id: 4, name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//             { id: 5, name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
//             { id: 6, name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//             { id: 7, name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//             { id: 8, name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//             { id: 9, name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//             { id: 10, name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//             { id: 11, name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//             { id: 12, name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//             { id: 13, name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//             { id: 14, name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//             { id: 15, name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//             { id: 16, name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//             { id: 17, name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//             { id: 18, name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//             { id: 19, name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//             { id: 20, name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//             { id: 21, name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//             { id: 22, name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//             { id: 23, name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//             { id: 24, name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//             { id: 25, name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//             { id: 26, name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//             { id: 27, name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//             { id: 28, name: 'Black QLED 55"', color: 'Red', category: 'Television', price: '$999' },
//             { id: 29, name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//             { id: 30, name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//             { id: 31, name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//             { id: 32, name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//             { id: 33, name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//             { id: 34, name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//             { id: 35, name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//             { id: 36, name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//             { id: 37, name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//             { id: 38, name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//             { id: 39, name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//             { id: 40, name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//             { id: 41, name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
//             { id: 42, name: 'Sony Bluetooth', color: 'Red', category: 'Speaker', price: '$329' }
//     ];

//     const page = searchParams.get("page");

//     const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
//     const [searchTerm, setSearchTerm] = useState({});
//     const [isPopupVisible, setIsPopupVisible] = useState(null); // null means no popup is visible

//     const [subMenuIndex, setSubMenuIndex] = useState(null);
//     const [curentTableRow, setCurrentTableRow] = useState(false)

//     const productsPerPage = 10;

//     const filteredProducts = products.filter(product =>
//         Object.keys(searchTerm).every(key =>
//             product[key]?.toLowerCase().includes(searchTerm[key].toLowerCase())
//         )
//     );

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const paginate = (pageNumber) => {
        
//         if(typeof window !== "undefined"){

//             router.push(`/newworkroom?page=${pageNumber}`);
//         }

//         setCurrentPage(pageNumber)
//     }

//         const [newSearchParams, setNewSearchParams] = useSearchParams();
//             const [NewSearchTerm, setNewSearchTerm] = useState({
//                 name: newSearchParams.get("name") || "",
//                 color: newSearchParams.get("color") || "",
//                 category: newSearchParams.get("category") || "",
//                 price: newSearchParams.get("price") || ""
//         });

//         // Update search term and sync to URL
//             const handleSearchChange = (property, value) => {
//             const updatedSearchTerm = {
//                 ...searchTerm,
//                     [property]: value
//         };
//             setSearchTerm(updatedSearchTerm);

//     // Sync changes to URL
//         const updatedSearchParams = new URLSearchParams();
//             for (const key in updatedSearchTerm) {
//                 if (updatedSearchTerm[key]) { // Add only non-empty values to the URL
//                     updatedSearchParams.set(key, updatedSearchTerm[key]);
//             }
//         }
//         setSearchParams(updatedSearchParams);
//     };

//         const renderHeaders = () => {
//             let headers = [];
//             for (const property in products[0]) {
//                 if (["name", "color", "category", "price"].includes(property)) {
//                     headers.push(
//                         <th key={`header_${property}`} className="px-6 py-2">
//                             <input 
//                                 placeholder={`Search ${property}`} 
//                                 type="text" 
//                                 className='border text-xs py-1 px-2 rounded-lg'
//                                 value={searchTerm[property] || ""}
//                                 onChange={(e) => handleSearchChange(property, e.target.value)}
//                             />
//                         </th>
//                     );
//                 }
//             }
//             return headers;
//         };


// // Update search term and sync to URL
// const handleSearchChange = (property, value) => {
//     const updatedSearchTerm = {
//         ...searchTerm,
//         [property]: value
//     };
//     setSearchTerm(updatedSearchTerm);

//     // Sync changes to URL
//     const updatedSearchParams = new URLSearchParams();
//     for (const key in updatedSearchTerm) {
//         if (updatedSearchTerm[key]) { // Add only non-empty values to the URL
//             updatedSearchParams.set(key, updatedSearchTerm[key]);
//         }
//     }
//     setSearchParams(updatedSearchParams);
// };

//     // const renderHeaders = () => {
//     //     let headers = [];
//     //     for (const property in products[0]) {
//     //         if (["name", "color", "category", "price"].includes(property)) {
//     //             headers.push(
//     //                 <th key={`header_${property}`} className="px-6 py-2">
//     //                     <input 
//     //                         placeholder={`Search ${property}`} 
//     //                         type="text" 
//     //                         className='border text-xs py-1 px-2 rounded-lg'
//     //                         value={searchTerm[property] || ""}
//     //                         onChange={(e) => setSearchTerm({
//     //                             ...searchTerm, 
//     //                             [property]: e.target.value
//     //                         })}
//     //                     />
//     //                 </th>
//     //             );
//     //         }
//     //     }
//     //     return headers;
//     // };

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
//                 <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             {renderHeaders()}
//                             <th className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentProducts.map((product, index) => (
//                             <tr key={index} className="border-b dark:border-gray-700 relative">
//                                 <th className="px-6 py-2">{product.name}</th>
//                                 <td className="px-6 py-2">{product.color}</td>
//                                 <td className="px-6 py-2">{product.category}</td>
//                                 <td className="px-6 py-2">{product.price}</td>
//                                 <td className="px-6 py-2 relative">
//                                     <button
//                                         onClick={(e) => {
//                                             document.body.classList.toggle('overflow-hidden');
//                                             setSubMenuIndex(subMenuIndex === index ? null : index);
//                                             setCurrentTableRow(e.currentTarget.getBoundingClientRect());
//                                         }}
//                                         >
//                                             <EllipsisVertical size={14} />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <nav aria-label="Page navigation" className='flex items-center justify-center mt-10'>
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <button
//                             onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                             className={`px-3 h-8 text-gray-500 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Previous
//                         </button>
//                     </li>
                    
//                     {[...Array(totalPages)].map((_, index) => (
//                         <li key={index}>
//                             <button
//                                 onClick={() => paginate(index + 1)}
//                                 className={`px-3 h-8 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
//                             >
//                                 {index + 1}
//                             </button>
//                         </li>
//                     ))}
                    
//                     <li>
//                         <button
//                             onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//                             className={`px-3 h-8 text-gray-500 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>

//             {subMenuIndex !== null && (

//                 <div className='fixed top-0 left-0 h-screen w-full' onClick={() => {

//                     setCurrentTableRow(false)
//                     setSubMenuIndex(null)
//                     document.body.classList.toggle('overflow-hidden');
//                 }}>
//                     <div className="absolute right-24 mt-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg p-2" style={{width:200, left: curentTableRow.x - 200, top: curentTableRow.y}}>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             Edit
//                         </button>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             Delete
//                         </button>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             View Details
//                         </button>
//                     </div>
//                 </div>
//             )} 
//         </Main>
//     );
// };

// export default NewWorkroom;
































































// "use client";

// import Main from '@/components/Main';

// import { useState, useRef } from "react";

// import { EllipsisVertical } from "lucide-react";

// const NewWorkroom = (props) => {
//     const products = [
//             { id: 1, name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//             { id: 2, name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//             { id: 3, name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//             { id: 4, name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//             { id: 5, name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
//             { id: 6, name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//             { id: 7, name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//             { id: 8, name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//             { id: 9, name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//             { id: 10, name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//             { id: 11, name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//             { id: 12, name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//             { id: 13, name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//             { id: 14, name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//             { id: 15, name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//             { id: 16, name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//             { id: 17, name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//             { id: 18, name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//             { id: 19, name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//             { id: 20, name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//             { id: 21, name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//             { id: 22, name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//             { id: 23, name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//             { id: 24, name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//             { id: 25, name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//             { id: 26, name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//             { id: 27, name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//             { id: 28, name: 'Black QLED 55"', color: 'Red', category: 'Television', price: '$999' },
//             { id: 29, name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//             { id: 30, name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//             { id: 31, name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//             { id: 32, name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//             { id: 33, name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//             { id: 34, name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//             { id: 35, name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//             { id: 36, name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//             { id: 37, name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//             { id: 38, name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//             { id: 39, name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//             { id: 40, name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//             { id: 41, name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
//             { id: 42, name: 'Sony Bluetooth', color: 'Red', category: 'Speaker', price: '$329' }
//     ];

//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState({});
//     const [isPopupVisible, setIsPopupVisible] = useState(null); // null means no popup is visible

//     const [subMenuIndex, setSubMenuIndex] = useState(null);
//     const [curentTableRow, setCurrentTableRow] = useState(false)

//     const productsPerPage = 10;

//     const filteredProducts = products.filter(product =>
//         Object.keys(searchTerm).every(key =>
//             product[key]?.toLowerCase().includes(searchTerm[key].toLowerCase())
//         )
//     );

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const renderHeaders = () => {
//         let headers = [];
//         for (const property in products[0]) {
//             if (["name", "color", "category", "price"].includes(property)) {
//                 headers.push(
//                     <th key={`header_${property}`} className="px-6 py-2">
//                         <input 
//                             placeholder={`Search ${property}`} 
//                             type="text" 
//                             className='border text-xs py-1 px-2 rounded-lg'
//                             value={searchTerm[property] || ""}
//                             onChange={(e) => setSearchTerm({
//                                 ...searchTerm, 
//                                 [property]: e.target.value
//                             })}
//                         />
//                     </th>
//                 );
//             }
//         }
//         return headers;
//     };

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
//                 <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             {renderHeaders()}
//                             <th className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentProducts.map((product, index) => (
//                             <tr key={index} className="border-b dark:border-gray-700 relative">
//                                 <th className="px-6 py-2">{product.name}</th>
//                                 <td className="px-6 py-2">{product.color}</td>
//                                 <td className="px-6 py-2">{product.category}</td>
//                                 <td className="px-6 py-2">{product.price}</td>
//                                 <td className="px-6 py-2 relative">
//                                     <button onClick={(e) => {

//                                         document.body.classList.toggle('overflow-hidden');
//                                         setSubMenuIndex(subMenuIndex === index ? null : index)
//                                         setCurrentTableRow(e.currentTarget.getBoundingClientRect())

//                                     }}>
//                                         <EllipsisVertical size={14} />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <nav aria-label="Page navigation" className='flex items-center justify-center mt-10'>
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <button
//                             onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                             className={`px-3 h-8 text-gray-500 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Previous
//                         </button>
//                     </li>
                    
//                     {[...Array(totalPages)].map((_, index) => (
//                         <li key={index}>
//                             <button
//                                 onClick={() => paginate(index + 1)}
//                                 className={`px-3 h-8 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
//                             >
//                                 {index + 1}
//                             </button>
//                         </li>
//                     ))}
                    
//                     <li>
//                         <button
//                             onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//                             className={`px-3 h-8 text-gray-500 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>

//             {subMenuIndex !== null && (

//                 <div className='fixed top-0 left-0 h-screen w-full' onClick={() => {

//                     setCurrentTableRow(false)
//                     setSubMenuIndex(null)
//                     document.body.classList.toggle('overflow-hidden');
//                 }}>
//                     <div className="absolute right-24 mt-2 bg-slate-800 border border-gray-300 rounded-lg shadow-lg p-2" style={{width:200, left: curentTableRow.x - 200, top: curentTableRow.y}}>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             Edit
//                         </button>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             Delete
//                         </button>
//                         <button className="w-full px-2 py-1 text-left text-xs text-white hover:bg-gray-100 hover:text-black">
//                             View Details
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </Main>
//     );
// };

// export default NewWorkroom;







































// "use client";
// import Main from '@/components/Main';
// import { useState } from "react";
// import {EllipsisVertical } from "lucide-react";

// const NewWorkroom = (props) => {
//     const products = [
//         { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//         // Add other products here...
//         { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//         { name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//         { name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
//         { name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//         { name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//         { name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//         { name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//         { name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//         { name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//         { name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//         { name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//         { name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//         { name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//         { name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//         { name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//         { name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//         { name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//         { name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//         { name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//         { name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//         { name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//         { name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//         { name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//         { name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//         { name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//         { name: 'Black QLED 55"', color: 'Red', category: 'Television', price: '$999' },
//         { name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//         { name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//         { name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//         { name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//         { name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//         { name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//         { name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//         { name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//         { name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//         { name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//         { name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//         { name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//         { name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
   
//     ];

//     // States for pagination and search
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState({}); // Initialize as an object for multiple properties
    
//     const productsPerPage = 10;

//     // Filtering logic based on multiple search terms
//     const filteredProducts = products.filter(product =>
//         Object.keys(searchTerm).every(key =>
//             product[key]?.toLowerCase().includes(searchTerm[key].toLowerCase())
//         )
//     );

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const renderHeaders = () => {
//         let headers = [];
//         for (const property in products[0]) {
//             if (["name", "color", "category", "price"].includes(property)) {
//                 headers.push(
//                     <th key={`header_${property}`} scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         <input 
//                             placeholder={`Search ${property}`} 
//                             type="text" 
//                             className='border border-gray-400 text-xs py-1 px-2 rounded-lg'
//                             value={searchTerm[property] || ""} // Access property dynamically
//                             onChange={(e) => setSearchTerm({
//                                 ...searchTerm, 
//                                 [property]: e.target.value
//                             })}
//                         />
//                     </th>
//                 );
//             }
//         }
//         return headers;
//     };

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
//                 <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             {renderHeaders()}
//                             <th scope="col" className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentProducts.map((product, index) => (
//                             <tr key={index} className="border-b dark:border-gray-700">
//                                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
//                                 <td className="px-6 py-2">{product.color}</td>
//                                 <td className="px-6 py-2">{product.category}</td>
//                                 <td className="px-6 py-2">{product.price}</td>
//                                 <td className="px-6 py-2">
//                                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><EllipsisVertical size={14} /></a>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <nav aria-label="Page navigation" className='flex items-center justify-center mt-10 cursor-pointer'>
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <a
//                             onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                             className={`flex items-center justify-center px-3 h-8 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ${currentPage === 1 ? 'cursor-not-allowed' : ''} border`}
//                         >
//                             Previous
//                         </a>
//                     </li>
                    
//                     {[...Array(totalPages)].map((_, index) => (
//                         <li key={index}>
//                             <a
//                                 onClick={() => paginate(index + 1)}
//                                 className={`flex items-center justify-center px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
//                             >
//                                 {index + 1}
//                             </a>
//                         </li>
//                     ))}
                    
//                     <li>
//                         <a
//                             onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//                             className={`flex items-center justify-center px-3 h-8 text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Next
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </Main>
//     );
// };

// export default NewWorkroom;































// "use client";
// import Main from '@/components/Main';
// import { useState } from "react";

// const NewWorkroom = (props) => {
//     // Define products array in state
//     const products = [
//         { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//         { name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//         { name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
//         { name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//         { name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//         { name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//         { name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//         { name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//         { name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//         { name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//         { name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//         { name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//         { name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//         { name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//         { name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//         { name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//         { name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//         { name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//         { name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//         { name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//         { name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//         { name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//         { name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//         { name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//         { name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//         { name: 'Samsung QLED 55"', color: 'Black', category: 'Television', price: '$999' },
//         { name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//         { name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//         { name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//         { name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//         { name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//         { name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//         { name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//         { name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//         { name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//         { name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//         { name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//         { name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//         { name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
//     ];

//     // States for pagination and search
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState('');
    
//     const productsPerPage = 10;

//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const filteredProducts = products.filter(product =>
    
//         product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
//         product.color.toLowerCase() === lowerCaseSearchTerm || 
//         product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
//         product.price.toLowerCase().includes(lowerCaseSearchTerm)
//     );

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber)

//     const totalPages = Math.ceil(products.length / productsPerPage);

//     const renderHeaders = () => {
//         let headers = [];
//         for(const property in products[0]){

//             if(property === "name" || property === "color" || property === "category" || property === "price" ){

//                 headers.push(
//                     <th key={`header_${property}`} scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         <input 
//                             placeholder={`Search ${property}`} 
//                             type="text" 
//                             className='border border-gray-400 text-xs py-1 px-2 rounded-lg'
//                             value={searchTerm[property] || ""} // Ensure searchTerm is accessed dynamically
//                             onChange={(e) => setSearchTerm({
//                                 ...searchTerm, 
//                                 [property]: e.target.value
//                             })}
//                         />
//                     </th>
//                 );
//             }
//         }
//         return headers;
//     }

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen mt-10">
//                 <div className='text-center my-2'>
//                 </div>

//                 <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" className="px-6 py-3">Product Name</th>
//                             <th scope="col" className="px-6 py-3">Color</th>
//                             <th scope="col" className="px-6 py-3">Category</th>
//                             <th scope="col" className="px-6 py-3">Price</th>
//                             <th scope="col" className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         <tr className="border-b dark:border-gray-700">
//                             {renderHeaders()}
//                         </tr>

//                         {currentProducts.map((product, index) => {

//                             return (
//                                 <tr key={index}  className="border-b dark:border-gray-700">
//                                     <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
//                                     <td className="px-6 py-2">{product.color}</td>
//                                     <td className="px-6 py-2">{product.category}</td>
//                                     <td className="px-6 py-2">{product.price}</td>
//                                     <td className="px-6 py-2">
//                                         <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                                     </td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>

//             <nav aria-label="Page navigation example" className='flex item-center justify-center mt-10 cursor-pointer'>
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <a
//                             onClick={() => {
//                                 if(currentPage > 1){
//                                     paginate(currentPage - 1)
//                                 }
//                             }}
//                             className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                             dark:hover:bg-gray-700 ${currentPage === 1 ? 'cursor-not-allowed' : ''} border`}
//                         >
//                             Previous
//                         </a>
//                     </li>
                        
//                     {[...Array(totalPages)].map((_, index) => (  
//                         <li key={index} >
//                             <a
//                                 onClick={()=> paginate (index + 1)}
//                                 className={`flex items-center justify-center px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                                 dark:hover:bg-gray-700  ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
//                             >
//                                 {index + 1}
//                             </a>
//                         </li>
//                     ))}
                        
//                     <li>
//                         <a
//                             onClick={() => {
//                                 if(currentPage < totalPages){
//                                     paginate(currentPage + 1)
//                                 }
//                             }}
//                             className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                             dark:hover:bg-gray-700 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
//                         >
//                             Next
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </Main>
//     );
// };

// export default NewWorkroom;








































// "use client";
// import Main from '@/components/Main';
// import { useState } from "react";

// const NewWorkroom = (props) => {
//     const products = [
//         { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//         { name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//         { name: 'iPhone 13', color: 'Black', category: 'Phone', price: '$999' },
//         { name: 'MacBook Pro', color: 'Silver', category: 'Laptop', price: '$1999' },
//         { name: 'Bose QuietComfort 35', color: 'Silver', category: 'Headphones', price: '$299' },
//         { name: 'Acer Predator Helios 300', color: 'Blue', category: 'Gaming Laptop', price: '$1799' },
//         { name: 'Microsoft Surface Book 3', color: 'Platinum', category: 'Laptop PC', price: '$2299' },
//         { name: 'Beats Studio3', color: 'Red', category: 'Headphones', price: '$349' },
//         { name: 'Google Nest Hub', color: 'Chalk', category: 'Smart Home', price: '$99' },
//         { name: 'Samsung Galaxy Tab S7', color: 'Mystic Black', category: 'Tablet', price: '$649' },
//         { name: 'JBL Charge 4', color: 'Blue', category: 'Speaker', price: '$179' },
//         { name: 'Amazon Echo Dot', color: 'Charcoal', category: 'Smart Home', price: '$49' },
//         { name: 'Apple iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1099' },
//         { name: 'Corsair K95 RGB', color: 'Black', category: 'Accessories', price: '$199' },
//         { name: 'Sony Xperia 1 II', color: 'Purple', category: 'Phone', price: '$1199' },
//         { name: 'Dell XPS 13', color: 'Black', category: 'Laptop', price: '$1299' },
//         { name: 'Razer Blade 15', color: 'Black', category: 'Gaming Laptop', price: '$2499' },
//         { name: 'Apple Watch Series 7', color: 'Midnight', category: 'Smartwatch', price: '$399' },
//         { name: 'Sony WH-1000XM4', color: 'Silver', category: 'Headphones', price: '$349' },
//         { name: 'Google Pixel 6', color: 'Sorta Seafoam', category: 'Phone', price: '$599' },
//         { name: 'Samsung Galaxy S21', color: 'Phantom Gray', category: 'Phone', price: '$799' },
//         { name: 'Fitbit Charge 5', color: 'Graphite', category: 'Fitness Tracker', price: '$179' },
//         { name: 'Microsoft Xbox Series X', color: 'Black', category: 'Gaming Console', price: '$499' },
//         { name: 'PlayStation 5', color: 'White', category: 'Gaming Console', price: '$499' },
//         { name: 'Apple AirPods Pro', color: 'White', category: 'Headphones', price: '$249' },
//         { name: 'Nikon D5600', color: 'Black', category: 'Camera', price: '$699' },
//         { name: 'GoPro Hero 10', color: 'Black', category: 'Camera', price: '$399' },
//         { name: 'Samsung QLED 55"', color: 'Black', category: 'Television', price: '$999' },
//         { name: 'LG OLED 65"', color: 'Black', category: 'Television', price: '$2399' },
//         { name: 'Anker Soundcore 2', color: 'Black', category: 'Speaker', price: '$39' },
//         { name: 'HP Envy x360', color: 'Silver', category: 'Laptop', price: '$999' },
//         { name: 'Lenovo Yoga 7i', color: 'Slate Grey', category: 'Laptop', price: '$849' },
//         { name: 'Apple Mac Mini', color: 'Space Gray', category: 'Desktop', price: '$699' },
//         { name: 'Samsung Galaxy Watch 4', color: 'Black', category: 'Smartwatch', price: '$249' },
//         { name: 'Oculus Quest 2', color: 'White', category: 'VR Headset', price: '$299' },
//         { name: 'Logitech MX Master 3', color: 'Graphite', category: 'Mouse', price: '$99' },
//         { name: 'Razer Huntsman Elite', color: 'Black', category: 'Keyboard', price: '$199' },
//         { name: 'Dell UltraSharp Monitor', color: 'Black', category: 'Monitor', price: '$599' },
//         { name: 'Amazon Kindle Paperwhite', color: 'Black', category: 'E-reader', price: '$139' },
//         { name: 'Apple iMac 24"', color: 'Blue', category: 'Desktop', price: '$1299' },
//         { name: 'Bose SoundLink Revolve+', color: 'Silver', category: 'Speaker', price: '$329' },
        
//     ];

//     const productsPerPage = 10;
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerms, setSearchTerms] = useState({ name: '', color: '', category: '', price: '' });

//     const handleSearchChange = (e, key) => {
//         setSearchTerms(prev => ({ ...prev, [key]: e.target.value }));
//         setCurrentPage(1); // reset to first page when searching
//     };

//     const filteredProducts = products.filter(product =>
//         Object.keys(searchTerms).every(
//             key => product[key].toLowerCase().includes(searchTerms[key].toLowerCase())
//         )
//     );

//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//     const currentProducts = filteredProducts.slice(
//         (currentPage - 1) * productsPerPage,
//         currentPage * productsPerPage
//     );

//     const renderHeaders = () => (
//         Object.keys(searchTerms).map(key => (
//             <th key={`header_${key}`} className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 <input
//                     placeholder={`Search ${key.charAt(0).toUpperCase() + key.slice(1)}`}
//                     type="text"
//                     className="border border-gray-400 text-xs py-1 px-2 rounded-lg"
//                     value={searchTerms[key]}
//                     onChange={(e) => handleSearchChange(e, key)}
//                 />
//             </th>
//         ))
//     );

//     return (
//         <Main page="workroom">
//             <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen mt-10">
//                 <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             {renderHeaders()}
//                             <th className="px-6 py-3">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentProducts.map((product, index) => (
//                             <tr key={index} className="border-b dark:border-gray-700">
//                                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                     {product.name}
//                                 </th>
//                                 <td className="px-6 py-2">{product.color}</td>
//                                 <td className="px-6 py-2">{product.category}</td>
//                                 <td className="px-6 py-2">{product.price}</td>
//                                 <td className="px-6 py-2">
//                                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
//                                         Edit
//                                     </a>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <nav aria-label="Page navigation" className="flex items-center justify-center mt-10">
//                 <ul className="flex items-center -space-x-px h-8 text-sm">
//                     <li>
//                         <button
//                             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                             className={`px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                             ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
//                             disabled={currentPage === 1}
//                         >
//                             Previous
//                         </button>
//                     </li>
//                     {[...Array(totalPages)].map((_, index) => (
//                         <li key={index}>
//                             <button
//                                 onClick={() => setCurrentPage(index + 1)}
//                                 className={`px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                                 ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
//                             >
//                                 {index + 1}
//                             </button>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                             className={`px-3 h-8 leading-tight border text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
//                             ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
//                             disabled={currentPage === totalPages}
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>
//         </Main>
//     );
// };

// export default NewWorkroom;
































































