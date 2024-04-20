'use client'



import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";




export default function Home() {
  const [data, setData] = useState([])
   async function getData() {
    const res = await fetch('https://fakestoreapi.com/products?limit=4');
    const deta = await res.json();
    setData(deta)
  }
 
  useEffect(()=> {
       getData()
  }, [])

  return (
    <>
    <Navbar/>
      <div className="header-element">
        <div className="m-auto max-w-[1448px] h-[716px] ">
          <div className="flex flex-col gap-[40px] pt-[120px] pl-[193px] font-sans text-white">
            <h3 className="text-[32px] font-medium">T-shirt / Tops</h3>
            <h1 className="text-[78px] font-extrabold">Summer <br /> Value Pack</h1>
            <h3 className="text-[32px] font-medium">cool / colorful / comfy</h3>
            <button className="text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-white rounded-[8px]">Shop Now</button>
          </div>
        </div>
      </div>
      <main className="m-auto w-[1448px] h-[100%]">
        <section>
       
          <div className="flex flex-wrap gap-[30px]  justify-center mb-[100px] text-white items-center pt-[130px]">
            <div className="card1 pl-[28px] pt-[67px] w-[604px] h-[356px] drop-shadow-lx">
              <h3 className="font-extrabold text-[18px]">Low Price</h3>
              <h1 className="pt-[24px] text-[34px] font-extrabold">High Coziness</h1>
              <p className="pt-[9px] text-[16px]">UPTO 50% OFF</p>
              <h2 className="pt-[41.5px] w-[136px] cursor-pointer font-extrabold text-[20px] border-b-4">Explore Items</h2>
            </div>
            <div className="card2 pl-[28px] w-[604px] h-[356px] pt-[67px]">
              <h3 className="font-extrabold text-[18px]">Beyoung Presents</h3>
              <h1 className="pt-[24px] text-[34px] font-extrabold">Breezy Summer <br /> Style</h1>
              <p className="pt-[9px] text-[16px]">UPTO 50% OFF</p>
              <h2 className="pt-[41.5px] w-[136px] cursor-pointer font-extrabold text-[20px] border-b-4">Explore Items</h2>
            </div>
          </div>
        </section>
        <section className="m-auto max-w-[1240px] h-[100%]">
          <div className="flex items-center gap-[20px]">
            <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
            <h1 className="font-semibold text-[34px]">New Arrival</h1>
          </div>
          <div className="flex items-center gap-[20px] pt-[30px] justify-between">
            {data.map((product) =>(
               <Link href={`${product.id}`}>
              <div key={product.id} className="w-[262px] items-center text-center h-[330px] flex gap-[8px] flex-col">
                <img className="w-[250px] h-[260px]" src={product.image} alt="images" />
                <h1>{product.title}</h1>
              </div>
              </Link>
            ))}
          </div>

          <div className="pt-[92px] flex items-center gap-[20px]">
            <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
            <h1 className="font-semibold text-[34px]">Big Saving Zone</h1>
          </div>
          <div className="flex pt-[70px] text-white items-center justify-between">
            <div className="flex flex-col gap-[9px] pl-[20px] pt-[64px] el-card1 w-[400px] h-[393px]">
              <h1 className="font-semibold text-[28px]">Hawaiian <br /> Shirts</h1>
              <p className="font-semibold text-[14px]">Dress up in summer vibe</p>


<h2 className="font-bold text-[18px]">UPTO 50% OFF</h2>
              <div className="w-[147px] flex flex-col gap-[40px] pt-[21px] items-center">
                <Image
                  src="/arrow.png"
                  alt="images"
                  width={23}
                  height={21}
                />
                <button className="border-2 text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">SHOP NOW</button>
              </div>
            </div>
            <div className="el-card2 flex flex-col items-end text-end pr-[25px] pt-[34px] w-[400px] h-[393px]">
              <button className="w-[104px] h-[34px] bg-[#4b4e4e] hover:bg-[#3a3e3e] item-center text-[12px] font-bold rounded-[4px]">Limited Stock</button>
              <h1 className="font-semibold text-[28px]">Printed <br /> T-Shirt</h1>
              <p className="font-semibold text-[14px]">New Designs Every Week</p>
              <h2 className="font-bold text-[18px]">UPTO 40% OFF</h2>
              <div className="w-[147px] gap-[40px] flex flex-col pt-[21px] items-center">
                <Image
                  src="/arrow.png"
                  alt="images"
                  width={23}
                  height={21}
                />
                <button className="border-2 text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">SHOP NOW</button>
              </div>
            </div>
            <div className="pl-[227px] text-[#3C4242] pt-[64px] el-card3 w-[400px] flex flex-col h-[393px]">
              <h1 className="font-semibold text-[28px]">Cargo <br /> Joggers</h1>
              <p className="font-semibold text-[14px]">Move with style & comfort</p>
              <h2 className="font-bold text-[18px]">UPTO 50% OFF</h2>
              <div className="w-[147px] flex flex-col gap-[40px] pt-[21px] items-center">
                <Image
                  src="/arrow.png"
                  alt="images"
                  width={23}
                  height={21}
                />
                <button className="border-2 border-[#3C4242] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="flex text-[#3C4242] justify-between pt-[20px]">
            <div className="el-card4 pl-[350px] pt-[45px] w-[610px] h-[393px]">
              <h1 className="font-semibold text-[28px]">Urban <br /> Shirts</h1>
              <p className="font-semibold text-[14px]">Live In Confort</p>
              <h2 className="font-bold text-[18px]">FLAT 60% OFF</h2>
              <div className="w-[147px] flex flex-col gap-[40px] pt-[21px] items-center">
                <Image
                  src="/arrow (2).png"
                  alt="images"
                  width={23}
                  height={21}
                />
                <button className="border-2 border-[#3C4242] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">SHOP NOW</button>
              </div>
            </div>
            <div className="el-card5 w-[610px] flex flex-col pl-[350px] pt-[45px] h-[393px]">
              <h1 className="font-semibold text-[28px]">Oversized <br /> T-Shirts</h1>
              <p className="font-semibold text-[14px]">Street Style Icon</p>
              <h2 className="font-bold text-[18px]">FLAT 60% OFF</h2>
              <div className="w-[147px] flex flex-col gap-[40px] pt-[21px] items-center">
                <Image
                  src="/arrow (2).png"
                  alt="images"
                  width={23}
                  height={21}
                />
                <button className="border-2 border-[#3C4242] text-[12px] font-medium py-2.5 pl-6 rounded-[4px] pr-6">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className="pt-[100px] flex text-white rounded-[8px]">
            <div className="card-left w-[614px] h-[640px]">
              <div className="pl-[74px] pt-[183px]">
                <h1 className="text-[34px] font-extrabold">WE MADE YOUR EVERYDAY <br /> FASHION BETTER!</h1>


<p className="pt-[30px] font-light text-[20px]">In our journey to improve everyday fashion, <br /> euphoria presents EVERYDAY wear range - <br /> Comfortable & Affordable fashion 24/7</p>
                <button className="mt-[50px] text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-white rounded-[8px]">Shop Now</button>
              </div>
            </div>
            <div className="card-right w-[626px] h-[640px]"></div>
          </div>
          <div className="pt-[92px] flex items-center gap-[20px]">
            <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
            <h1 className="font-semibold text-[34px]">Categories For Men</h1>
          </div>
          <div className="flex flex-wrap gap-[50px]">
            {data.slice(0, 8).map((product) =>(
               <Link href={`${product.id}`}>
              <div className="w-[270px] h-[450px] cursor-pointer">
                  <img className="w-[270px] h-[350px]" src={product.image} alt="" />
                  <h1>{product.title}</h1>
                  <div className="flex justify-between">
                    <p>Explore Now!</p>
                    <Image
                      src="/arrow.png"
                      alt="images"
                      width={23}
                      height={21}/>
                  </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap flex-col items-center pt-[43px] text-white max-w-[1240px] h-[357px] bg-[#3C4242]">
            <h1 className=" my    font-extrabold text-[50px] ">Top Brands Deal</h1>
            <h3 className="  up text-[22px] font-bold pt-[25px]">Up To <span className="text-[#FBD103]">60%</span> off on brands</h3>
            <div className="flex flex-wrap pt-[67px] gap-[25px] mt-16">
             <img src="./Group 43.png" alt="" />
             <img src="./Group 44.png" alt="" />
             <img src="./Group 45.png" alt="" />
             <img src="./Group 46.png" alt="" />
             <img src="./Group 47.png" alt="" />
            </div>
          </div>
          <div className="pt-[92px] flex items-center gap-[20px]">
            <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
            <h1 className="font-semibold text-[34px]">In The Limelight</h1>
          </div>
          <div className="flex justify-between">
          {data.map((product)=>(
              <Link href={`${product.id}`}>
                <div key={product.id} className="w-[262px] items-center text-center cursor-pointer h-[440px] flex gap-[8px] flex-col">
                  <img className="w-[250px] h-[260px]" src={product.image} alt="images" />
                  <h1>{product.title}</h1>
                  <button href='/sddsfsdf' className="hover:bg-[#d4d4d4] w-[82px] h-[36px] bg-[#F6F6F6] rounded-[8px]">$37.00</button>
                </div>
                </Link>
            ))}
          </div>
                     <div className="pt-[92px] flex items-center gap-[20px]">
            <div className="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
            <h1 className="  fed font-semibold text-[34px]">Feedback</h1>
           
                    <div className=" section pt-[70px] pb-[136px] flex justify-between  ">
            <div className="w-[376px] h-[292px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                 <img src="./Stars.png" alt="" />
                    
                  </div>
                  <h1 className="text-[#3C4242] text-[22px] font-normal">Floyd Miles</h1>
                  <p className="text-[#807D7E] text-[14px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <div className="w-[376px] h-[292px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                <img src="./Stars (1).png" alt="" />
                  </div>
                  <h1 className="text-[#3C4242] text-[22px] font-normal">Ronald Richards</h1>
                  <p className="text-[#807D7E] text-[14px] font-normal">ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            <div className="w-[376px] h-[292px]">
              <div className="flex flex-col gap-[20px]">
                  <div className="flex justify-between">
                   <img src="./Stars (2).png" alt="" />
                    </div>
                    <h1 className="text-[#3C4242] text-[22px] font-normal">Savannah Nguyen</h1>
                    <p className="text-[#807D7E] text-[14px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
              </div>
          </div>
          </div>
        </section>
      </main>
      <div className="footer">
  <Footer/>
      </div>
    </>
  );
}