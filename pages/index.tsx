import { MainLayout } from '../src/components';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout pageDescription='About the page'>
      <div className="flex header w-screen justify-evenly items-center">
        <div className="flex items-center ">
          <div className="bg-sky-500 text-white text-4xl font-bold mr-3 px-4 py-2">
            {/* <p>Flex</p> */}
            <p>Speed up</p>
          </div>
          <p className='text-gray-600 font-bold text-4xl'>your work</p>
        </div>

        {/* <div className="flex flex-col font-bold text-5xl">
          <p className='text-gray-500'><span className='text-sky-400'>Flex</span> your work</p>
          <p className='text-gray-500'><span className='text-sky-400'>Next</span> your work</p>
        </div> */}
      </div>
    </MainLayout>
  )
}
