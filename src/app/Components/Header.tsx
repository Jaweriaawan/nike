import Image from "next/image"
import design from "@/app/images/des.png"
import logo from "@/app/images/logo.png"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import lock from "@/app/images/lock.png"
import heart from "@/app/images/heart.png"
import Home from "../page";

export default function Header(){
 return <div className="font-sans">
  <div className="w-[1411px] h-[96px]">
     <div className="w-[1411px]h-[36px] bg-[#F5F5F5] flex pl-[2px]">
        <Image src={design} alt="design" className="w-[24px] h-[24px] mt-[10px] ml-[100px]" />
        <div className="w-[580.2px] h-[36px] ml-[700.8px] gap-[16px] flex items-center" >
        <Link href="/"><p className="font-semibold text-[13px] leading-[14px]">Home</p></Link>
         <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
         <Link href="/Allproducts"><p className="font-semibold text-[13px] leading-[14px]">All Products</p></Link>
        <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
        <Link href="/Productdetails"><p className="font-semibold text-[13px] leading-[14px]">Product deatils</p></Link>
        <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
        <Link href="/Help"><p className="font-semibold text-[13px] leading-[14px]">Help</p></Link>
          <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
        <Link href="/Joinus "><p className="font-semibold text-[13px] leading-[14px]">Join Us</p></Link>
        <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
        <Link href="/SignIn"><p className="font-semibold text-[13px] leading-[14px]">SignIn</p></Link>
        <hr className="border-[1px] border-[#111111] h-[12px] rotate-[-100px]" />
        <Link href="/Checkout"><p className="font-semibold text-[13px] leading-[14px]">Check out</p></Link>
        </div>
     </div>

      <div><Image src={logo} alt="logo" className=" ml-[50px] mt-[20px]" /></div>
     <div className="w-[1108px] h-[60px] ml-[107px] mt-[-50px] gap-[26px] flex items-center text-center">
       <div className="gap-[26px] flex items-center text-center mt-[20px]">
         <Link href=""><p className="font-medium text-[15px] leading-[14px] ml-[300px]">New & Featured</p></Link>
         <Link href=""><p className="font-medium text-[15px] leading-[14px]">Men</p></Link>
         <Link href=""><p className="font-medium text-[15px] leading-[14px]">Women</p></Link>
         <Link href=""><p className="font-medium text-[15px] leading-[14px]">Kids</p></Link>
         <Link href=""><p className="font-medium text-[15px] leading-[14px]">Sale</p></Link>
         <Link href=""><p className="font-medium text-[15px] leading-[14px]">SNKRS</p></Link>
       </div>

       <div className="w-[180px] h-[40px] bg-[#F5F5F5] rounded-[100px] mt-[20px] ml-[150px] flex">
           <IoSearch className="text-black w-[24px] h-[24px] mt-[7px] ml-[8px]" />
          <p  className="font-medium text-[15px] leading-[14px] mt-[14px] ml-[20px]">Serach</p>
       </div>
     </div>
                    {/* 2 icons  */}
     <div className="w-[60px] h-[60px] ml-[1340px] mt-[-60px] flex">
        <Image src={heart} alt="lock" className="w-[25px] h-[30px] mt-[25px]" />
        <Image src={lock} alt="lock" className="w-[40px] h-[40px] ml-[5px] mt-[20px]" />
     </div>

  </div>
</div>
}