import React from 'react'
import Logo from "../assets/fivepathways.com_.png"
import footeLogo from "../assets/footerlogo.png"
import Anger from"../assets/Anger.png"
import arrow from '../assets/arrow.svg'


const Footer = () => {
    return (
        <div className='grid grid-cols-4 m-3  h-[40rem]'>
            <div className='1  px-10'>
                <div className=''>
                    <img src={Logo} alt="logo" />
                    <p className='font-serif text-[20px] mt-9'>Get directions on the<br />
                        road to retirement.</p>
                  <div className='mt-2'>

                  <button className='relative w-[250px] bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border  border-black flex text-left pr-[7rem]  '>My guide <img src={arrow} alt="arr" className=' absolute right-5 h-[1.7rem] ml-3 w-5 ' /> </button>

                    <button className='bg-[#63CFBF] relative w-[250px] mt-4 py-2  px-4 rounded-full border border-black flex text-left pr-[9rem]  '>Log in <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 absolute right-5 ' /> </button>

                    <button className='bg-[#63CFBF] relative w-[250px] mt-4 py-2  px-4 rounded-full border border-black flex text-left pr-[2.5rem]   '> Upload Files Securely <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 absolute right-5 ' /> </button>

                    <button className='bg-[#63CFBF] relative w-[250px] mt-4 py-2  px-4 rounded-full border border-black flex text-left  pr-[3rem] '> Claw Machine game <img src={arrow} alt="arr" className='h-[1.7rem] ml-3 w-5 absolute right-5 ' /> </button>

                  </div>
                    {/* <div className='mt-5'>
                        <img src={footeLogo} />

                    </div> */}
                </div>
            </div>
            <div className='2 px-10 '>

                <h1 className=' leading-[30px] font-pp text-[20px] mt-5'><i>Services</i></h1>

                <div className='border border-gray-300 my-2'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Income Planning</li>
                    <li className='py-1'>Text Planning</li>
                    <li className='py-1'>Investment Planning</li>
                    <li className='py-1'>HeathCare/Logo Term Care Plannig</li>
                    <li className='py-1'>Legacy/Estate Plannig</li>
                </ul>
                <h1 className=' mt-5 leading-[30px] font-pp text-[20px]'><i>Products</i></h1>
                <div className='border border-gray-300 my-3'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Annuties</li>
                    <li className='py-1'>Life insurance</li>
                    <li className='py-1'>Long Tearm Care</li>
                    <li className='py-1'>Assets Under Management</li>
                  
                </ul>
            </div>
            <div className='3  px-10'>
            <h1 className=' mt-5 leading-[30px] font-pp text-[20px]'><i>Products</i></h1>
                <div className='border border-gray-300 my-3'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Insights</li>
                    <li className='py-1'>Question jar</li>
                    <li className='py-1'>Current Rents & Market Conditions</li>
                  
                </ul>
                <h1 className=' mt-5 leading-[30px] font-pp text-[20px]'><i>Virtual Office</i></h1>
                <div className='border border-gray-300 my-3'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Font Desk</li>
                </ul>
                <h1 className=' mt-5 leading-[30px] font-pp text-[20px]'><i>About</i></h1>
                <div className='border border-gray-300 my-3'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>About Five Pathways</li>
                    <li className='py-1'> Meet Your Team</li>
                    <li className='py-1'>Testimonials</li>
                    <li className='py-1'>FAQS</li>
                    <li className='py-1'>Contact</li>
                    <li className='py-1'>Meet Angei</li>


                  
                </ul>
            </div>
            <div className='4  px-10'>
            <h1 className=' mt-5 leading-[30px] font-pp text-[20px]'><i>Contact</i></h1>
                <div className='border border-gray-300 my-3'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Email:Service@fivepathways.com</li>
                    <li className='py-1'>Phone:(480)933-8300</li>
                    </ul>
<div className='flex mt-2 '>
<button className='bg-[#63CFBF] mt-3 py-1 px-1 rounded-full  border  border-black   font-bold  text-[20px]  '>In   </button>
<p className='mt-5 px-5 leading-[30px] font-pp  text-[25px]'><i>Linkedin</i></p>
    </div> 
    <div className='flex '>
<button className='bg-[#63CFBF] mt-3 py-1 px-2 rounded-full border  border-black   font-bold  text-[20px]  '> F  </button>
<p className='mt-5 px-5 leading-[30px] font-pp text-[25px]'><i>Facebook</i></p>
    </div>  
   <div className='pl-5 mt-12'>
   <img src={Anger} alt='img'/> </div>                

            </div>
            <img src={footeLogo} alt='i'/>
        </div>
    )
}

export default Footer