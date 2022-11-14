import Image from 'next/image'

export const NavBar = () => {
  return (
    <div className='shadow-sm bg-white px-10 py-2 flex justify-between items-center'>
        <Image src='/Mountain.png' width={110} height={110} alt=''/>
        <div className="">
            <p className='text-gray-600 hover:text-indigo-500 transition-all cursor-pointer'>Pricing</p>
        </div>
    </div>
  )
}
