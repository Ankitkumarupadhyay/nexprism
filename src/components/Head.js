import React from 'react';
import logo from '../assets/fivepathways.com_.png'
import arrow from '../assets/arrow.svg'
import mark from '../assets/q-mark.png'

const Head = () => {
  return (
    <div>
      <header className='w-[full] h-[140px] bg-[#FFFAF5] flex items-center px-[85px]  '>
        <div className="logo w-[221px] h-[44px]  ">
            <img  src={logo} alt="logo" />
        </div>
        <div className="nav   ">
            <ul className='flex  items-center text-[14px] p-8  gap-7 ml-[210px] '>
                <li className='cursor-pointer'>My Guide</li>
                <li className='cursor-pointer'>Enlighten</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Education</li>
                <li className='cursor-pointer'>Virtual Office</li>
                <li className='cursor-pointer'>About</li>
                <button className='bg-[#63CFBF] shadow-sm py-2   px-4 rounded-full border border-black flex '>Shedule a meeting <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 ' />  </button>
                <button className='bg-[#63CFBF] py-2 font-bold  px-4 rounded-full border border-black flex'>
                    <img className='w-[9px] h-[21px]  ' src={mark} alt="" />
                </button>
                
            </ul>
        </div>
        

      </header>
    </div>
  )
}

export default Head
