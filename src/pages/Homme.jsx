import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter,FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";




export default function Dashboard() {

  return (
    <div >
      <section className="h-[1400px] bg-[url(https://www.casagrand.co.in/wp-content/uploads/2024/05/2.webp)] bg-no-repeat  bg-cover  " >
        <div className="">
          <div className=" pt-[40px] h-[250px] w-[full] bg-black/50 ">


            <div className="flex items-center justify-between ml-[100px] pr-[200px] ">
              <ul className="flex gap-44">
                <li className="flex"><FaPhoneAlt className="text-2xl text-blue-400" /><h1 className=" text-3xl pt-1 text-white">+91 6267679070</h1> </li>
                <li className="flex"><IoMdMail className="text-2xl text-yellow-100" /> <h1 className=" text-white text-3xl pt-1">Royal01@gmail.com</h1> </li>
              </ul>
              <ul className="flex gap-[90px] ">
                <li><CiFacebook className="text-blue-300 text-2xl" /></li>
                <li><FaTwitter className=" text-blue-400 text-2xl" /></li>
                <li><FaSquareInstagram className=" bg-gradient-to-r from-red-500 to-blue-500  text-2xl" /></li>
                <li><FaLinkedin className="text-blue-400 text-2xl " /></li>
              </ul>
            </div>
            <hr className="mt-[30px] text-white/50" />
            <div className="flex pt-5">
              <img className="h-[80px] w-[80px] flex items-center justify-center ml-[80px] " src="https://st2.depositphotos.com/5486388/8161/v/450/depositphotos_81616862-stock-illustration-hotel-logo-template.jpg" alt="" />

              <nav className="space-x-4 gap-16 flex items-center justify-between ml-[1300px]  text-5xl ">
                <Link to="/Homme" className="text-amber-200">Home</Link>
                <Link to="/bookings" className="text-white">Bookings</Link>
                <Link to="/rooms" className="text-white">Service</Link>
                <Link to="/customers" className="text-white">About Us</Link>
                <Link to="/Contact" className="text-white">Contact</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex iteam-center justify-center pt-[840px]">
          <div className="h-[200px] w-[2000px] bg-black/60 border-2 border-gray-300 flex gap-24 rounded-4xl  ">
            <input className="text-center ml-9 rounded-4xl mt-10 h-[70px] w-[270px] border-2 border-gray-300 text-3xl text-white" type="text" placeholder="Arrive" />

            <input className="text-center mt-10 rounded-4xl h-[70px] w-[270px] border-2 border-gray-300 text-3xl text-white" type="text" placeholder="Deprature" />
            <input className=" text-center mt-10 rounded-4xl h-[70px] w-[270px] border-2 border-gray-300 text-3xl text-white" type="text" placeholder="Adult" />
            {/* <input className=" text-center mt-10 rounded-4xl h-[70px] w-[270px] border-2 border-gray-300 text-3xl text-white" type="text" placeholder="Children" /> */}
            <input className=" text-center mt-10 rounded-4xl h-[70px] w-[270px] border-2 border-gray-300 text-3xl text-white" type="number" name="" id="" placeholder="Children" />
            <button className=" text-center mt-10 rounded-4xl text-3xl text-white bg-blue-500 h-[70px] w-[270px]">Check Availability</button>
          </div>
        </div>
      </section>
      <section className="h-[2200px] w-full bg-black/90  ">
        <div className="flex gap-[150px] pl-[70px] pt-[100px] ">
          <div className="border-2 border-pink-300 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a7/bc/b3/hotel-lobby.jpg" alt="" /> <h1 className="text-3xl bg-pink-200 pb-6 text-black">Lobby professional with a warm presence and a focus <br />on outstanding guest service.</h1></div>
          <div className="border-2 border-amber-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://image.made-in-china.com/2f0j00MedcRBOJiKqz/Five-Star-Luxury-Presidential-Suite-Hotel-Bedroom-Furniture-Collection-Customized-Summary-Made-in-China.jpg" alt="" /> <h1 className="text-3xl bg-amber-100  pb-6 text-black">Enter a world of luxury bedrooms, where elegance meets <br /> ultimate comfort in every detail.</h1></div>
          <div className="border-2 border-green-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://www.foodandwine.com/thmb/x1tPMljLBSsPdRjZCXuqlg1auyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/global-tastemakers-us-hotel-bars-the-bar-at-spectator-hotel-charleston-6f43707c6cd0424b91462ab647427f15.jpg" alt="" /> <h1 className="text-3xl pb-6 bg-green-200 text-black">"Indulge in handcrafted cocktails, elegant vibes, and <br /> flawless service  at our hotel bar."</h1></div>


        </div>
        <div className="flex gap-[150px] pl-[70px] pt-[100px] ">
          <div className="border-2 border-yellow-400 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://i.pinimg.com/736x/41/6d/66/416d667bed57a4643a2ebeaf96361679.jpg" alt="" /> <h1 className="text-3xl bg-yellow-400 text-black pb-6">Celebrate in style with our beautifully crafted wedding <br />  spaces made just for you.</h1></div>
          <div className="border-2 border-blue-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://sea-beach-resort-aqua-park-sharm-el-sheikh.hotelssharmelsheikh.co.uk/data/Pics/OriginalPhoto/15807/1580722/1580722777/sea-beach-resort-aqua-park-sharm-el-sheikh-pic-7.JPEG" alt="" /> <h1 className="text-3xl pb-6 bg-blue-300 text-black">Splash into fun at our water park, with thrilling slides <br />  and wave pools for all ages.</h1></div>
          <div className="border-2 border-amber-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://imgcdn.stablediffusionweb.com/2025/1/4/559fc9cb-e852-41b8-b38d-ae5654b75675.jpg" alt="" /> <h1 className="text-3xl bg-amber-200 pb-6 text-black">Experience a refined reception designed for comfort, <br />  style, and professionalism.</h1></div>
        </div>
        <div className="flex gap-[150px] pl-[70px] pt-[100px]   ">
          <div className="border-2 border-orange-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://blog.berjayahotel.com/wp-content/uploads/2022/07/5-of-our-best-family-friendly-hotels-in-malaysia-17.jpg" alt="" /> <h1 className="text-3xl bg-orange-200 text-black pb-6">A playful, secure space where children explore, create, <br />  and enjoy every moment.</h1></div>
          <div className="border-2 border-red-200 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://www.editionhotels.com/wp-content/uploads/2023/07/THE-ROOF-2.jpg" alt="" /> <h1 className="text-3xl bg-red-200 text-black pb-6">Our rooftop offers a sophisticated setting for dining, <br />  relaxation, and private events.</h1></div>
          <div className="border-2 border-gray-300 rounded-t-4xl hover:scale-110"> <img className="h-[500px] w-[800px] rounded-t-4xl " src="https://www.foodandwine.com/thmb/PaoecZHt9nF1URfTQvbrgT8_-vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/global-tastemakers-international-hotel-restaurants-mandarin-oriental-hong-kong-a6c433d632724430a0eca1ca3871d835.jpg" alt="" /> <h1 className="text-3xl bg-gray-300 text-black pb-6">An elegant dining experience defined by  gourmet <br /> flavors and impeccable service.</h1></div>
        </div>
      </section>

      <section className="h-full w-full bg-black  flex items-center justify-center gap-[800px]  ">
        <div className="pt-[60px] gap-[40px]">
          <h1 className="text-4xl text-white  pb-11  ">LuxuryEscapes.com</h1>
          <ul className="text-white text-2xl">
            <li className="pt-11"><a href="">About Us</a></li>
            <li className="pt-11"> <a href="">Best Price Guarantee</a></li>
            <li className="pt-11">  <a href="">Careers & Culture</a></li>
            <li className="pt-11">  <a href="">Become a Partner</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl text-white mt-[70px]">Help</h1>
          <ul className="text-white text-2xl">
            <li className="pt-11"> <a href="">Support</a></li>
            <li className="pt-11"> <a href="">Terms & Conditions</a></li>
            <li className="pt-11">  <a href="">Privacy Policy</a></li>
            <li className="pt-11">   <a href="">Become a Partner</a></li>
            <li className="pt-11">  <a href="">Luxury Escapes Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl text-white mt-[70px]">Location</h1>
          <ul className="text-white text-2xl">
            <li className="pt-11"> <a href="">London</a></li>
            <li className="pt-11"> <a href="">New York </a></li>
            <li className="pt-11">  <a href="">Singapur</a></li>
            <li className="pt-11">   <a href="">Dubai</a></li>
            <li className="pt-11">  <a href="">Maldives</a></li>
          </ul>
        </div>



      </section>
    </div>
  );
}