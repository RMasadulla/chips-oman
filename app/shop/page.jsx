import Product from "@components/product"

import Pimg from "@public/assets/img/product.png"


const products = [
    { id: 1, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg },
    { id: 2, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg },
    { id: 3, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg },
    { id: 4, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg },
    { id: 5, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg},
    { id: 6, name: "Chips Oman Chilly Flavour Potato Chips 15g", price: "10Tk.", img: Pimg }
]

const Shop = () => {
    return (
        <section className="py-8">
            <div class="container m-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        products.map((product, i) => {
                            return (
                                <Product key={i} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Shop