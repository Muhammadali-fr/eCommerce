
import { Heart } from "lucide-react"
export default function Cart(){
    
    return(
        <div className="w-[90%] max-w-[990px] mx-auto">
            <p>Your Cart</p>
            <p>5 products in Your cart</p>

            <div className="w-full border border-gray-200">
                <Heart />
                <img src="./assets/car.png" alt="photo" />
            </div>
        </div>
    )
}