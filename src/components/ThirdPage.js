import React from 'react'
import quotes from '../assets/quotes.png'
import star from '../assets/star.png'
import arrow from '../assets/arrow.svg'

const ThirdPage = () => {
  return <>
  
  <div className="main py-[106px] px-[85px]   ">
    <div className="info flex flex-col items-center ">
        <h2 className='text-center  font-pp text-[21px] font-thin '> <i>Journeys from the Past</i></h2>
        <div className="slide gap-9 h-[410px] border-x-4 border-l-black border-r-black overflow-hidden mt-9 flex justify-between items-center ">
            

            <div className="sli1 border-y-2 border-black border-r-2 rounded-r-lg     relative w-[200px] h-[390px] flex flex-col items-center justify-center overflow-hidden">
                {/* <img src={quotes} alt="qu" className='absolute top-2 left-5' /> */}
                <p className='w-[494px] absolute top-[90px] right-[100px] h-[161px] text-[16px] text-center  '>Five Pathways has one of the absolute best customer service teams that I have experienced in a very long time. I have experienced a greedy salesman in the past when I didn't have the knowledge to realize it. Five Pathways is very helpful, thorough, honest, and sincerely tries to help potential clients, but not just to make a sale. They have the highest integrity and is sincerely interested in helping the client "see it like it is".</p>
                <h1 className='mt-5 absolute top-[250px] right-[100px] text-2xl font-serif font-bold  w-[494px] border-b border-black ' >The Five Pathways Family </h1>
                <img src={star} alt="star" className='absolute w-[120px] h-[45px] bottom-5 right-5 ' />
            </div>
            <img src={arrow} alt="i" className='w-[37px] cursor-pointer rotate-180 h-[22px] ' />

            <div className="sli2 border-2 rounded-xl border-black    relative w-[700px] h-[390px] flex flex-col items-center justify-center">
                <img src={quotes} alt="qu" className='absolute top-2 left-5' />
                <p className='w-[494px] h-[161px]  text-[16px]  '>Five Pathways has one of the absolute best customer service teams that I have experienced in a very long time. I have experienced a greedy salesman in the past when I didn't have the knowledge to realize it. Five Pathways is very helpful, thorough, honest, and sincerely tries to help potential clients, but not just to make a sale. They have the highest integrity and is sincerely interested in helping the client "see it like it is".</p>
                <h1 className='mt-5 text-2xl font-serif font-bold  w-[494px] border-b border-black ' >The Five Pathways Family </h1>
                <img src={star} alt="star" className='absolute w-[120px] h-[45px] bottom-5 right-5 ' />
            </div>

            <img src={arrow} alt="i" className='w-[37px] cursor-pointer h-[22px] ' />

            <div className="sli3 border-y-2 border-black border-l-2 rounded-l-lg  overflow-hidden  relative w-[200px] h-[390px] flex flex-col items-center ">
                <img src={quotes} alt="qu" className='absolute top-2 left-5' />
                <p className='absolute top-[90px] left-[100px] w-[494px] h-[161px] text-[16px]  '>Five Pathways has one of the absolute best customer service teams that I have experienced in a very long time. I have experienced a greedy salesman in the past when I didn't have the knowledge to realize it. Five Pathways is very helpful, thorough, honest, and sincerely tries to help potential clients, but not just to make a sale. They have the highest integrity and is sincerely interested in helping the client "see it like it is".</p>
                <h1 className='mt-5 absolute top-[250px] left-[100px] text-2xl font-serif font-bold  w-[494px] border-b border-black ' >The Five Pathways Family </h1>
                {/* <img src={star} alt="star" className='absolute bottom-0 right-5 ' /> */}
            </div>

          
        </div>
        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '>More journeys<img src={arrow} alt="arr" className='ml-3 h-[1.7rem] w-5 ' />  </button>

    </div>
  </div>
  
  </>
}

export default ThirdPage
