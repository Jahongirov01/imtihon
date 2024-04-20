import Image from "next/image";
import Link from "next/link";


export default function Fount(){
    return (
        <>
        
        <div className="m-auto flex justify-center items-center h-[745px] max-w-[1220px]">
            <div className="flex flex-col text-center justify-center items-center">
                <Image
                src={'/found.png'}
                alt={'found'}
                width={447}
                height={328}
                />
                <h1 className="font-semibold text-[34px]">Your cart is empty and sad :(</h1>
                <p className="text-[16px] font-normal text-[#807D7E]">Add something to make it happy!</p>
                <Link href={'/Checkout'}>
                                <button className="mt-[50px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-[#8A33FD] rounded-[8px]">Continue Shopping</button>
               </Link>
            </div>
        </div>
       
    </>
    )
}