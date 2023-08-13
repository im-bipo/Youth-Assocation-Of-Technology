import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import { NavLinkList } from './List';
function Footer() {
    
  const NavList = NavLinkList;
  
  const date = new Date().getFullYear()
  return (
    <div className="w-[100%] pb-14 desktop:pb-0 bg-gray-800  text-gray-300">
    <h2 className="text-center py-5">CSIT ASSOCATION OF BMC</h2>
    <div className="flex desktop:pl-[10rem] ">
      <div className="pb-1 w-1/3">
        <ul className="p-5">
          {NavList.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 text-right p-5 desktop:pr-[10rem]">
        <div className="text-sm">
          <h6>Contact</h6>
          <p className='py-2'>
          <a href="tel:+9779867824520">+9779867824520</a>
          </p>
          <p>
            Butwal-Golkpark
          </p>
        </div>
      </div>
    </div>
          <p className="text-center">
          <a href="mailto:csitassocationbmc@gmail.com">csitassocationbmc@gmail.com</a>
          </p>
        <p className="text-[.8rem] pb-2 pt-5 text-center">&#169;{date} CSIT ASSOCATION OF BMC. ALL RIGHTS RESERVED</p>

        <h6 className="text-gray-400 text-center text-sm">
          Developed by:{" "}
          <Link className="underline">theFoolishDeveloper</Link>
        </h6>
  </div>
  )
}

export default Footer