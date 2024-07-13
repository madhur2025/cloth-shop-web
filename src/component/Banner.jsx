import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';
import { Fade, Slide } from 'react-awesome-reveal';

 function Banner() {
  return (
    <Slide triggerOnce>
<div className="bg-red-500 m-6 grid grid-cols-2 p-9">
      {/* 1st column */}
      <div className="flex  flex-col justify-center items-center p-5">
        {/* 1st row */}
        <div>
          <p className="text-3xl font-bold text-white">Unlock the savings</p>
        </div>
        {/* 2ndRow
         */}
        <div className="flex  flex-col gap-2 mt-4 justify-center items-center ">
          <p className="text-xl font-semibold text-white">
            Flat 50% off on everthing
          </p>
          <button className="bg-white px-4 flex items-center py-2 mt-4 text-red-500">
            Shop Now <FiArrowRightCircle className="ml-2 animate-bounce" />
          </button>
        </div>
      </div>
      {/* 2nd column */}
      <div>
        <div>
          <p className="text-white font-bold text-9xl">
            Flat <span className="underline">50%</span> off
          </p>
          <p className="text-white">Available on our all store</p>
        </div>
      </div>
    </div>
    </Slide>

  )
}
export default Banner