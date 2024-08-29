import React from 'react'
import watch from '../assets/watch.png'
import video from "../assets/video.png"

const SecondPage = () => {
  return <>
  
  <div className="main bg-[#e8e3d6]  py-[68px] px-[85px] ">

    <div className="con bg-white">
        <div className="head flex flex-col text-center justify-center items-center">
            <img src={watch} alt="watch" />
            <h2 className='text-[60px] leading-[66px] font-pp ' >Get directions on <br />
            the road to retirement</h2>
        </div>
        <div className="info h-[470px] w-[100%]  pt-10 pb-16 px-16 flex justify-around ">
            <div className="det w-[500px] h-[308px] text-[21px] ">
                <p>Your journey through retirement is unique. Each part of your financial life is just one of many pathways on your personal retirement roadmap. But that roadmap can get a little complicated. It’s ok to stop and ask for directions. Of course, if you ask three people for directions, you’ll probably get three different answers. We’re here to help you make sense of it all. We recognize that the route to retirement is not a single road. It is a journey to the place where all roads converge. We’re here to make sure you reach your destination with confidence.</p>
                <h1 className='mt-5 text-2xl font-pp font-bold  w-full border-b border-black ' ><i>The Five Pathways Family </i></h1>
            </div>
            <div className="img  ">
                <img src={video} alt="video" className='rounded-xl w-[560px] h-[315px] object-fill' />
            </div>
        </div>
    </div>


  </div>
  
  </>
}

export default SecondPage
