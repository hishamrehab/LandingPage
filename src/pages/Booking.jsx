import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from '../redux/actions';

const Booking = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const size = data.length;



    const [bookingData, setBookingData] = useState({});


    const handleChange = (e) => {
        const newBookingData = { ...bookingData };
        newBookingData[e.target.name] = e.target.value;
        setBookingData(newBookingData);
    };

    const handleBook = (e) => {
        e.preventDefault();
        if (size >= 3) {
            alert("Sorry, you can not book more than 3");
        } else {
            if (Object.keys(bookingData).length === 5) {
                // console.log({ ...bookingData, id: size + 1 });
                dispatch(makeBooking({ ...bookingData, id: size + 1 }));
            } else {
                alert("please select data properly");
            }
        }
    };




    return (
        <div className='md:mt-[200px] mt-[100px] mx-4 relative'>
            <div className='bg-white rounded-md max-w-6xl w-full mx-auto' >
                <form className='flex flex-col md:flex-row'>
                    {/* form */}
                    <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                        <p>Destination From</p>
                        <div className='flex flex-row'>
                            <select onChange={(e) => handleChange(e)} name='from' id='from' className='outline-none p-2 w-full' required>
                                <option value="">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>
                    {/* destination  to */}
                    <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                        <p>Destination To</p>
                        <div className='flex flex-row'>
                            <select name='to' id='to' className='outline-none p-2 w-full' onChange={(e) => handleChange(e)} required >
                                <option value="">Please Select</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>
                    {/* date */}
                    <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                        <p>Journey Date</p>
                        <input type='date' name='date' required className='outline-none p-2 w-full' onChange={(e) => handleChange(e)} />
                    </div>

                    {/* guest option */}
                    <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                        <p>Guests</p>
                        <div className='flex flex-row'>
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>
                    {/* travel class */}
                    <div className='py-1.5 px-2.5 flex-1 border-r-2'>
                        <p>Travel Class</p>
                        <div className='flex flex-row'>
                            <select name='ticketClassName' id='ticketClassName' className='outline-none p-2 w-full' required onChange={(e) => handleChange(e)}>
                                <option value="">Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>
                    {/* button */}
                    <button onClick={(e) => handleBook(e)} type='submit' className='bg-indigo-500 text-white px-9 py-1 sp-x-2 flex items-center justify-center gap-1' ><FaPlus />Book Now</button>

                </form>
            </div>
        </div>
    )
}

export default Booking