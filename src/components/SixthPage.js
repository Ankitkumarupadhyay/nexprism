import React from 'react'
import pool from '../assets/pool.png'
import torch from '../assets/torch.png'
import home from '../assets/home.png'

const SixthPage = () => {
    return <>

        <div className="main py-[111px] h-[1837px] w-full  ">

            <div className="con px-[85px] w-full h-full  ">

                <div className="head relative flex items-center justify-between w-full h-6 mb-[25px] ">
                    <hr className='w-full border-b border-black  ' />
                    <div className="in  absolute w-full flex items-center justify-between ">
                        <h1 className='pr-5 uppercase bg-white left-0'>Your Roadmap </h1>
                        <h1 className='font-pp text-[21px] px-5 bg-white '><i>Five pathways </i></h1>
                        <h1 className='pl-5 uppercase bg-white right-0'>To retirement</h1>
                    </div>
                </div>

                <div className="ins mt-10 flex items-end justify-between ">

                    <h1 className='font-pp text-[60px] leading-[66px] uppercase  '>jul.</h1>
                    <img src="https://fivepathways.com/insights-title.png" alt="im" className='w-[945px] h-[195px] ' />
                    <h1 className='font-pp text-[60px] leading-[66px] uppercase  '>2024</h1>


                </div>

                <p className='w-full text-center text-[20px] leading-[31px] pt-4 pb-6 '>Let’s focus on things we can control—taxes, fees, and risk— and <br /> stop chasing the things we can’t.</p>

                <div className="rate flex w-full h-[80px] border-y border-black ">
                    <h1 className='w-1/12 text-[18px] leading-[29px] border-r border-black h-full flex items-center justify-center '><i>Todays Rates</i></h1>
                    <div className="per border-r border-black flex justify-around  w-10/12 h-full ">

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.35%</h1>
                            <p className=' text-[12px] uppercase  leading-[12px]'>2 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.9%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>3 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.55%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>4 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.7%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>5 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.7%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>6 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.75%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>7 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.5%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>8 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.5%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>9 years</p>
                        </span>

                        <span className='flex flex-col h-full items-center justify-center'>
                            <h1 className='font-pp text-[22px] leading-[33px] '>5.6%</h1>
                            <p className=' text-[12px] uppercase leading-[12px]'>10 years</p>
                        </span>

                    </div>
                    <h1 className='w-1/12 underline text-[18px] leading-[29px]  h-full flex items-center justify-center '>See More</h1>
                </div>

                <div className="nasdaq w-full h-[50px] border-b border-black flex items-center justify-between ">
                    <span className='text-[18px] leading-[27px] ' >(0.90%)</span>
                    <span className='text-[18px] leading-[27px] ' >FTSE 100  8203.90  -37.40(-0.45%)</span>
                    <span className='text-[18px] leading-[27px] ' >S&P 500  5567.19  30.17(0.54%)</span>
                    <span className='text-[18px] leading-[27px] ' >Dow Jones  39375.87.19  67.87(0.17%)</span>
                    <span className='text-[18px] leading-[27px] ' >NASDAQ</span>
                </div>

                <div className="img flex justify-between w-full h-[1050px] px-[76px] pt-[43px] pb-[52px] ">
                    <div className="education w-[729px] h-full ">
                        <img src={pool} alt="pool" className='w-[728px] h-[612px] border-2 border-black rounded-lg object-contain ' />
                        <div className="btn  mt-4 w-full h-[50px] pb-[20px] ">
                            <span className='border border-black py-1 rounded-full  ' ><button className='px-4 ' >Investment</button></span>
                            <span className='pl-5' >SEP 8, 2023</span>
                        </div>
                        <h1 className='text-[60px] leading-[66px] font-pp  ' >Conquering Retirement Challanges for Women </h1>
                    </div>

                    <div className="tw w-[410px] h-full  ">

                    <img src={torch} alt="torch" className='w-[408px] h-[344px]  object-fill ' />
                        <div className="btn  mt-4 w-full h-[40px]  ">
                            <span className='border border-black py-1 rounded-full  ' ><button className='px-4 ' >News</button></span>
                            <span className='pl-3 text-[14px] ' >APR 22, 2024</span>
                        </div>
                        <h1 className='text-[20px] leading-[31px]   ' >We've Been Nominated for the 2024 BBB Torch Award! </h1>

                    <img src={home} alt="home" className='w-[408px] h-[344px] mt-5  object-fill ' />
                        <div className="btn  mt-4 w-full h-[40px]  ">
                            <span className='border border-black py-1 rounded-full  ' ><button className='px-4 ' >INCOME</button></span>
                            <span className='pl-3 text-[14px] ' >SEP 8, 2023</span>
                        </div>
                        <h1 className='text-[20px] leading-[31px]   ' >How Retirement Spending Changes With <br />Time</h1>

                    </div>

                </div>

                <div className="bot relative flex items-center justify-center w-full h-6 mt-[25px] ">
                    <hr className='w-full border-b border-black  ' />
                    <div className="in  absolute w-full flex items-center justify-center ">
                        <h1 className='w-[300px] text-center uppercase bg-white '><button className='bg-[#63CFBF] px-10   mt-4 py-2   rounded-full border border-black  '>View More Insights</button> </h1>
                        
                    </div>
                </div>





            </div>

        </div>


    </>
}

export default SixthPage
