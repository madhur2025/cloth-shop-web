import React from "react"
import KidsImage from './../assets/fitSection/Kids.jpg'
import MenImage from './../assets/fitSection/Men.jpg'
import WomenImage from './../assets/fitSection/Women.jpg'
import { Link } from "react-router-dom"
function FitGuide(){

    const images = {
        Men : MenImage,
        Women : WomenImage,
        Kids : KidsImage
    }
    const links = {
        Men : '/men',
        Women : '/women',
        Kids : '/kids'
    }

    return (

        <div className="max-w-7xl mx-auto py-12">

            <div className="grid grid-cols-3 gap-6">
                {
                    ['Men','Women','Kids'].map((label)=>(



                        <Link key={label} className="relative group:" to={links[label]}>
                            <img 
                            className="h-full transform transition-all duration-200 delay-300 group-hover:scale-105 w-full object-cover group-hover" 
                            src={images[label]}/>

                            <div className="bg-black absolute bottom-6 left-28 bg-opacity-50 inline-block transform transition-all delay-300 duration-200 group-hover:scale-110 px-6 py-2 text-white">
                            {label}
                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default FitGuide