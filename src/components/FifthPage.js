import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import arrow from '../assets/arrow.svg'

const FifthPage = () => {
  return <>

  <div className="main w-full h-[1016px] pt-[70px] pb-[107px] px-[85px] bg-[#EEF3E7] ">

    <h1 className='text-[21px] font-pp '><i>Our Products</i></h1>

    <div className="con h-[755px]  mt-[60px] flex ">

        <div className="info w-[470px] h-full  mr-[50px]  ">

            <h3 className='text-[60px] leading-[66px] font-pp ' >It’s ok to stop and ask for directions.</h3>
            <p className='text-[21px] mt-5 leading-[31px] ' >Don't confuse a portfolio with an actual plan. A few vague directions from an advisor just won't cut it. What you need is a true financial guide–someone who's traveled this road many times and knows the best routes to success. There is no simple path to this destination. That’s why we’ll travel by your side the whole way, making sure that all roads lead to the retirement you imagine.</p>

        </div>


        <div className="card w-[828px]  h-full flex flex-wrap gap-[25px] ">

            <div className="card1 w-[395px] h-[375px] rounded-xl  bg-white px-[26px] pt-[26px] ">
                <img src={card1} alt="img" className='w-[43px] object-cover h-[43px]  '  />
                <h3 className='text-[16px] my-3 font-bold ' >Annuities</h3>
                <p>Annuities are just a product. They are not a plan. So depending on your personal situation, an annuity may or may not be right for you. An annuity can replace an accumulation strategy or create guaranteed growth, and it can even create private pension-like income. But does it make sense for you?</p>
                <img src={arrow} alt="arrow" className='w-[22px] h-[13px] mt-3 cursor-pointer ' />

            </div>
            <div className="card2 w-[395px] rounded-xl h-[375px] bg-white px-[26px] pt-[26px] ">
                <img src={card2} alt="img" className='w-[43px] object-cover h-[43px]  '  />
                <h3 className='text-[16px] my-3 font-bold ' >Life Insurance</h3>
                <p>If you’re waiting until you die to utilize life insurance, you might be doing it wrong. After all, it’s called life insurance—not death insurance. But there are a lot of options out there. So which policy can help you the most in retirement? Well, this depends on your strategy. Although most people buy life insurance for its death benefit, there are a myriad of ways to utilize it while you're alive.</p>
                <img src={arrow} alt="arrow" className='w-[22px] h-[13px] mt-3 cursor-pointer ' />

            </div>
            <div className="card3 rounded-xl  w-[395px] h-[375px] bg-white px-[26px] pt-[26px] ">
                <img src={card3} alt="img" className='w-[43px] object-cover h-[43px]  '  />
                <h3 className='text-[16px] my-3 font-bold ' >Assets Under Management</h3>
                <p>Imagine you hire somebody to do a job for you. If they do the job well, you’re happy to pay them. But what if they don't do the job at all? Is it still worth the money? This is how we feel about assets under management with a traditional advisor. The market goes up and you pay your fee. The market goes down, you lose money...and you still pay your fee. We think you can do better.</p>
                <img src={arrow} alt="arrow" className='w-[22px] h-[13px] mt-3 cursor-pointer ' />

            </div>
            <div className="card4 rounded-xl  w-[395px] h-[375px] bg-white px-[26px] pt-[26px] ">
                <img src={card4} alt="img" className='w-[43px] object-cover h-[43px]  '  />
                <h3 className='text-[16px] my-3 font-bold ' >Medicare/Long Term Care</h3>
                <p>Sure, you have Medicare and savings. But do you have a plan for your long-term care? Spoiler Alert: having kids isn’t a plan...at least not a good one.</p>
                <img src={arrow} alt="arrow" className='w-[22px] h-[13px] mt-3 cursor-pointer ' />

            </div>

        </div>
    </div>



  </div>
  
  
  </>
}

export default FifthPage
