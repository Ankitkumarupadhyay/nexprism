import React from 'react'
import arrow from '../assets/arrow.svg'
import bg from '../assets/page1bg.png'
import poweredby from '../assets/poweredby.png'

const FirstPage = () => {
  return <>
  <div className="main bg-[#FFFAF5] w-[100%] flex items-center justify-center flex-col ">
    <div className="info text-center ">
        <h1 className='text-[87px]  w-[100rem] leading-[85px] font-medium font-pp '>A retirement roadmap <br /> for everyone.</h1>
        <p className='text-[20px] m-2 font-normal   '>Retirement is a journey. Take it with confidence.</p>
        
    </div>  
    <button className='bg-[#63CFBF]  mt-4 py-2  px-4 rounded-full border border-black flex '>Shedule a meeting <img src={arrow} alt="arr" className='ml-3 h-[1.7rem] w-5 ' />  </button>
    <img src={bg} alt="bg" />
    <h1 className=' font-pp text-[20px]  ' > <i>Powered By</i></h1>
    <img src={poweredby} alt="poweredby" />
  </div>
  
  </>
}

export default FirstPage

