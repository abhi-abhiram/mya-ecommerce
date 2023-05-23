import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-center bg-[#7013B3] px-32 py-2 text-white">
      <div className="flex w-full items-center justify-between">
        <span className="text-[32px] font-bold">Logo</span>
        <div className="flex items-center gap-8 text-base font-normal">
          <Link href="/">Refrigerator</Link>
          <Link href="/">Dispensers</Link>
          <Link href="/">Soft Drinks</Link>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
