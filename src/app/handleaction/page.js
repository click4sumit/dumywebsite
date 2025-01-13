 "use client";

import { useRouter, useSearchParams } from "next/navigation";

const HandleReaction = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

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

    // Retrieve the product ID from the query parameter
    const productId = parseInt(searchParams.get("id"), 10);

    // Find the product by ID
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-bold">Product Not Found</h1>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => router.back()}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Edit Product</h1>
            <div className="mt-4">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Color:</strong> {product.color}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> {product.price}</p>
            </div>

            {/* Example back button */}
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => router.back()}
            >
                Go Back
            </button>
        </div>
    );
};

export default HandleReaction;


















// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// const HandleReaction = () => {
//     const searchParams = useSearchParams();
//     const router = useRouter();

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
//     ];

//     // Parse the product data from the query parameter
//     const productData = JSON.parse(decodeURIComponent(searchParams.get("data") || "{}"));

//     return (
//         <div className="p-4">
//             <h1 className="text-xl font-bold">Edit Product</h1>
//             <div className="mt-4">
//                 <p><strong>Name:</strong> {productData.name}</p>
//                 <p><strong>Color:</strong> {productData.color}</p>
//                 <p><strong>Category:</strong> {productData.category}</p>
//                 <p><strong>Price:</strong> {productData.price}</p>
//             </div>

//             {/* Example back button */}
//             <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//                 onClick={() => router.back()}
//             >
//                 Go Back
//             </button>
//         </div>
//     );
// };

// export default HandleReaction;



































// // "use client";

// // import { useRouter, useSearchParams } from "next/navigation";
// // import { useState } from "react";

// // const HandleReaction = () => {
// //     const searchParams = useSearchParams();
// //     const router = useRouter();

// //     // Parse the product data from the query parameter
// //     const initialProductData = JSON.parse(decodeURIComponent(searchParams.get("data") || "{}"));

// //     // State to manage editable product data
// //     const [productData, setProductData] = useState(initialProductData);

// //     // State to manage save status
// //     const [isSaving, setIsSaving] = useState(false);

// //     // Handle input changes
// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setProductData((prev) => ({ ...prev, [name]: value }));
// //     };

// //     // Handle Save Button
// //     const handleSave = async () => {
// //         setIsSaving(true); // Indicate save in progress

// //         try {
// //             // Simulate saving to a backend
// //             // Replace the URL with your actual API endpoint
// //             const response = await fetch("/api/save-product", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //                 body: JSON.stringify(productData),
// //             });

// //             if (!response.ok) {
// //                 throw new Error("Failed to save product");
// //             }

// //             const result = await response.json();
// //             console.log("Product saved successfully:", result);

// //             // Navigate back after saving
// //             router.push("/products"); // Adjust the route as needed
// //         } catch (error) {
// //             console.error("Error saving product:", error);
// //         } finally {
// //             setIsSaving(false); // Reset saving state
// //         }
// //     };

// //     return (
// //         <div className="p-4">
// //             <h1 className="text-xl font-bold">Edit Product</h1>
// //             <div className="mt-4 space-y-4">
// //                 {/* Editable fields */}
// //                 <div>
// //                     <label className="block font-medium">Name:</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={productData.name}
// //                         onChange={handleChange}
// //                         className="border rounded px-2 py-1 w-full"
// //                     />
// //                 </div>
// //                 <div>
// //                     <label className="block font-medium">Color:</label>
// //                     <input
// //                         type="text"
// //                         name="color"
// //                         value={productData.color}
// //                         onChange={handleChange}
// //                         className="border rounded px-2 py-1 w-full"
// //                     />
// //                 </div>
// //                 <div>
// //                     <label className="block font-medium">Category:</label>
// //                     <input
// //                         type="text"
// //                         name="category"
// //                         value={productData.category}
// //                         onChange={handleChange}
// //                         className="border rounded px-2 py-1 w-full"
// //                     />
// //                 </div>
// //                 <div>
// //                     <label className="block font-medium">Price:</label>
// //                     <input
// //                         type="number"
// //                         name="price"
// //                         value={productData.price}
// //                         onChange={handleChange}
// //                         className="border rounded px-2 py-1 w-full"
// //                     />
// //                 </div>
// //             </div>

// //             {/* Save and Go Back buttons */}
// //             <div className="mt-4 space-x-2">
// //                 <button
// //                     className={`px-4 py-2 rounded ${isSaving ? "bg-gray-400" : "bg-green-500"} text-white`}
// //                     onClick={handleSave}
// //                     disabled={isSaving}
// //                 >
// //                     {isSaving ? "Saving..." : "Save"}
// //                 </button>
// //                 <button
// //                     className="px-4 py-2 bg-blue-500 text-white rounded"
// //                     onClick={() => router.back()}
// //                 >
// //                     Go Back
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default HandleReaction;








