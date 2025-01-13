"use client"
import { Main } from "next/document";
import { useState } from "react"

export default function ContactUsPage(props) {

// const [user, setUser] = useState({
//      name:"", fname:"", mname: "", level: "", section: '', address: "", date:''
// })

// let name, value;
//     const handleInputs = (e) => {
//     console.log(e)
    
//         name = e.target.name;
//         value = e.target.value;
//         setUser({...user, [name]:value})
//     }

//     const postData = async(e) => {
//         e.preventDefault();

//         const{name, fname, mname, level, section, address, date} = user

//         const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/contact`,{
//             method:"POST",
//             headers: {'Accept': 'application/json', 'Content-Type': 'application/json'
//   },
//             body: JSON.stringify({
//                 name: name,
//                 fname: fname,
//                 mname: mname,
//                 level: level,
//                 section: section,
//                 address: address,
//                 date: date,
//             })
//         }) 
        
//         const data = await res.json();
//         if(data.status === 201 || !data){
//             window.alert("Invalid details")
//             console.log("Invalid details")
//         }else {
//             window.alert("data saved successfully")
//             console.log("data saved successfully")
//         }
//         setUser({name:"", fname:"", mname: "", level: "", section: '', address: "", date:''});
// }

    return (
        <Main>
            <div className='md:flex md:items-center md:justify-center md:h-screen'>
                <div className='mt-5 md:mx-2'>
                    <form method='POST' className='my-8 px-5 '>
                        <div className='flex items-center justify-center flex-col md:flex-row'>
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Full Name</label>
                            <input className='px-2 text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='name'  value={user.name} placeholder='Name' 
                            onChange={handleInputs}    
                            />

                        </div>
                        <div className='flex items-center justify-center flex-col md:flex-row' >
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Father Name</label>
                            <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='fname' value={user.fname}
                            onChange={handleInputs}
                            placeholder='Father Name' />
                                
                        </div>

                        <div className='flex items-center justify-center flex-col md:flex-row' >
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Mother Name</label>
                            <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='mname' value={user.mname}
                                onChange={handleInputs}
                                placeholder='Mother Name' />  
                        </div>    
                        
                        <div className='flex items-center justify-center flex-col md:flex-row' >
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Class</label>
                                <select className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' name="level" value={user.level} id=""
                                onChange={handleInputs}
                                placeholder='classNme'>
                                
                                    <option value="">Select Section</option>
                                    <option value="6th">Class 6th</option>
                                    <option value="7th">Class 7th</option>
                                    <option value="8th">Class 8th</option>
                                    <option value="9th">Class 9th</option>
                                    <option value="10th">Class 10th</option>
                                    <option value="11th">Class 11th</option>
                                    <option value="12th">Class 12th</option>        
                                </select>
                        </div>

                        <div className='flex items-center justify-center flex-col md:flex-row' >
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Section</label>
                                <select className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' name="section" id="" value={user.section} 
                                onChange={handleInputs}
                                placeholder='class'>
                                 
                                    <option value="">Select Section</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>
                                </select>
                        </div>    

                        <div className='flex items-center justify-center flex-col md:flex-row' >
                            <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Address</label>
                            <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="text" name='address' value={user.address}
                                // value={user.email}
                                onChange={handleInputs}    
                               placeholder='Address' /> 
                        </div>
                            <div className='flex items-center justify-center flex-col md:flex-row' >
                                <label className='w-full text-center items-center md:items-center md:w-3/4 rounded md:mx-2 p-2' htmlFor="">Date of Birth</label>
                                <input className='text-gray-900 w-full item-center md:w-3/4 rounded md:mx-2 p-1' type="date" name='date' value={user.date}
                                onChange={handleInputs}
                                />
                        </div>

                        <div className='w-full flex items-center justify-center'>
                            <div className='mt-10 text-xl bg-amber-500 p-2 rounded shadow-white'>
                                <button type='submit' onClick={postData}>Submit</button>
                            </div>    
                        </div>
                    </form>
                </div>
            </div>
        )
        </Main>
    }

    export default ContactUsPage
