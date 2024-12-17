import { NavLink } from "react-router-dom"
import wedo from "../whatwedo.png"
export default function WhatWeDo() {
    const base_path_icon = "/assets/images/icons"
    return (
        <div className={`flex flex-col justify-between lg:flex-row  items-center md:pt-[120px] pt-8`}>
            <div className="w-full lg:w-1/2 max-h-[550px] max-w-[660px] md:mt-0 mt-8">
                <img src={wedo} alt="machli" className="w-full object-cover" />
                <NavLink to={'/signup'} className="border md:hidden mt-10 mx-auto border-primary-dark flex justify-center gap-x-3 items-center text-primary-dark rounded-full text-base font-bold text-center py-[14px] w-[183px]">
                    Get Started
                    <img src={`${base_path_icon}/right-up-black.svg`} alt="icon" />
                </NavLink>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-24 md:order-1 -order-1">
                <h2 className="font-bold xl:text-[2.38rem] text-[1.50rem] mb-[10px] text-black">
                    What We <span className="font-bold text-[#1DBF73]">Do</span> ?
                </h2>
                <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                    We are a platform built on the belief that talent deserves recognition, and every creator has the power to turn their unique skills into real opportunities. Our mission is simple: to connect creators, issuers, and skilled individuals with audiences who value their expertise.                </p>
                <div className="flex flex-col mt-[20px] gap-[10px]">
                    <div className="gap-[10px] flex items-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.359328C15.4533 0.0468906 14.9468 0.0468906 14.6343 0.359328L5.04983 9.94392L1.3657 6.2598C1.0533 5.94736 0.546797 5.94739 0.234328 6.2598C-0.0781094 6.5722 -0.0781094 7.0787 0.234328 7.39114L4.48414 11.6409C4.79645 11.9533 5.30333 11.9531 5.61552 11.6409L15.7657 1.4907C16.0781 1.1783 16.0781 0.671766 15.7657 0.359328Z" fill="#222222" />
                        </svg>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            Promise Bond lets individuals secure funding now by issuing bonds tied to their future value.
                        </p>
                    </div>
                    <div className="gap-[10px] flex items-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.359328C15.4533 0.0468906 14.9468 0.0468906 14.6343 0.359328L5.04983 9.94392L1.3657 6.2598C1.0533 5.94736 0.546797 5.94739 0.234328 6.2598C-0.0781094 6.5722 -0.0781094 7.0787 0.234328 7.39114L4.48414 11.6409C4.79645 11.9533 5.30333 11.9531 5.61552 11.6409L15.7657 1.4907C16.0781 1.1783 16.0781 0.671766 15.7657 0.359328Z" fill="#222222" />
                        </svg>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            It empowers issuers, professionals, and artists to monetize their talents.                        </p>
                    </div>
                    <div className="gap-[10px] flex items-center">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.359328C15.4533 0.0468906 14.9468 0.0468906 14.6343 0.359328L5.04983 9.94392L1.3657 6.2598C1.0533 5.94736 0.546797 5.94739 0.234328 6.2598C-0.0781094 6.5722 -0.0781094 7.0787 0.234328 7.39114L4.48414 11.6409C4.79645 11.9533 5.30333 11.9531 5.61552 11.6409L15.7657 1.4907C16.0781 1.1783 16.0781 0.671766 15.7657 0.359328Z" fill="#222222" />
                        </svg>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            Supporters can invest in meaningful connections and future success.                        </p>
                    </div>
                </div>
                <NavLink to={'/signup'} className="hidden border mt-10 border-primary-dark md:flex justify-center gap-x-3 items-center text-primary-dark rounded-full text-base font-bold text-center py-[14px] w-[183px]">
                    Get Started
                    <img src={`${base_path_icon}/right-up-black.svg`} alt="icon" />
                </NavLink>
            </div>
        </div>
    )
}