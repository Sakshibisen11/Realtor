import React from 'react'
import { useState } from 'react'

export default function CreateListing() {
    const [formData,setformData]=useState({
        type:"sale",
        name:"",
        bedrooms:1,
        bathrooms:1,
        furnished:false,
        parking:false,
        address:"",
        description:"",
        offer:false,
        regularPrice:0,
        discountedPrice:0
    })
    function onChange(){
        
    }
    const {type,name,bedrooms,bathrooms,parking,furnished,address,description,offer,regularPrice,discountedPrice}=formData;
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
        <form>
        <p className='text-lg font-semibold mt-6'>Sell/Rent</p>
            <div className='flex' >
                <button type="button" id="type" value="sale" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type==="rent"?"bg-white text-black":"bg-slate-600 text-white"}`}>Sell</button>
                <button type="button" id="type" value="rent" onClick={onChange} className={` ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type==="sale"?"bg-white text-black":"bg-slate-600 text-white"}`}>Rent</button>
            </div>
            <p className='text-lg font-semibold mt-6'>Name</p>
            <input type="text" id="name" value={name} onChange={onChange} placeholder="Name" maxLength="32" minLength="10" required 
            className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transi duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
            <div className='flex space-x-6 mb-6 ' >
                <div>
                    <p className='text-lg font-semibold'> Beds</p>
                    <input type="number" id="bedrooms" value={bedrooms} onChange={onChange} min="1" max="50" required
                    className='px-4 py-2 text-xl text-gray-700 bg-white border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' />
                </div>
                <div>
                    <p className='w-full text-lg font-semibold'>  Baths</p>
                    <input type="number" id="bathrooms" value={bathrooms} onChange={onChange} min="1" max="50" required
                    className=' w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-700 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' />
                </div>
            </div>
            <p className='text-lg font-semibold mt-6'>Parking</p>
            <div className='flex' >
                <button type="button" id="parking" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking?"bg-white text-black":"bg-slate-600 text-white"}`}>yes</button>
                <button type="button" id="parking" value={false} onClick={onChange} className={` ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking?"bg-white text-black":"bg-slate-600 text-white"}`}>no</button>
            </div>
            <p className='text-lg font-semibold mt-6'>Furnished</p>
            <div className='flex' >
                <button type="button" id="furnished" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!parking?"bg-white text-black":"bg-slate-600 text-white"}`}>yes</button>
                <button type="button" id="furnished" value={false} onClick={onChange} className={` ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${parking?"bg-white text-black":"bg-slate-600 text-white"}`}>no</button>
            </div>
            <p className='text-lg font-semibold mt-6'>Address</p>
            <textarea type="text" id="address" value={address} onChange={onChange} placeholder="Address"  required 
            className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transi duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
            <p className='text-lg font-semibold mt-6'>Description</p>
            <textarea type="text" id="description" value={description} onChange={onChange} placeholder="Description"  required 
            className=" w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transi duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
            <p className='text-lg font-semibold mt-3'>Offer</p>
            <div className='flex mb-6' >
                <button type="button" id="offer" value={true} onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${!offer?"bg-white text-black":"bg-slate-600 text-white"}`}>yes</button>
                <button type="button" id="offer" value={false} onClick={onChange} className={` ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${offer?"bg-white text-black":"bg-slate-600 text-white"}`}>no</button>
            </div>
            <div className='flex items-center mb-6'>
                <div>
                <p className='text-lg font-semibold mt-6'>Regular Price</p>  
                <div className='flex w-full justify-center items-center space-x-6'>
                    <input type="number" id="regularPrice" value={regularPrice}  onChange={onChange} min="50" max="400000000" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                    {type==="rent" && (
                    <div> 
                        <p className='text-md w-full whitespace-nowrap'>$/Month</p>
                        
                    </div>

                )}
                </div>
                
                </div>
            </div>
            {offer &&(
                  <div className='flex items-center mb-6'>
                  <div>
                  <p className='text-lg font-semibold mt-6'>Discounted Price</p>  
                  <div className='flex w-full justify-center items-center space-x-6'>
                      <input type="number" id="discountedPrice" value={discountedPrice}  onChange={onChange} min="50" max="400000000" required={offer} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                      {type==="rent" && (
                      <div> 
                          <p className='text-md w-full whitespace-nowrap'>$/Month</p>
                          
                      </div>
  
                  )}
                  </div>
                  
                  </div>
              </div>
            ) }
            <div className='mb-6'>
            <p className='text-lg font-semibold mt-6'>Images</p>  
            <p className='text-gray-600'>The first image will be the cover (max 6)</p>
            <input type="file" id="images" onChange={onChange} accept=".jpg,.png,.jpeg"  multiple required className='w-full px-3 py-1.5 text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'/>
            </div>
            <button type="submit" className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg tansition duration-150 ease-in-out'>Create Listing</button>
        </form>
    </main>
  )
}