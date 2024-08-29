import React from 'react'
import arrow from '../assets/arrow.svg'

const NinthPage = () => {
  return (
    <div className='pt-[150px]'>
      <div className="info text-center ">
     <h1 className='text-[85px] leading-[94px] font-pp '>A retirement roadmap <br /> for everyone.</h1>
     <p className='text-[20px] leading-[31px] m-4 '>Retirement is a journey. Take it with confidence.</p>
 </div>  
 <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex m-auto '>Shedule a meeting <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 ' /> </button>
 <div>
     <img src="https://fivepathways.com/foot-scene.png" alt="" srcset="" />
 </div>
    </div>
   )
}

export default NinthPage
