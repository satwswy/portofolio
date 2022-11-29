import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-3xl text-gray-300 py-4'>// email - mgeorgak859@gmail.com</p>
                <p className='text-3xl text-gray-300 py-4'>// phone - +30 6946080222</p>
                <p className='text-3xl text-gray-300 py-4'>// LinkedIn - https://www.linkedin.com/in/marios-georgakopoulos-585b33242/</p>
                <p className='text-3xl text-gray-300 py-4'>// Github - https://github.com/satwswy</p>
            </div>
        </form>
    </div>
  )
}

export default Contact