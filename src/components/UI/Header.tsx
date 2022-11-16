import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row header w-screen md:justify-between px-10 md:px-40 items-center">
        <div className="gap-3 flex items-center md:items-start text-4xl md:text-7xl leading-tight text-sky-400 line-h font-bold flex-col md:w-1/2">
            <p>Hey!<span className='text-4xl md:text-6xl'>👋</span></p>
            <p>We are</p>
            <p className='bg-sky-500 text-white px-3 md:px-3 md:py-1 text-center'>CodeMountain</p>
            <p className='text-center md:text-left mt-5 leading-tight font-medium text-lg md:text-xl w-5/6 text-gray-500'>We provide IT solutions for companies that are looking for a digital transformation, both internal and externally.</p>
        </div>
        <div className="rounded-full hidden md:flex">
            <Image className='rounded-full' src='/Mountain.png' width={400} height={400} alt="Mountain" />
        </div>
    </div>
  )
}
