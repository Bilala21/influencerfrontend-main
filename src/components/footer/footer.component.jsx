import React from 'react'
import { NavLink } from 'react-router-dom'

export const FooterComponent = () => {
    const base_path_icon = "/assets/images/icons"
    return (
        <footer className='bg-primary-dark pt-14 pb-4'>
            <div className='lg:container mx-auto text-base pt-1'>
                <div className='flex justify-between'>
                    <div className='max-w-[690px] flex-1'>
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-medium text-[17px] m-0">Subscribe</p>
                            <div className="w-full rounded-full flex justify-between bg-[#ffffff3b] px-5">
                                <input placeholder="Enter Your Email Address" className=" h-[70px] outline-none bg-transparent border-none lg:text-[0.94rem] text-[0.75rem] text-white w-[80%] placeholder:text-white" />
                                <button className="text-[#1dbf73] lg:text-[0.94rem] text-[0.75rem]">Send</button>
                            </div>
                        </div>
                        <div className='pt-[84px] flex justify-between'>
                            <ul className=' leading-9 text-white'>
                                <li className='text-[17px] font-medium opacity-100'>Careers</li>
                                <li className=' opacity-50'>Press & News</li>
                                <li className=' opacity-50'>Partnerships</li>
                                <li className=' opacity-50'>Privacy Policy</li>
                                <li className=' opacity-50'>Terms of Service</li>
                                <li className=' opacity-50'>Investor Relations</li>
                            </ul>
                            <ul className=' leading-9 text-white'>
                                <li className='text-[17px] font-medium opacity-100'>Home</li>
                                <li className=' opacity-50'>How It Works</li>
                                <li className=' opacity-50'>Market</li>
                                <li className=' opacity-50'>Support</li>
                                <li className=' opacity-50'>Promise Bond</li>
                            </ul>
                            <ul className=' leading-9 text-white'>
                                <li className='text-[17px] font-medium opacity-100'>Help & Support</li>
                                <li className=' opacity-50'>Trust & Safety</li>
                                <li className=' opacity-50'>Selling on Freeio</li>
                                <li className=' opacity-50'>Buying on Freeio</li>
                            </ul>
                        </div>
                    </div>
                    <div className='max-w-[440px] flex-1'>
                        <div>
                            <img src={`${base_path_icon}/footer-logo.svg`} alt="logo" />
                            <div className='pt-11 flex justify-between'>
                                <div className='text-white'>
                                    <div className='opacity-50'>Toll Free Customer Care</div>
                                    <div className='fs-[17px]'>+(1) 123 456 7890</div>
                                </div>
                                <div className='text-white'>
                                    <div className='opacity-50'>Need live support?</div>
                                    <div className='fs-[17px]'>hi@promisebond.com</div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[53px]'>
                            <p class="text-white font-medium text-[17px] m-0 pb-2">Apps</p>
                            <div className='flex gap-2'>
                                <NavLink className='flex justify-center items-center h-[60px] gap-2 rounded-full bg-white bg-opacity-10 w-[210px]'>
                                    <img src={`${base_path_icon}/apple.svg`} alt="" />
                                    <div className='text-white'>
                                        <div className='text-[13px] opacity-80'>Download on the</div>
                                        <div>Apple Store</div>
                                    </div>
                                </NavLink>
                                <NavLink className='flex justify-center items-center h-[60px] gap-2 rounded-full bg-white bg-opacity-10 w-[210px]'>
                                    <img src={`${base_path_icon}/google-play.svg`} alt="" />
                                    <div className='text-white'>
                                        <div className='text-[13px] opacity-80'>Get in on</div>
                                        <div>Google Play</div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className='pt-[60px]'>
                            <p class="text-white font-medium text-[17px] m-0 pb-2">Follow Us</p>
                            <ul className='flex items-center gap-x-6 pt-6'>
                                <li className='active active-media w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/facebook.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/twitter.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/instagram.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/linkedin.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/whatsapp.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/you-tube.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-opacity-10 flex justify-center items-center'>
                                    <NavLink to='/'>
                                        <img src={`${base_path_icon}/tiktok.svg`} alt="icon" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t pt-3 mt-[83px] border-t-primary-gray-500'>
                    <div className='text-white opacity-50'>Copyright © Promise Bond 2024 | All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}
