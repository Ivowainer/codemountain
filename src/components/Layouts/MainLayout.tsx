import Head from 'next/head'
import { NavBar } from '../';

interface MainLayoutProps {
    pageDescription: string;
    children: React.ReactNode;
}

export const MainLayout = ({ pageDescription, children }: MainLayoutProps) => {
  return (
    <>
        <Head>
            <title>{"CodeMountain"}</title>
            <meta name="author" content="CodeMountain" />
            <meta name="description" content={`${ pageDescription }`} />
            <meta name="keywords" content={`codemountain, service, software server, software as a service,`} />

            <meta property="og:title" content={`CodeMountain`} />
            <meta property="og:description" content={`${pageDescription}`} />
            {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
        </Head> 

        <NavBar />
        
        { children }
    </>
  )
}
