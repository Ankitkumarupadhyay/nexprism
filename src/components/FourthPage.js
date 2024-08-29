import React from 'react'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import box4 from '../assets/box4.png'
import box5 from '../assets/box5.png'
import ltr from '../assets/left_to_right.png'
import rtl from '../assets/right_to_left.png'
import intro from '../assets/intro.png'
import arrow from '../assets/arrow.svg'


const FourthPage = () => {
    return <>

        <div className="main">

            <div className="con flex flex-col mb-[85px] items-center justify-center text-center">

                <h1 className='font-pp text-[21px] '><i>Our Services</i></h1>
                <h3 className='text-[60px] font-medium font-pp mt-9 leading-[66px] '>Five Pathways is here to simplify <br /> your retirement planning.</h3>
                <p className='text-[21px] mt-5 leading-[31px] '>We’ll work with you to create a personalized strategy that incorporates all of <br /> the paths of retirement planning:
                    <span className='underline'>Income,</span>
                    <span className='underline'> Taxes,</span>
                    <span className='underline'> Investments,</span>
                    <span className='underline'> healthcare,</span>  <br />and
                    <span className='underline'> Estate Planning.</span>
                </p>
            </div>

            <div className="info">

                <div className="box1 w-full flex justify-between px-[85px]  h-[395px] ">

                    <div className="img w-[691px] h-[395px] ">
                        <img src={box1} alt="img" className='object-fill w-[691px] h-[395px]' />
                    </div>

                    <div className="det mr-[85px]  w-[401px] my-auto h-[355px]  ">
                        <h1 className='text-[35px] font-pp leading-[38px] mb-3  '>Retirement Income Planning</h1>

                        <p className='text-[15.7px]'>You’ve got goals. But goals cost money. Make sure you have an income that works for you in retirement. And while we’re at it, why not make that income guaranteed*? We’ll show you how to get the most out of your current assets, pension, and/or Social Security (whatever you might have). We’ll also be along for the full ride, helping to smooth things out when the road ahead gets a little bumpy. There are no shortcuts on the path to retirement, but we do know all kinds of clever side streets.</p>

                        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '> Learn More</button>
                    </div>

                </div>

                <div className="img w-full flex items-center justify-center">
                    <img src={ltr} alt="img" />
                </div>

                <div className="box2 w-full flex justify-between px-[80px]  h-[395px] ">

                    <div className="det ml-[85px]   w-[401px] my-auto h-[272px]  ">
                        <h1 className='text-[35px] font-pp leading-[38px] mb-3  '>Tax Planning</h1>

                        <p className='text-[15.7px]'>Your retirement plans may not include the IRS. But rest assured, the IRS has plans for your retirement. Let’s work together to make sure you get to keep the money you’ve earned. We’ll show you how to diversify your tax strategy and maximize your retirement benefits. We’ll make sure that paying taxes isn’t a roadblock on your way to retirement.</p>

                        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '> Learn More</button>
                    </div>

                    <div className="img w-[691px] h-[395px] ">
                        <img src={box2} alt="img" className='object-fill w-[691px] h-[395px]' />
                    </div>

                </div>

                <div className="img w-full flex items-center h-[197px] justify-center">
                    <img src={rtl} alt="img" />
                </div>


                <div className="box3 w-full flex justify-between px-[80px]  h-[395px] ">

                    <div className="img w-[691px] h-[395px] ">
                        <img src={box3} alt="img" className='object-fill w-[691px] h-[395px]' />
                    </div>

                    <div className="det mr-[85px]  w-[401px] my-auto h-[355px]  ">
                        <h1 className='text-[35px] font-pp leading-[38px] mb-3  '>Investment Planning</h1>

                        <p className='text-[15.7px]'>The perfect retirement looks a little different for everybody. The ideal portfolio should be the exact same way. Let's make sure your investment outlook is right, while reducing risk, minimizing fees, and potentially creating a higher return. And because we’re fully independent, we only answer to you. Whatever your personal goals are, we’re here to keep your investments rolling in the right direction.</p>

                        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '> Learn More</button>
                    </div>

                </div>

                <div className="img w-full flex items-center justify-center">
                    <img src={ltr} alt="img" />
                </div>

                <div className="box4 w-full flex justify-between px-[80px]  h-[395px] ">

                    <div className="det ml-[85px]   w-[401px] my-auto h-[272px]  ">
                        <h1 className='text-[35px] font-pp leading-[38px] mb-3  '>Medicare/LTC Planning</h1>

                        <p className='text-[15.7px]'>It’s not always easy to talk about aging. It can be even harder to plan for it. We’ll help you make a plan and build a retirement strategy that accounts for all contingencies. Make sure you’re ready for all the unexpected twists and turns on the path ahead.</p>

                        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '> Learn More</button>
                    </div>

                    <div className="img w-[691px] h-[395px] ">
                        <img src={box4} alt="img" className='object-fill w-[691px] h-[395px]' />
                    </div>

                </div>

                <div className="img w-full flex items-center h-[197px] justify-center">
                    <img src={rtl} alt="img" />
                </div>

                <div className="box5 w-full flex justify-between px-[85px]  h-[395px] ">

                    <div className="img w-[691px] h-[395px] ">
                        <img src={box5} alt="img" className='object-fill w-[691px] h-[395px]' />
                    </div>

                    <div className="det mr-[85px]  w-[401px] my-auto h-[355px]  ">
                        <h1 className='text-[35px] font-pp leading-[38px] mb-3  '>Legacy/Estate Planning</h1>

                        <p className='text-[15.7px]'>You’ve worked hard for everything you have. We’re guessing you didn’t do it so you could leave your inheritance to your least favorite uncle–Uncle Sam. We’ll help you minimize taxes and reduce penalties. We’ll also show you those smart backroads that only the locals know about. And we’ll give you full control over who gets what. Make sure the people and causes you care about have the means to follow their own path.</p>

                        <button className='bg-[#63CFBF]  mt-6 py-2  px-4 rounded-full border border-black flex '> Learn More</button>
                    </div>

                </div>


            </div>

            <div className="intro mt-[100px] flex justify-center w-full h-[520px] mb-[107px] px-[85px]  ">
                <div className="con bg-[#FCEFCF] w-[1058px] h-[520px] flex ">
                    <div className="img">
                        <img src={intro} alt="img" className='w-[470px] h-[520px] object-cover ' />
                    </div>
                    <div className="det my-auto w-[522px] h-[350px]  ">
                        <h1 className='text-[60px] leading-[66px] font-pp  '>Five Pathways is <br /> here to simplify your retirement planning.</h1>

                        <p className='text-[16px] mt-[17px] ' >We’ll work with you to create a personalized strategy that <br /> incorporates all of the paths of retirement planning by focusing <br /> on what is most important to you.</p>


                        <div className="btn flex gap-9">
                            <button className='bg-[#63CFBF]  mt-4 py-2  px-4 rounded-full border border-black flex '>Shedule a meeting <img src={arrow} alt="arr" className='ml-3 h-[1.7rem] w-5 ' />  </button>
                            <button className='bg-[#63CFBF]   mt-4 py-2  px-4 rounded-full border border-black  '>Contact</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    </>
}

export default FourthPage
