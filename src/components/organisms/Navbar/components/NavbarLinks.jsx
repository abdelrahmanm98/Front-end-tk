import React from 'react';
import { JackInTheBox } from 'react-awesome-reveal';

const NavbarLinksComponent = ({ removeOverFlow, NavItems, startScrolling }) => {
  return (
    <ul
      className={`flex gap-6 tablet:mt-8 lg:gap-8 xl:!gap-10 tablet:!gap-6 justify-start items-center tablet:!items-start tablet:flex-col w-full border-solid ${
        startScrolling ? 'border-black' : 'border-white'
      }  pe-4`}
    >
      {' '}
      <JackInTheBox cascade>
        {NavItems?.map((item, index) => (
          <li
            key={index}
            onClick={removeOverFlow}
            className='cursor-pointer tablet:text-[#2D2D2D] text-[#404040] rtl:font-bold nav-item'
          >
            <div className='hidden tablet:block'>
              <a href={item.path} className='nav-link'>
                {item.item}
              </a>
            </div>
            <div className='tablet:hidden'>
              <a href={item.path} className='nav-link'>
                {item.item}
              </a>
            </div>
          </li>
        ))}
      </JackInTheBox>
    </ul>
  );
};

export default NavbarLinksComponent;
