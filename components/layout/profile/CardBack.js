import Image from "next/image";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import Avatar, { genConfig } from "react-nice-avatar";

export default function CardBack({ toggleCard }) {
  return (
    <div className="relative overflow-hidden bg-primary-black w-[220px] h-[316px] shadow-md shadow-[#ffffff40] rounded-lg">
      <div className="absolute w-[348px] h-[385px] left-6">
        <Image
          src="/images/Frame_32.png"
          width={412}
          height={400}
          className="w-full h-full"
        />
      </div>

      <div className=" w-full h-full flex flex-row items-center gap-2">
        <div className=" w-full h-full flex flex-col justify-between items-end px-3 py-3">
          <button
            onClick={() => toggleCard()}
            className="hover:cursor-pointer z-20"
          >
            <ArrowPathRoundedSquareIcon className="text-white h-[20px] w-[20px] " />
          </button>

          <div className="w-full flex gap-[12px] items-center">
            <Avatar
              style={{ width: "2rem", height: "2rem" }}
              {...genConfig("sourabh")}
              className=""
            />

            <div className="  flex flex-col justify-center justify-items-start">
              <h1 className="text-primary-white text-[14px] font-medium">
                Sourabh Singh
              </h1>
              <p className="text-[#f0f0f099] flex flex-start items-center text-[12px]">
                8421....0792
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
