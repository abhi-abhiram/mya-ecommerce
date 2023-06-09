import React from "react";
import Button from "./Button";

export default function DHome() {
  return (
    <div className="relative flex flex-col">
      <div>
        <div className="m- m-31 absolute left-32 top-40">
          <h1 className="relative font-play text-6xl font-semibold text-[#1D1D1D]">
            Discover <span className="text-white">the perfect</span>
            <br />
            <span className="absolute top-20"> Refrigerators</span>
          </h1>
        </div>

        <div className="absolute left-32 top-[385px]">
            <Button type='button' >
                Shop Now
                </Button>
        </div>
        <div className="bg-[#1D1D1D] h-[112.73px] w-full absolute top-[555px]">
asdf
        </div>
      </div>
    </div>
  );
}
