import Image from "next/image";
import Link from "next/link";
import Products from "../Products/page";



export default function Navbar(){
    return (
        
      <div className="w-[100%]">
      <div className="items-center justify-between m-auto flex max-w-[1237px] h-[108px] gap-10">
          <Image
          src='/Logo (1).png'
          alt="Logo "
          width={100}
          height={100}
          />
          <ul className="flex gap-10 ">
           
          <Link href={'/Products'} className="li" >Shop </Link>
              <li className="li"><Link href={'/Products'}>Men</Link></li>
              <li className="li"><Link href={'/Products'}>Women</Link></li>
              <li className="li"><Link href={'/Products'}>Combos</Link></li>
              <li className="li"><Link href={'/Products'}>Joggers</Link></li>
          </ul>
          <div className="rounded-[8px] top-input w-[267px] h-[44px] bg-[#F6F6F6] flex justify-center items-center gap-3">
              <Image
              src='/search (3).png'
              alt="Search"
              width={20}
              height={20}
              />
              <input className="outline-none w-[210px] h-[44px] bg-[#F6F6F6]" type="text" placeholder="Search"/>
          </div>
          <div className="flex gap-3">
              <button className="bg-[#F6F6F6] w-[44px] h-[44px] items-center justify-center flex rounded-[8px]"><Image src={'/user.png'} alt="uzer-logo" width={20} height={20}/></button>
              <Link href={'/Trash'}>
              <button className="bg-[#F6F6F6] w-[44px] h-[44px] items-center justify-center flex rounded-[8px]">
                <Image src={'/shopping cart.png'} alt="user-logo" width={20} height={20}/></button></Link>
          </div>
      </div>
  </div>
    )
}