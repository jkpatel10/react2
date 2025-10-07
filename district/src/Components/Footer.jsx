import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#1e1e20] font-semibold px-15 h-80'>
      <div className='text-white text-center flex justify-between items-center h-50'>
        <div>
          <img alt="app-store" src="https://b.zmtcdn.com/data/edition_assets/17466982242413.svg" width="125" class="cursor-pointer"></img>
        </div>
        <div className='flex items-center gap-5'>
          <div>
            <h4>Terms & Conditions</h4>
          </div>
          <div>
            <h4>Privacy Policy</h4>
          </div>
          <div>
            <h4>Contact Us</h4>
          </div>
          <div>
            <h4>List your events</h4>
          </div>
        </div>
        <div className='text-center'>
          <img src="src/img/11 (2).svg" className='h-25 mt-5 place-self-center rounded-md' alt="" />
          <h4>Scan to download the App</h4>
        </div>
      </div>
      <div class="border-t border-[#77777E] my-6"></div>
      <div className='text-[#77777E] flex items-center justify-between text-sm'>
          <p>By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
       <div className='flex items-center gap-3'>
          <img src="https://b.zmtcdn.com/data/edition_assets/17544745854724.svg" className='h-7' alt="" />
          <img src="https://b.zmtcdn.com/data/o2_assets/9875b1e59bd4c4cc35068c9ff48962de1742906588.png" className='h-7' alt="" />
          <img src="https://b.zmtcdn.com/data/o2_assets/c14de0ff254f0cac2316900cbeb5ca4e1742906714.png" className='h-7' alt="" />
          <img src="https://b.zmtcdn.com/data/o2_assets/21ebc1fe6df75df6159d00e9ab651d681742906748.png" className='h-7' alt="" />
          <img src="https://b.zmtcdn.com/data/edition_assets/17544745843353.svg" className='h-7' alt="" />
        </div>
      </div>
    </div>
  )
}
