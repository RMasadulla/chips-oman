"use client"

import ProductInfo from '@components/product/details'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Pimg from "@public/assets/img/product.png"
import { useParams } from 'next/navigation'

const products = [
    {
        id: 1,
        name: "Chips Oman Chilly Flavour Potato Chips 15g",
        price: "10Tk.",
        img: Pimg,
        size: "25x15g",
        productType: "Potato Bags",
        description: "Chips Oman was born out of the bifurcation of Ali Shaihani Food Industries in 1989, by Al Jufair Food Industry L.L.C The premier product of the industry is the chilli flavoured Potato Chips- Chips Oman, which is the most popular product of its kind in the Sultanate of Oman and the entire gulf region.",
        additionalInformation: "Additional Information",
        reviews: [
            { id: 1, customerName: "Abc", rate: 5, img: "", comment: "Chips Oman, which is the most popular product of its kind in the Sultanate of Oman and the entire gulf region." },
            { id: 2, customerName: "Abc", rate: 3, img: Pimg, comment: "Chips Oman, which is the most popular product of its kind in the Sultanate of Oman and the entire gulf region." },
            { id: 3, customerName: "Abc", rate: 3.5, img: Pimg, comment: "Chips Oman, which is the most popular product of its kind in the Sultanate of Oman and the entire gulf region." }
        ]
    }
]

const ProductDetials = () => {

    const [productDesc, setProductDesc] = useState("")
    const { details } = useParams()


    const productView = products.filter((productItem) => productItem?.name.replace(/\s/g, '_') === details)

    useEffect(() => {
        setProductDesc(productView[0])
    }, [productView])

    return (
        <section className='container m-auto'>
            <div className='flex flex-wrap items-center gap-10 '>
                <Image src={productDesc?.img} alt={productDesc?.name} />
                <div>
                    <h2>{productDesc?.name}</h2>
                    <span>rate</span>
                    <p>{productDesc?.price}</p>
                    <p>Size: {productDesc?.size}</p>
                    <p>Product type : {productDesc?.productType}</p>
                </div>
            </div>
            <div className='w-full mt-10'>
                <ProductInfo productDesc={productDesc} />
            </div>
        </section>
    )
}

export default ProductDetials