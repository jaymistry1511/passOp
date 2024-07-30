import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col items-center justify-center bottom-0 w-full'>
            <div className="logo font-bold text-2xl ">

                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>

            </div>
            <div className='flex'>
                Creted by <a href="https://github.com/jaymistry1511" target='_blank'>  @Jay Mistry</a>
            </div>
        </div>
    )
}

export default Footer
