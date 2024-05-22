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
  const [pricing, setPricing] = useState(0);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);
    }
  }, []);
  return (
    <main className="bg-white min-h-screen min-w-screen">
      <div className="flex flex-col items-center justify-center select-none">
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
      <div className="pb-28 w-screen mt-[50%] flex flex-col items-center justify-start text-center select-none">
            <div className="min-h-96 w-screen bg-cyan-700 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center md:justify-stretch md:items-stretch md:grid grid-cols-6 grid-rows-2 w-[70vw] min-h-80 gap-x-7 gap-y-7">
                <div className=" row-start-1 col-start-1 row-end-2 col-end-5 bg-white text-cyan-700 rounded-2xl text-4xl flex items-center justify-center font-bold text-center">Abonamente de la 55 RON/luna</div>
                <div className=" row-start-1 col-start-5 row-end-2 col-end-7 bg-opacity-40 bg-white rounded-2xl text-5xl flex items-center justify-center px-16 font-bold text-center">6-12 <br /> Ani</div>
                <div className=" row-start-2 col-start-1 row-end-3 col-end-3 bg-opacity-40 bg-white rounded-2xl text-4xl flex items-center justify-center px-16 font-bold text-center">Materiale 100% Sustenabile</div>
                <div className=" row-start-2 col-start-3 row-end-3 col-end-7 bg-white rounded-2xl text-4xl flex items-center justify-center px-16 font-bold text-center text-cyan-700">Jucarii Din Domeniile STEM</div>
              </div>
            </div>
      </div>
      <div className="h-screen w-screen flex flex-col items-center justify-start gap-y-10">
          <div className="w-[70%] md:max-w-[500px] h-[80px] rounded-full bg-gray-300 border-4 flex justify-between items-center text-3xl text-gray-700 font-bold">
              <button onClick={()=>setPricing(0)} className={"w-[50%] ml-[5px] h-[79%] relative transition-all duration-300 ease-in-out"}>
                  Pret Lunar
              </button>
              <button onClick={()=>setPricing(1)} className={"w-[50%] mr-[5px] h-[79%] relative transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out after:block after:h-[100%] after:w-[100%] after:rounded-full after:opacity-10 after:absolute after:z-[50] after:bottom-0 after:bg-black after:left-0 after:delay-150 " + (pricing==1?" rounded-full ":" after:left-[-100%] rounded-r-none ")}>
                  Pret Intreg
              </button>
          </div>
          <div className="flex justify-center items-center gap-x-10 mt-20 text-gray-200">
            <div className="bg-cyan-700 bg-opacity-60 w-72 min-h-[450px] rounded-xl relative">
              <Image
              src={"https://res.cloudinary.com/dha7yg3ul/image/upload/v1716312420/lansator_u7molx.png"}
              fill={true}
              className="rounded-t-xl object-top object-contain"
              />
              <div className="absolute bottom-0 w-full min-h-1/3 bg-cyan-700 rounded-b-xl">
                <h2 className="text-4xl text-left ml-3 mt-2 font-bold">
                  Pachet Lunar
                </h2>
                <h3 className="text-2xl text-left ml-3 mt-1">
                  70 RON/luna
                </h3>
                <div className="flex items-center justify-center py-5">
                  <a href="/comingSoon" className="text-center w-[80%] py-4 text-2xl bg-transparent rounded-full border-6 border-gray-200 font-bold text-gray-200">Cumpara</a>
                </div>
              </div>
            </div>
            <div className="bg-cyan-700 bg-opacity-60 w-72 min-h-[450px] rounded-xl relative">
              <Image
              src={"https://res.cloudinary.com/dha7yg3ul/image/upload/v1716312420/lansator_u7molx.png"}
              fill={true}
              className="rounded-t-xl object-top object-contain"
              />
              <div className="absolute bottom-0 w-full min-h-1/3 bg-cyan-700 rounded-b-xl">
                <h2 className="text-4xl text-left ml-3 mt-2 font-bold">
                  Pachet 3 Luni
                </h2>
                {
                  pricing === 0 ?
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    62 RON/luna
                  </h3>
                  :
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    186 RON
                  </h3>
                }
                <div className="flex items-center justify-center py-5">
                  <a href="/comingSoon" className="text-center w-[80%] py-4 text-2xl bg-transparent rounded-full border-6 border-gray-200 font-bold text-gray-200">Cumpara</a>
                </div>
              </div>
            </div>
            <div className="bg-cyan-700 bg-opacity-60 w-72 min-h-[450px] rounded-xl relative">
              <Image
              src={"https://res.cloudinary.com/dha7yg3ul/image/upload/v1716312420/lansator_u7molx.png"}
              fill={true}
              className="rounded-t-xl object-top object-contain"
              />
              <div className="absolute bottom-0 w-full min-h-1/3 bg-cyan-700 rounded-b-xl">
                <h2 className="text-4xl text-left ml-3 mt-2 font-bold">
                  Pachet 6 Luni
                </h2>
                {
                  pricing === 0 ?
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    58 RON/luna
                  </h3>
                  :
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    348 RON
                  </h3>
                }
                <div className="flex items-center justify-center py-5">
                  <a href="/comingSoon" className="text-center w-[80%] py-4 text-2xl bg-transparent rounded-full border-6 border-gray-200 font-bold text-gray-200">Cumpara</a>
                </div>
              </div>
            </div>
            <div className="bg-cyan-700 bg-opacity-60 w-72 min-h-[450px] rounded-xl relative">
              <Image
              src={"https://res.cloudinary.com/dha7yg3ul/image/upload/v1716312420/lansator_u7molx.png"}
              fill={true}
              className="rounded-t-xl object-top object-contain"
              />
              <div className="absolute bottom-0 w-full min-h-1/3 bg-cyan-700 rounded-b-xl">
              <h2 className="text-4xl text-left ml-3 mt-2 font-bold">
                  Pachet 12 Luni
              </h2>
              {
                  pricing === 0 ?
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    55 RON/luna
                  </h3>
                  :
                  <h3 className="text-2xl text-left ml-3 mt-1">
                    660 RON
                  </h3>
                }
                <div className="flex items-center justify-center py-5">
                  <a href="/comingSoon" className="text-center w-[80%] py-4 text-2xl bg-transparent rounded-full border-6 border-gray-200 font-bold text-gray-200">Cumpara</a>
                </div>
              </div>
            </div>
          </div>
      </div>

    </main>
  );
}