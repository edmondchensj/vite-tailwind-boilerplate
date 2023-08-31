import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { amountAdded } from "../../features/counter/counter-slice";
import { useFetchBreedsQuery } from "../../features/dogs/dogs-api-slice";
import reactLogo from "../../assets/react.svg";
import "./index.css";
import { LOREM_IPSUM } from "./constants";
import { CalendarFilled, CalendarOutlined, HeartOutlined } from "@ant-design/icons";
import { Calendar } from "antd";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/outline"

function Card({
  title,
  message
}:any) {
  return (
    <div className="w-full sm:w-[300px] rounded-xl shadow-lg border-gray-200 border-2 p-8">
      <div className="text-xl font-semibold text-blue-500">
        {title}
      </div>
      <div>
        {message}
      </div>
    </div>
  )
}

export default function Page() {
  

  return (
    <>
      <div className="flex flex-col gap-10 items-center mt-5">
        <div className="text-4xl font-semibold text-blue-400">
          Hello Tailwind
        </div>

        <div className="flex flex-col max-w-xl">
          <div className="text-2xl font-semibold">1. Demo responsive width</div>
          <div className="text-neutral-600 text-justify text-sm">
            {LOREM_IPSUM}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-2xl font-semibold">2. Demo aligning icons and text in a grid</div>
          
          <div className="flex gap-3 items-center shadow border-2 border-gray-200 rounded-xl p-5">
            <HeartIcon className='h-16 stroke-red-600 fill-red-200' />

            <div className="flex flex-col items-start">
              <div className="text-xl font-semibold">Chat</div>
              <div>You have a new message!</div>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col max-w-full gap-3">
          <div className="text-2xl font-semibold">3. Demo responsive card layout with dynamic card width</div>
          
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="w-full sm:w-[300px] rounded-xl shadow-lg border-gray-200 border-2 p-8">
              <div className="text-xl font-semibold text-green-500">
                Card 1
              </div>
              <div>
                Special card with full width for mobile, fixed width (300px) for larger screen
              </div>
            </div>

            <div className="w-full sm:w-[300px] rounded-xl shadow-lg border-gray-200 border-2 p-8">
              <div className="text-xl font-semibold text-green-500">
                Card 2
              </div>
              <div>
              Special card with full width for mobile, fixed width (300px) for larger screen
              </div>
            </div>

            <div className="w-full sm:w-[300px] rounded-xl shadow-lg border-gray-200 border-2 p-8">
              <div className="text-xl font-semibold text-green-500">
                Card 3
              </div>
              <div>
              Special card with full width for mobile, fixed width (300px) for larger screen
              </div>
            </div>

            <div className="rounded-xl shadow-lg border-gray-200 border-2 p-8">
              <div className="text-xl font-semibold text-red-400">
                Card 4 (Anti-Example)
              </div>
              <div>
                {LOREM_IPSUM}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-2xl font-semibold">4. Refactoring</div>
          <div className='flex flex-wrap gap-3'>
            <Card 
              title={"New Card 1"} 
              message={"This is the refactored card that can be read more easily"} />
            
            <Card 
              title={"New Card 2"} 
              message={"This is the refactored card that can be read more easily"} />
              
            <Card 
              title={"New Card 3"} 
              message={"This is the refactored card that can be read more easily"} />
            
          </div>
         
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-2xl font-semibold">5. Button effects can be done inline</div>
          <button className="bg-violet-500 hover:bg-red-500 focus:outline-none focus:ring focus:ring-violet-300 text-white">Hello Button</button>
         
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-2xl font-semibold">6. Setting theme colours</div>
          <button className="bg-primary text-white">Hello Button Primary</button>
          <button className="bg-orange-400 text-white">Hello Button Custom Orange</button>
          <button className="bg-orange-500 text-white">Hello Button Custom Tailwind Orange</button>
         
        </div>

      </div>
    </>
  );
}
