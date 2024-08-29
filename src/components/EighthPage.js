import React from 'react'
import jar from "../assets/jar.png"
import arrow from '../assets/arrow.svg'

const EighthPage = () => {
    return (
        <div className='mt-11'>
            <div className=' text-center'>
                <p c className='text-[20px] leading-[29px] font-pp '>  <i>Five Pathway question jar</i> </p>
                <h1 className=' text-[60px] leading-[66px] mt-[22px] font-pp'>Have any question. ? </h1>
                <h2 className='mt-3 text-[15px] leading-[23px]'>You’ve got questions, we’ve got answers!</h2>
            </div>
            <div className=' grid grid-cols-2 mt-10'>
                <div className='px-36'>
                    <div className='flex flex-col'>
                        <label className='w-full text-[18px] mt-3'>Full name* </label>
                        <input type='text' className='py-2 outline-none border border-black rounded-lg' />
                        <label className='w-full text-[18px] mt-3'>Email* </label>
                        <input type='text' className='py-2 outline-none border border-black rounded-lg' />
                        <label className='w-full text-[18px] mt-3'>Phone** </label>
                        <input type='text' className='py-2 outline-none border border-black rounded-lg' />
                        <label className='w-full text-[18px] mt-3'>Questions* </label>
                        <select className='py-2 outline-none border border-black rounded-lg px-3'>
                            <option  className=''>Select</option>
                        </select>
                        <label className='w-full text-[18px] mt-3'>Message </label>
                        <textarea name='message' className='outline-none border h-[150px] border-black rounded-lg py-2' />
                        <div className='mt-7 mr-96'>
                            <button className='bg-[#63CFBF] w-[130px] mt-4 py-2  px-4 rounded-full border border-black flex m-auto '>Submit <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 ' /> </button>
                        </div>
                        <div className='mt-5'>
                            <p> * Required field</p>
                            <p>**
                                By providing your mobile phone number you opt-in to receive periodic SMS or MMS messages containing but not limited to scheduling, updates and important information. You may unsubscribe at any point by texting the word 'stop'.</p>
                        </div>

                    </div>
                </div>
                <div className='px-10 mr-16'>
                    <img src={jar} alt='img' className='h-1/7 ' />
                </div>
               
            </div>

        </div>
    )
}

export default EighthPage;