import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import Masonry from 'react-masonry-css';
import classNames from 'classnames';

import ocean1 from '/public/ocean-1.jpeg';
import ocean2 from '/public/ocean-2.jpeg';
import ocean3 from '/public/ocean-3.jpeg';
import ocean4 from '/public/ocean-4.jpeg';
import ocean5 from '/public/ocean-5.jpeg';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans',
  },
  {
    key: 'forests',
    display: 'Forests',
  },
];

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpeg')] overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10'>
        <span className='uppercase text-lg font-medium'>Photos Gallery</span>
        <Link
          href='#'
          className='rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'
        >
          Get in touch
        </Link>
      </header>

      <main className='relative pt-[110px] z-20'>
        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className='flex items-center gap-12'>
              {tabs.map(tab => (
                <Tab key={tab.key} className='p-2'>
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'uppercase text-lg',
                        selected ? 'text-white' : 'text-stone-600'
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6'>
              <Tab.Panel className='overflow-auto'>
                <Masonry
                  breakpointCols={2}
                  className='flex gap-4'
                  columnClassName=''
                >
                  <Image src={ocean1} alt='ocean-1' className='my-4' />
                  <Image src={ocean2} alt='ocean-2' className='my-4' />
                  <Image src={ocean3} alt='ocean-3' className='my-4' />
                  <Image src={ocean4} alt='ocean-4' className='my-4' />
                  <Image src={ocean5} alt='ocean-5' className='my-4' />
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className='h-[90px] flex justify-center items-center uppercase text-lg font-medium'>
        <p>Photos Gallery</p>
      </footer>
    </div>
  );
}
