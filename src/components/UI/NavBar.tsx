import Image from 'next/image'

export const NavBar = () => {
  return (
    <div className='shadow-md bg-white px-16 py-4 flex items-center'>
        {/* <Image src='/Logo.png' width={55} height={110} alt=''/> */}
        <p className='font-bold text-2xl text-sky-400'>Code<span className='text-sky-400'>Mountain</span></p>
        <div className="ml-5 flex justify-between w-1/5 items-center">
            <p className='text-gray-400 hover:text-indigo-300 transition-all duration-300 cursor-pointer font-bold'>Products</p>
            <p className='text-gray-400 hover:text-indigo-300 transition-all duration-300 cursor-pointer font-bold'>Pricing</p>
            <p className='text-gray-400 hover:text-indigo-300 transition-all duration-300 cursor-pointer font-bold'>About Us</p>
        </div>
    </div>
  )
}
