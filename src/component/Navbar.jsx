import React from "react"
import logo from "./../assets/logo1.png"
import { Link } from "react-router-dom"
import { IoLogInOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import NavItems from "./NavItems";

function Navbar(){

    return(
        <nav className="p-4 border-b border-black sticky top-0 z-10">

            <div>
            {/* first row */}
            <section className="flex justify-between p-2">

                <div className=" flex space-x-2 items-center">

                    <img className="h-8" src={logo}/>
                    <h1 className="text-xl tracking-wide font-semibold" >Shopping</h1>

                </div>

                <div className="w-96">

                    <input type="text" 
                    placeholder="Search" 
                    className="w-full p-2 font-normal bg-white border border-black rounded-none"/>

                </div>

                <div className="flex items-center gap-3">

                   <Link>
                   <IoLogInOutline/>
                   <span className="text-xs font-normal hover:underline">Login</span>
                   </Link>

                   <Link to="">
                   <GoHeart/>
                   <span className="text-xs font-normal hover:underline">favorites</span>
                   </Link>

                   <Link>
                   <AiOutlineShopping/>
                   <span className="text-xs font-normal hover:underline">cart</span>
                   </Link>


                </div>

            </section>

            {/* second row */}
            <section>
                <div className="flex justify-center items-center">
                    <ul className=" flex space-x-4">
                    <NavItems to="/" text="Home"/>
                    <NavItems to="/" text="Men"/>
                    <NavItems to="/" text="women"/>
                    <NavItems to="/" text="Kids"/>
                    </ul>
                </div>
            </section>
            </div>
        </nav>
    )
}
export default Navbar