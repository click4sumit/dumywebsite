"use client"
import Main from '@/components/Main'
import { useState, useEffect } from "react"

const ContactUsPage = (props) => {

    const initialValues = {username: "", email: "", password: "", dateofbirth: "", gender: "", region: "", other_region: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({...formValues, [name]: value })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(!values.username){
            errors.username = "Username is required";
        }

        if(!values.dateofbirth){
            errors.dateofbirth = "date of birth is required";
        }

        if(!values.gender){
            errors.gender = "Geneder is required";
        }

        if(!values.region){
            errors.region = "Region is required";

            if(!values.other_region){
                errors.other_region = "Region is required";
            }
        }

        if(!values.email){
            errors.email = "Email is required";

        }else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed 10 characters";
        }
        return errors;
    }

    return (
        <Main
            page = "form"
        >
            <div className='md:flex md:items-center md:justify-center mt-10'>
                <div className='md:mx-2 bg-slate-300'>
                    {
                        (
                            Object.keys(formErrors).length === 0 && isSubmit) ? (
                                <div className='text-lime-950 pt-40 h-screen text-center'>Signed in Successfully</div>
                        )
                        
                        : 

                        <form onSubmit={handleSubmit} method='' className='my-8 px-5 '>
                            <div className='flex items-center justify-center flex-col '>
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2'>User Name</label>
                                <input className='px-2 text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='username' value={formValues.username} placeholder='Username' 
                                onChange={handleInputs}    
                                />
                                <p className='text-red-600'>{formErrors.username}</p>
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2'>Email</label>
                                <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='email' value={formValues.email}
                                onChange={handleInputs}
                                placeholder='E-mail' />
                                <p className='text-red-600'>{formErrors.email}</p>
                            </div>
                            <div className='flex items-center justify-center flex-col'>
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2'>Password</label>
                                <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="password" name='password' value={formValues.password}
                                onChange={handleInputs}
                                placeholder='Password' />  
                                <p className='text-red-600'>{formErrors.password}</p>  
                            </div>

                            <div className='flex items-center justify-center flex-col'>
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2'>Date of Birth</label>
                                <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="date" name='dateofbirth' value={formValues.dateofbirth}
                                onChange={handleInputs}
                                placeholder='Password' />  
                                <p className='text-red-600'>{formErrors.dateofbirth}</p>  
                            </div>

                            <div className='flex items-center justify-center flex-col'>
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="gender">Select Gender:</label>
                                <select className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' name="gender" onChange={handleInputs} value={formValues.gender}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="third_gender">Third Geneder</option>  
                                </select>
                                <p className='text-red-600'>{formErrors.gender}</p>
                            </div>


                            <div className='pt-5 flex items-center justify-center flex-col'>
                                <p className='p-2'>Select your Country</p>
                                <div className='flex items-center justify-center flex-row'>
                                    <label className='w-full text-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="region">
                                        Do you belong to India?
                                    </label>
                                    <div className='flex gap-4'>
                                        <label className='flex items-center gap-2'>
                                            <input 
                                                className='text-gray-900 items-center rounded p-1' 
                                                type="radio" 
                                                name='region' 
                                                value="yes" 
                                                checked={formValues.region === 'yes' ? true : false}
                                                onChange={handleInputs}
                                            />
                                            <p>Yes</p>
                                        </label>

                                        <label className='flex items-center gap-2'>
                                            <input 
                                                className='text-gray-900 items-center rounded p-1' 
                                                type="radio" 
                                                name='region' 
                                                value="no" 
                                                checked={formValues.region === 'no' ? true : false}
                                                onChange={handleInputs} 
                                            />
                                            <p>No</p>
                                        </label>
                                    </div>  
                                </div>
                                
                                {/* Conditionally show the country select dropdown if "No" is selected */}
                                {formValues.region === 'no' && (
                                <div className='flex items-center justify-center flex-row'>
                                    <label className='w-full text-center md:w-3/4 rounded md:mx-2 p-2'>
                                        Select Country
                                    </label>
                                    <select 
                                        className='text-gray-900 w-full md:w-3/4 rounded md:mx-2 p-1' 
                                        name="other_region" 
                                        onChange={handleInputs} 
                                        value={formValues.other_region}
                                    >
                                        <option value="">Select</option>
                                        <option value="usa">USA</option>
                                        <option value="uk">UK</option>
                                        <option value="canada">Canada</option>
                                        <option value="uae">UAE</option>
                                    </select>
                                </div>
                                )}

                                {/* Error message display for "region" and "other_region" */}
                                {formErrors.region && <p className='text-red-600'>{formErrors.region}</p>}
                                {formValues.region === 'no' && formErrors.other_region && <p className='text-red-600'>{formErrors.other_region}</p>}
                            </div>
                                
                            <div className='w-full flex items-center justify-center'>
                                <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                                    <button type='submit' >Submit</button>
                                </div>    
                            </div>
                        </form>
                    }
                </div>
            </div>
        </Main>
    )
}
export default ContactUsPage;