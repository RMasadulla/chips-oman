import Image from "next/image"
import Link from "next/link"

const Product = ({ product }) => {
    return (
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
                <Image src={product?.img} alt={product?.name} class="object-cover object-center w-full h-full block"/>
            </a>
            <div class="mt-4 text-center">
                <h3 class="text-primary text-lg tracking-widest title-font mb-1">Chips Oman Chilly Flavour Potato Chips 15g</h3>
                <p class="mt-1">$16.00</p>
                <div className="flex gap-2 items-center justify-center mt-4">
                    <Link className="bg-primary text-white py-1 px-4 rounded-sm text-sm" href={`/shop/${product?.name.replace(/\s/g, '_')}`}>See Details</Link>
                    <button className="bg-primary text-white py-1 px-4 rounded-sm text-sm" >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product