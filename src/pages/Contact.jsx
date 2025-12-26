import React from 'react'

const App = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-500 to-teal-400 h-full  w-full flex iteam-center justify-center pt-[100px] pb-[240px]'>
        <div className='h-[1400px] w-[1900px] bg-blue-100/40 shadow-2xl shadow-black p-4 rounded-tl-full  rounded-bl-full  '>
          <h1 className='text-8xl text-center pt-9'>Contact Us</h1>
          <hr className='w-[180px] bold ml-[710px] text-blue-500  border-4 ' />


          {/* first two inputs */}

          <div className=' pl-[210px] gap-32 pt-20 flex pb-6'>
            <div>
              <p className='text-4xl'>First name:</p>
              <input className="h-[80px] w-[600px] border-2 text-3xl" type="text" />
            </div>
            <div>
              <p className='text-4xl'>Last Name:</p>
              <input className="h-[80px] w-[600px] border-2 text-3xl" type="text" />
            </div>
          </div>

          {/* second two inputs */}

    <div className='pl-[210px] gap-32 flex pb-6'>
            <div>
              <p className='text-4xl'>E-mail:</p>
              <input className="h-[80px] w-[600px] border-2  text-3xl" name="" id="" />
            </div>
            <div>
              <p className='text-4xl'>Phone Number:</p>
            <input className='h-[80px] w-[600px] border-2 text-3xl' type="number" name="" id="" />
            </div>
          </div>

          {/* third and last  */}
          <div className='  flex pb-6'>
         <div className='pl-[210px]'>
              <p className='text-4xl'>Message :</p>
              <input className="h-[380px] w-[600px] border-2 text-3xl" type="text" />
            </div>
            <div>
              <img className='border-2 h-[380px] mt-10 ml-8 w-[900px]' src="https://www.mybudgetbreak.com/img/hotels/uk/london/royal-national-hotel/900x510-royal-national-hotel-map.jpg" alt="" />
            </div>
            </div>
 
 <button className='h-[80px] w-[1500px] mt-10 ml-[200px] rounded-4xl bg-blue-500 border-white border-2' type="submit">Submited</button>

<div className='flex justify-between text-4xl  pt-10 pr-20 pb-6'>
<ul>
  <li className='pl-64 '> The Royal Hotel</li>
</ul>
<ul className='flex gap-20'>
  <li>Home </li>
  <li>Rooms</li>
  <li>Facilities</li>
  <li>Contact Us</li>
</ul>


</div>
<ul className='text-3xl text-end pt-9 pr-14'>
  <li>TheRoyal@gmail.com</li>
  <li>6267679070</li>
</ul>
        </div>
      </div>
    </div>
  )
}

export default App