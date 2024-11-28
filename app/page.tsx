/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState } from "react";

function Page() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
         if (count > 0) {
            setCount(count - 1);
        }
        console.log("Click");
    };

    return (
      <div className="h-full w-full">
        <div className="flex flex-col py-10 px-10 m-2 justify-center border-sky-700 border-[4px] items-center">
            <h1 className="absolute flex mt-0 mb-10 border justify-center border-black bg-sky-300 shadow-2xl shadow-slate-800 p-4 font-extrabold text-7xl">Your Page count is {count}</h1>
            <div className="relative flex mt-20 mb-64 border gap-5 flex-row justify-center">
            <button onClick={handleIncrement} 
            className="flex border h-10 ml-2 justify-center w-40 bg-pink-300 items-center border-black shadow-lg shadow-slate-800 text-5xl font-medium"
            >+</button>
            <button onClick={handleDecrement} 
            className="flex border h-10 w-40 justify-center  bg-pink-300 items-center border-black shadow-lg shadow-slate-800 text-5xl font-medium"
            >-</button>
            </div>
            
        </div>
        </div>
    );
}

export default Page;