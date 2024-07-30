import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

        <div className="logo font-bold text-2xl ">

            <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
           
            </div>
            <a href="https://github.com/jaymistry1511" target='_blank'>
        <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1' >
            <img className='invert p-1 w-10' src="icons/github-mark.svg" alt="github logo"/>
            <span className='font-bold px-2'>
            GitHub
            </span>
        </button>
        </a>
        
        </div>
     </nav>

  )
}

export default Navbar
