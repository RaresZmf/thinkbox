"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function spring(delay){
  return {
    type: "spring",
    damping: 15,
    stiffness: 100,
    delay: delay
  }
}


export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);
    }
  }, []);
  return (
    <main className="bg-white min-h-screen min-w-screen">
      <div className="flex flex-col items-center justify-center">
        <div className='absolute top-[55%] w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <ul className='flex items-center justify-center md:justify-start text-9xl [&_li]:mx-0 [&_img]:max-w-[200px] animate-infinite-scroll1'>
            {
              Array(5).fill().map((_, i) => (
                <li className="flex items-center justify-start" key={i}>
                  <h1 className="font-bold text-black">ThinkBox</h1>
                  <Image
                  src={"https://res.cloudinary.com/dha7yg3ul/image/upload/c_crop,w_700,h_656,g_auto/v1716152546/logoTransparent_yxvjx8.png"}
                  alt="Picture of the author"
                  width={200}
                  height={100}
                  className=' object-scale-down'
                  quality={100}
                  />
                </li>
              ))
            }
          </ul>
          <ul className='flex items-center justify-center md:justify-start text-9xl [&_li]:mx-0 [&_img]:max-w-[200px] animate-infinite-scroll1'>
            {
              Array(5).fill().map((_, i) => (
                <li  className="flex items-center justify-start" key={i}>
                  <h1 className="font-bold text-black">ThinkBox</h1>
                  <Image
                  src={"https://res.cloudinary.com/dha7yg3ul/image/upload/c_crop,w_700,h_656,g_auto/v1716152546/logoTransparent_yxvjx8.png"}
                  alt="Picture of the author"
                  width={200}
                  height={100}
                  className=' object-scale-down'
                  quality={100}
                  />
                </li>
              ))
            }
          </ul>
        </div>
        <motion.h1
          className="relative text-8xl text-center text-gray-900 font-bold"
          initial={{ bottom: -2000 }}
          animate={{ bottom: -screenHeight/7 }}
          transition={spring(0.1)}
        >
          Gandeste ca un inginer!
        </motion.h1>
        <motion.h2
        className="relative text-4xl text-center text-gray-900 font-extralight mx-14 my-5"
        initial={{ bottom: -2000 }}
        animate={{ bottom: -screenHeight/7 }}
        transition={spring(0.3)}
        >
          Rămâneți pe fază și abonați-vă la newsletterul nostru pentru a fi la curent cu toate noutățile și actualizările viitoare!

        </motion.h2>
        <motion.div 
        initial={{ bottom: -2000 }}
        animate={{ bottom: -screenHeight/7 }}
        transition={spring(0.8)}
        class="relative mt-6 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 w-96 flex-auto rounded-md border-0 bg-white/5 px-5 py-3 text-gray-700 font-semibold shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-md sm:leading-6" placeholder="Enter your email"/>
          <button type="submit" class="flex-none rounded-md bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700">Abonati-vă!</button>
        </motion.div>
      </div>
      {/* <div className="h-screen w-screen">
          <h1 className="text-4xl text-center text-gray-900 font-bold">Abonamentele Noastre</h1>
          <div className="grid grid-cols-6 grid-rows-6">

          </div>
      </div> */}

    </main>
  );
}