import React from 'react'
import Office from "../assets/office.png"
import machine from "../assets/machine.png"

const SeventhPage = () => {
    return (
        <div className='bg-[#FEE3D9] mb-[106px] py-[77px] px-[85px] '>
            <div className='grid grid-flow-col  '>
                <div className='1 ml-10 mt-10  bg-white w-[674px] h-[788px] py-[38px] px-[90px]   rounded-l-lg mb-10 '>
                    
                        <h1 className='text-center mt-10 text-[21px] leading-[31px] font-pp mb-2  ' ><i>Virtual office</i></h1>
                        <img src={Office} alt='img' className='w-[341px] ml-16 h-[230px] ' />
                        <div className=' '>
                            <p className='text-center mt-[30px] text-[60px] leading-[66px] font-pp'>At your fingertips, <br />anytime, anywhere.</p>
                            <p className=' text-center text-[20px] mt-3 leading-[31px]  '>
                                Wherever the road takes you, we’re right by your side. Think of us as retirement GPS without the annoying robot voice.
                            </p>
                            <div className='mb-20'>
                                <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex m-auto  '>Visit The Office  </button>

                            </div>
                        </div>
                    
                </div>
                <div className='2   mt-10 w-[674px] h-[788px] py-[38px] px-[90px]  bg-white   border border-l-black  mb-10  rounded-r-lg'>
                    <div >
                        <h1 className='text-center mt-10  mb-1 text-[21px] leading-[31px] font-pp ' ><i>Our Mission</i></h1>
                        <img src={machine} alt="img" className='w-[341px] ml-16 h-[230px] ' />

                        <p className='text-center mt-[30px] text-[60px] leading-[66px] font-pp'>Here to help you <br />make sense of it all</p>
                        <p className=' text-center text-[20px] mt-3 leading-[31px] '>Don’t just retire. Retire with a purpose. Our Mission <br />is to make your retirement better, plain and simple
                            <br /> We’re real people with families and goals, just like <br />you. So we understand how personal retirement is. <br />We’ll be with you every step of the way, making sure <br />you’re always on the right path
                        </p>
                        <div className='mb-20'>
                            <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex m-auto  '>Meet the team  </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeventhPage;