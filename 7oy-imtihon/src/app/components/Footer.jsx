
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="m-auto w-[100%] h-[100%] bg-[#3C4242]">
            <div className="m-auto max-w-[1060px] h-[100%] text-white">
                <div className="pt-[80px] flex justify-center flex-wrap gap-[50px] cursor-pointer">
                    <div className="">
                        <h1 className="hover:text-[#8c8c8c] font-bold text-[24px]">Need Help</h1>
                        <ul>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Contact Us</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Track Order</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Returns & Refunds</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">FAQ's</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Career</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="hover:text-[#8c8c8c] font-bold text-[24px]">Company</h1>
                        <ul>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">About Us</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">euphoria Blog</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">euphoriastan</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Collaboration</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Media</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="hover:text-[#8c8c8c] font-bold text-[24px]">More Info</h1>
                        <ul>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Term and Conditions</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Privacy Policy</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Shipping Policy</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Sitemap</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="hover:text-[#8c8c8c] font-bold text-[24px]">Location</h1>
                        <ul>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">support@euphoria.in</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">Eklingpura Chouraha, Ahmedabad Main Road</li>
                            <li className="text-[18px] hover:text-[#8c8c8c] font-medium">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end pr-[142px] pt-[10px]">
                    <h1 className="font-bold text-[28px]">Download The App </h1>
                </div>
                <div className="flex justify-between pt-[19px]">
                    <div className="flex flex-wrap gap-[10px]">
                        <button>
                            <Link href={'https://www.facebook.com/?locale=ru_RU'}>
                            <img src="./Group 10.png" alt="png" />
                            </Link>
                        </button>
                        <button>
                            <Link href={'https://www.instagram.com/'}>
                            <img src="./Group 11.png" alt="png" />
                                                        </Link>
                        </button>
                        <button>
                            <Link href={'https://twitter.com/?lang=ru'}>
                               <img src="./Group 12.png" alt="png" />
                            </Link>
                        </button>
                        <button>
                            <Link href={'https://www.facebook.com/LinkedIn/'}>
                          
                            </Link>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-[21px] pr-[80px]">
                        <Link href={'https://play.google.com/store/games?hl=ru&gl=US&pli=1'}>
                        <img src="./Group.png" alt="png" />
                        </Link>
                        <Link href={'https://www.apple.com/app-store/'}>
                        <img src="./Group (1).png" alt="png" />
                        </Link>
                    </div>
                </div>
                <div className="flex cursor-pointer justify-between mt-[50px] border-y-[0.5px] pt-[30px] pb-[30px] border-[#BEBCBD]">
                    <h1 className="text-[28px] font-extrabold">Popular Categories</h1>
                   
                </div>
                <div className="flex justify-center pb-[90px] pt-[37px]">
                    <h1 className="font-extrabold text-[18px]">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h1>
                </div>
            </div>
        </footer>
    )
}