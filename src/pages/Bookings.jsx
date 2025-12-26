import React from 'react'
// import { Link } from 'react-router-dom'
function Bookings() {
  return (
    <div>
     
    <div className='h-[1700px] w-full bg-[url(https://t4.ftcdn.net/jpg/09/59/37/59/360_F_959375952_CL8sT5uDRhceNRLFqIpvOjhWcIi4uNN7.jpg)]  bg-cover bg-no-repeat flex items-center justify-center '>
      <div className='h-[1400px] w-[1600px] border-2 border-white  rounded-t-[120px] bg-black/40'>
        <h1 className='text-8xl text-center text-gray-300 pt-8'>Check In </h1>

        <input
          type="text"
          placeholder=" Enter Full Name"
          className="w-[1300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
        />
        <input
          type="text"
          placeholder=" Enter Full Address"
          className="w-[1300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
        />
        <div className=''>
          <input
            className="w-[300px] ml-30  mb-3 border-[3px] rouned h-[90px] mt-8 text-3xl  text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
            type="number" name="" id="" placeholder='men' />
          <input
            className="w-[300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl  text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
            type="number" name="" id="" placeholder='women' />
          <input
            className="w-[300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl  text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
            type="number" name="" id="" placeholder='Children' />
        </div>
        <div className='flex'>
          <input
            type="text"
            placeholder=" Enter id proof"
            className="w-[1000px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"

          />
          <input
            className="w-[300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
            type="number" name="" id="" placeholder='Rooms' /></div>
        <input
          type="text"
          placeholder=" Enter E-mail id"
          className="w-[1000px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
        />
        <input
          className="w-[300px] ml-30  mb-3 border-[3px]  h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
          name="" id="" placeholder='passward'
          type="password"

        />


        <div className='flex gap-10 pl-[100px]'>
          <div className='flex '>
            <p className='text-4xl text-white pt-11'> Checkin time :</p>
            <input className='w-[300px] ml-14  mb-3 border-[3px]   h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4' type="date" name="" id="" />
          </div>
          <div className='flex '>
            <p className='text-4xl text-white pt-11'> Checkout time :</p>
            <input className='w-[300px] ml-14  mb-3 border-[3px]   h-[90px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4' type="date" name="" id="" />
          </div>
        </div>


        <button
          className="w-[500px] ml-[600px] bg-blue-400  mb-3 border-[3px]  h-[100px] mt-8 text-3xl text-white rounded-4xl  border-gray-300 placeholder-white pl-4"
          name="" id="" placeholder='passward'
        >Booked Room</button>

        <p className='text-3xl text-white text-center pt-10'>Thank you for your patience! Please note that all information provided is confidential and is only used for contact tracing purposes and that your information will be passed onto Government Authorities upon request.</p>

<p className='text-3xl text-gray-400 text-center pt-16'> A privacy policy should be a clear and concise document explaining how a website or app collects, uses, and protects user data. </p>
      </div>

    </div>
    </div>
  )
}

export default Bookings