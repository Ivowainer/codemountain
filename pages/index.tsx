import { MainLayout } from '../src/components';
import Image from 'next/image';
import MountainDraw from '../src/components/UI/MountainDraw';

export default function Home() {
  return (
    <MainLayout pageDescription='About the page'>
      <div className="flex header w-screen justify-between px-40 items-center">
        <div className="flex text-7xl leading-tight text-indigo-400 line-h font-bold flex-col w-1/2">
          <p>Hey!</p>
          <p>We are</p>
          <p className='bg-sky-500 text-white px-3 py-1 text-center'>CodeMountain</p>
          <p className='mt-5 leading-tight font-medium text-xl w-5/6 text-gray-500'>We provide IT solutions for companies that are looking for a digital transformation, both internal and externally.</p>
        </div>
        {/* <MountainDraw /> */}
        <div className="rounded-full">
          <Image className='rounded-full' src='/Mountain.png' width={400} height={400} alt="Mountain" />
        </div>
      </div>
    </MainLayout>
  )
}
