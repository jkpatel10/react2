import React from 'react'

export default function Nav({dark,setDark}) {

  return (
    <nav className="relative bg-white">
        <div className="relative flex h-20 items-center justify-between px-10">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <svg className="block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

      <div className="flex items-center w-[50%] justify-between">
          <div className="flex items-center">
            <img src="https://b.zmtcdn.com/data/edition_assets/17466982242413.svg" alt="Your Company" className="h-12 filter invert"/>
            <div class="bg-gray-300 h-[30px] w-[1.4px] ml-3 mr-2 dds-opacity-50"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024"><path fill="#9983f1" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"/><path fill="#876eebff" d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320"/></svg>
            <div className='text-sm ml-3'>
              <h4 className='font-semibold text-base'>Gurugram</h4>
              <p className='text-gray-500 text-sm'>Haryana</p>
            </div>
          </div>

       <div className="flex items-center">
        <a href="#" className="rounded-full bg-[#e8e5ff] px-4 py-2 text-sm font-medium">For you</a>
        <a href="#" className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Dining</a>
        <a href="#" className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Events</a>
        <a href="#" className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Movies</a>
        <a href="#" className="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">Activities</a>
       </div>
    </div>

    <div className="relative mt-3 w-[5%] sm:mt-0 sm:ml-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="blue" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" /></svg>
        </div>
        <input type="text" placeholder="Search for events, movies and restaurants" className="block h-10 w-83 pl-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"/>
      </div>
    </div>
    <div className='bg-gray-300 h-8 w-8 rounded-full'>
     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" className='m-[6px]' viewBox="0 0 24 24">
    	<g fill="none" stroke="#fff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		  <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1" stroke-dashoffset="0" />
	  	<path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z" stroke-dashoffset="0" />
	   </g>
    </svg>
    </div>
  </div>
</nav>
  );
}