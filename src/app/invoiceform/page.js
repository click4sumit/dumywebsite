"use client"
import Main from '@/components/Main';
import { useState, useEffect } from "react";

const Invoiceform = (props) => {

    const initialValues = { product: "", category: "", invoiceNumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [rows, setRows] = useState([{ product: "", category: "", invoiceNumber: "" }]);
    const [row_errors, setRowErrors] = useState([]); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
   
    const validate = () => {
        let _rows = [...rows];
        let _row_errors = [...row_errors];

        _rows.forEach((row, index) => {

            _row_errors[index] = {}

            if(row.product === ''){
                _row_errors[index]['product'] = true;
            }
            if(row.category === ''){
                _row_errors[index]['category'] = true;
            }
            if(row.invoiceNumber === ''){
                _row_errors[index]['invoiceNumber'] = true;
            }
        })

        setRowErrors(_row_errors)
    };
    
    const addRow = () => {
        setRows([...rows, { product: "", category: "", invoiceNumber: "" }]);
    };

    
    const deleteRow = (index) => {
        const updatedRows = rows.filter((row, i) => i !== index);
        setRows(updatedRows);
    };

    return (
        <Main page="form">
            <div className='md:flex md:items-center md:justify-center mt-0 h-screen'>
                <div className='md:mx-0 bg-slate-300 flex items-center justify-center'>
                    <form onSubmit={handleSubmit} className='mb-5 px-2'>
                        <div className='w-full flex items-end justify-end my-5'>
                            <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                                <button type="button" onClick={addRow}>Add Item</button>
                            </div>
                        </div>
                        {
                            rows.map((row, index) => (

                                <div key={index} className='flex items-center justify-center flex-row my-2'>
                                    <div className='flex items-start justify-start flex-row'>
                                        <label className='text-center text-xs items-center rounded md:mx-0 p-0'>Product Name</label>

                                        <div className='md:mx-2'>
                                            <input
                                                className='px-0 text-xs text-gray-900 rounded p-1'
                                                type="text"
                                                name='product'
                                                value={row.product}
                                                placeholder='Product Name'
                                                onChange={(e) => {

                                                    if(e.target.value !==''){
                                                        let _row_errors = [...row_errors];
                                                        if(_row_errors.hasOwnProperty(index) && _row_errors[index].hasOwnProperty('product')){
                                                            delete _row_errors[index]['product']
                                                        }
                                                        setRowErrors(_row_errors)
                                                    }
                                                    const updatedRows = [...rows];
                                                    updatedRows[index]['product'] = e.target.value
                                                    setRows(updatedRows)
                                                }} 
                                            />

                                            {(row_errors.hasOwnProperty(index) && row_errors[index].hasOwnProperty('product')) &&
                                            
                                                <p className='text-red-600 text-xs'>This is required entry</p>   
                                            }
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center flex-row'>
                                        <label className='text-xs text-center items-center rounded md:mx-2 p-2'>Category</label>
                                        <input
                                            className='text-xs text-gray-900 rounded md:mx-2 p-1'
                                            type="text"
                                            name='category'
                                            value={row.category}
                                            onChange={(e) => {

                                                if(e.target.value !==''){
                                                        let _row_errors = [...row_errors];
                                                        if(_row_errors.hasOwnProperty(index) && _row_errors[index].hasOwnProperty('category')){
                                                            delete _row_errors[index]['category']
                                                        }
                                                        setRowErrors(_row_errors)
                                                    }

                                                const updatedRows = [...rows];

                                                updatedRows[index]['category'] = e.target.value

                                                setRows(updatedRows)
                                            }}
                                            placeholder='Category' 
                                        />

                                        {
                                            (row_errors.hasOwnProperty(index) && row_errors[index].hasOwnProperty('category')) &&
                                            <p className='text-red-600 text-xs'>This is required entry</p>   
                                        }

                                    </div>
                                    <div className='flex items-center justify-center flex-row'>
                                        <label className='text-xs w-full text-center rounded md:mx-2 p-2'>Invoice No.</label>
                                        <input
                                            className='text-xs text-gray-900 rounded p-1'
                                            type="number"
                                            name='invoiceNumber'
                                            value={row.invoiceNumber}
                                            onChange={(e) => {

                                                if(e.target.value !==''){
                                                        let _row_errors = [...row_errors];
                                                        if(_row_errors.hasOwnProperty(index) && _row_errors[index].hasOwnProperty('invoiceNumber')){
                                                            delete _row_errors[index]['invoiceNumber']
                                                        }
                                                        setRowErrors(_row_errors)
                                                }

                                                const updatedRows = [...rows];

                                                updatedRows[index]['invoiceNumber'] = e.target.value

                                                setRows(updatedRows)
                                            }}
                                            placeholder='Invoice No.'
                                        />

                                        {   
                                            (row_errors.hasOwnProperty(index) && row_errors[index].hasOwnProperty('invoiceNumber')) &&
                                            <p className='text-red-600 text-xs'>This is required entry</p>   
                                        }

                                    </div>
                                    <div className='text-xl bg-amber-500 px-1 mx-2 rounded shadow-white'>
                                        <button type='button' className='text-lg' onClick={() => deleteRow(index)}>Delete item</button> {/* Delete Item Button */}
                                    </div>
                                </div>
                        ))}

                        <div className='w-full flex items-center justify-center'>
                            <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Main>
    );
}

export default Invoiceform;