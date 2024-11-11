import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <section className='w-[270px] mr-[0.5rem]'>
        <aside id="logo-sidebar" className="fixed border-r-[1px] border-gray-400 top-0 left-0 z-40 w-[270px] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-8 overflow-y-auto bg-gray-50 dark:bg-[#09090b]">
                <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span className='text-[#d1c4e9]'>Codee</span> By{`>`}</span>
                </a>
                <ul className="space-y-2 pl-[17px] font-medium">
                    <li>
                        <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Set Up</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#navbar-section" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Navbar Section</span>
                        </a>
                    </li>
                    <li>
                        <a href="#change-photos" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Change photos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#hero-section" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Hero section</span>
                        </a>
                    </li>
                    <li>
                        <a href="#change-technologys" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Change Technologys</span>
                        </a>
                    </li>
                    <li>
                        <a href="#service-section" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Service section</span>
                        </a>
                    </li>
                    <li>
                        <a href="#my-portfolio-section" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">My Portfolio section</span>
                        </a>
                    </li>
                    <li>
                        <a href="#client-section" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Clients section</span>
                        </a>
                    </li>
                    <li>
                        <a href="#start-your-design" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Start Your Design</span>
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white transition-[background-color] duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Footer</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </section>
  )
}

export default SideBar