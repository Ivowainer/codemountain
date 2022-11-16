import { MainLayout } from '../src/components';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../src/components/UI/Header';

export default function Home() {
  return (
    <MainLayout pageDescription='About the page'>
      <div className="">
        <Header />
      </div>
    </MainLayout>
  )
}
