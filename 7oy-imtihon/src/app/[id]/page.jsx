'use client'

import Image from "next/image"
import Footer from "../components/Footer"
import { useState } from "react"


export default async  function Page({params}) {
    
    const data =await getDetails(params.id)
     async function getDetails(id) {
        const res = await  fetch(`https://fakestoreapi.com/products/${id}`)
        return await res.json();
    }
    
   
    

return (
    <>
    <div className='Details_page_images'>
    <Image
                        src="/Frame 19.png"
                        alt="images"
                        width={80}
                        height={70}
                    />
        

    </div>
       <img src={data.image} alt="png"  className="data_images"/>
       <h1 className="Container_section_h1">{data.title}</h1>
       <img src="./Frame 15.png" alt="png" className="images" />
       <p className="data_p">Select Size</p>
       <p className="data_pp">Size Guide</p>
       <h1 className="data_color">Colours Available </h1>
       <img src="./Frame 14.png" alt="png"  className="data_color"/>
       <button className="data_section_btn1">
        <img src="./shopping Cart.png" alt="png" className="i" />
        <p>Add to cart</p>
       </button>
       <button className="data_section_btn_btn">
        ${data.price}
       </button>
       <h1 className="h1"></h1>
<img src="./Frame 28.png" alt="png"  className="images1"/>
<img src="./Frame 29.png" alt="png"  className="images2"/>
<img src="./Frame 30.png" alt="png"  className="images3"/>
<img src="./Frame 31.png" alt="png"  className="images4"/>

            <h1 className=" my_images_img fed font-semibold text-[34px]">Product Description</h1>
            <p className="my_details_p">
            100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew <br />
             neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime,  <br />
             anywhere. Infinite range of matte-finish HD prints.
            </p>
            <img src="./product tabel.png" alt="png" className="images_images" />
            <img src="./Frame 47.png" alt="png" className="Details_images_images" />
            <div className="divv">
                    <Footer/ >

            </div>
       </>
       )
              }