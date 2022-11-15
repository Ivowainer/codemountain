import Image from 'next/image'
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className='bg-white px-16 py-6 flex justify-between items-center'>
      {/* <Image src='/Logo.png' width={55} height={110} alt=''/> */}
      <Link href="/" className='cursor-pointer text-center font-bold text-2xl text-sky-400'>Code<span className='text-sky-400'>Mountain</span></Link>
      <div className="ml-5 flex gap-14 justify-center items-center">
        <p className='text-gray-400 font-normal cursor-pointer ink link-underline link-underline-black'>Products</p>
        <p className='text-gray-400 font-normal cursor-pointer ink link-underline link-underline-black'>Pricing</p>
        <p className='text-gray-400 font-normal cursor-pointer ink link-underline link-underline-black'>About Us</p>
      </div>
    </div>
  )
}
