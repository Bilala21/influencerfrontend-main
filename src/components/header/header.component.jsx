import React from 'react'
import {NavLink } from 'react-router-dom'
import { become_a_seller, categories, links, login, sign_up } from './json-data'


export const HeaderComponent = () => {
  const base_path_icon = "/assets/images/icons"

  return (
    <header>
      <nav className='px-8'>
        <div className='flex pt-2'>
          <div className='flex items-center gap-x-7'>
            <NavLink to='/'>
              <img src={`${base_path_icon}/logo.svg`} alt="" />
            </NavLink>
            <span className='h-10 w-[1px] bg-primary-gray-300'></span>
            <NavLink to={categories.url} className='text-base font-medium flex items-center gap-x-3 hover:text-primary-green '>
              <img src={`${base_path_icon}/categories.png`} alt="" />
              <span>{categories.label}</span>
            </NavLink>
          </div>
          <div className='flex-1 flex justify-end items-center gap-x-8'>
            <ul className='flex items-center gap-x-8'>
              {
                links.map((link, index) => {
                  return (
                    <li key={link.label}>
                      <NavLink to={link.url} className='text-base font-medium block text-center py-9 border-t-[4px] border-transparent hover:text-primary-green'>
                        {link.label}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <ul className='flex items-center gap-x-8'>
              <li>
                <NavLink to={become_a_seller.url} className='text-base font-medium block text-center py-9 border-t-[4px] border-transparent hover:text-primary-green'>
                  {become_a_seller.label}
                </NavLink>
              </li>
              <li>
                <NavLink to={login.url} className='text-base font-medium block text-center py-9 border-t-[4px] border-transparent hover:text-primary-green'>
                  {login.label}
                </NavLink>
              </li>
              <li>
                <NavLink to={sign_up.url} className='bg-primary-dark text-white rounded text-base font-medium block text-center py-2 w-[114px]'>
                  {sign_up.label}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
