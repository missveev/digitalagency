import React from 'react'

const Footer = () => {
  return (
    
<footer className="bg-milkwhite w-full bottom-0 end-0 shadow  dark:bg-midnightsky">
<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
  <span className="text-md text-gray-500 sm:text-center dark:text-milkwhite">© 2023 <a href="veevportfolio.vercel.app" className="hover:underline">MsVeev</a>. All Rights Reserved.
</span>
<ul className="flex flex-wrap items-center mt-3 text-md font-medium text-black dark:text-milkwhite sm:mt-0">
    <li>
        <a href="/" className="hover:underline me-4 md:me-6">About</a>
    </li>
    <li>
        <a href="/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
    </li>
    <li>
        <a href="/" className="hover:underline me-4 md:me-6">Licensing</a>
    </li>
    <li>
        <a href="/" className="hover:underline">Contact</a>
    </li>
</ul>
</div>
</footer>

  )
}

export default Footer