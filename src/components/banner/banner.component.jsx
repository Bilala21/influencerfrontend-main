import React from 'react'
import { popular_searches } from "./json-data"

export const BannerComponent = () => {
  const base_path_image = "/assets/images"
  const base_path_icon = "/assets/images/icons"

  return (
    <section className='relative'>
      <div className='h-[700px]'>
        <img src={`${base_path_image}/bannerbg.jpg`} alt="" className='max-h-full w-full' />
      </div>
      <div className='lg:container absolute z-10 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='max-w-[860px]'>
          <h1 className='text-[45px] font-bold text-white'>
            Empowering Influencers with Promise Bonds, Get the support you need, when you need it.
          </h1>
          <div className='pr-[70px] pt-4'>
            <div className='flex items-center bg-white rounded-full h-20 px-2 gap-x-3 text-base text-primary-dark'>
              <div className='flex items-center min-w-[300px] w-1/2 pl-3 gap-x-3'>
                <img src={`${base_path_icon}/search.png`} alt="search" />
                <input type="text" placeholder='Search here' className='flex-1 focus:outline-0 placeholder:text-primary-dark' />
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex-1 flex items-center gap-x-7'>
                  <span className='h-10 w-[1px] bg-primary-gray-300'></span>
                  <span>Promise Bond</span>
                </div>
                <button role='button' className='bg-primary-dark text-white text-base font-bold block text-center rounded-full w-[122px] py-4'>Search</button>
              </div>
            </div>
          </div>
          <div className='text-base text-white pt-8'>Popular Searches</div>
          <ul className='flex items-center gap-x-3 pt-3'>
            {
              popular_searches.map((search) => {
                return (
                  <li key={search.label}>
                    <button role='button' className='text-base text-white rounded-full bg-[#ffffff33] px-6 py-1'>{search.label}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
