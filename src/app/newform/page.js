"use client"
import Main from '@/components/Main';
import { useState, useEffect } from "react";

const Newform = (props) => {
    const initialValues = { product: "", category: "", invoiceNumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [rows, setRows] = useState([{ product: "", category: "", invoiceNumber: "" }]);
    const [row_errors, setRowErrors] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    const addRow = () => {
        setRows([...rows, { product: "", category: "", invoiceNumber: "" }]);
    };

    

    
    
return (
    <Main page= "newform">
        <div className='md:flex md:items-center md:justify-center mt-0 h-screen'>
            <div className='md:mx-0 bg-slate-300 flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='mb-5 px-2'>
                    <div className='w-full flex items-end justify-end my-5'>
                        <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                            <button type="button" onClick={addRow}>Add Item</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-row my-2'>
                        <div className='flex items-start justify-start flex-row'>
                            <label className='text-center text-xs items-center rounded md:mx-0 p-0'>Product Name</label>

                            <div className='md:mx-2'>
                                <input className='px-0 text-xs text-gray-900 rounded p-1'
                                    type="text"
                                    name='product'
                                    placeholder='Product Name' 
                                    onChange={(e) => {
                                        
                                    }}
                                    />
                            </div>
                        </div>

                        <div className='flex items-center justify-center flex-row'>
                            <label className='text-xs text-center items-center rounded md:mx-2 p-2'>Category</label>
                                <input
                                    className='text-xs text-gray-900 rounded md:mx-2 p-1'
                                    type="text"
                                    name='category'
                                    placeholder='Category' 
                                />
                        </div>

                        <div className='flex items-center justify-center flex-row'>
                            <label className='text-xs text-center items-center rounded md:mx-2 p-2'>InvoiceNumber</label>
                                <input
                                    className='text-xs text-gray-900 rounded md:mx-2 p-1'
                                    type="text"
                                    name='invoiceNumber'
                                    placeholder='invoiceNumber' 
                                />
                        </div>

                        <div className='w-full flex items-center justify-center'>
                            <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    </Main>
)
}

export default Newform;