import Link from "next/link";
import React from "react";
import {RxPerson} from 'react-icons/rx'
import {AiOutlineHeart} from 'react-icons/ai'
import {CgShoppingBag} from 'react-icons/cg'

export default function Header() {
  return (
    <div className="flex items-center justify-center bg-[#7013B3] px-32 py-2 text-white">
      <div className="flex w-full items-center justify-between">
        <span className="text-[32px] font-bold">Logo</span>
        <div className="flex items-center gap-8 text-base font-normal">
          <Link href="/" className='font-sans'>Refrigerator</Link>
          <Link href="/">Dispensers</Link>
          <Link href="/">Soft Drinks</Link>
        </div>
        <div className='flex flex-row  gap-5'>
          <button className='basis-1/3 '><RxPerson size={20}/></button>
          <button className='basis-1/3 '><AiOutlineHeart size={22}/></button>
          <button className='basis-1/3 '><CgShoppingBag size={20}/></button>
        </div>
      </div>
    </div>
  );
}
