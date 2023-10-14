import { t } from 'i18next';
import React from 'react'
import {CiSearch} from 'react-icons/ci';
const LatestNfts = () => {
  return (
    <div className='  ml-6 md:ml-12  pt-10'>


          
        <h2 className=' text-black  text-2xl mt-8   font-semibold'>{t('Sold')} </h2>

        <div className=' flex w-full overflow-x-auto  no-scrollbar  items-center gap-8 mt-10'>
            <div className='  bg-white   rounded-lg p-4 md:flex flex-none  w-[50%] md:w-[30%] items-center gap-2'>

            <div className=' w-12 h-12 rounded-full'>
              <img src={require('../../assets/image/1.png')}   className=' w-full rounded-full' />
            </div>

            <div>
                <h2 className=' text-black font-semibold'>#NFT-000809</h2>
                <p className=' text-gray-400'>248 USDT Owner : 0 X 4...bh5</p>
            </div>
                
            </div>
            <div className='  bg-white rounded-lg p-4  w-[50%] md:w-[30%]  md:flex flex-none items-center gap-2'>

            <div className=' w-12 h-12 rounded-full'>
              <img src={require('../../assets/image/1.png')}   className=' w-full rounded-full' />
            </div>

            <div>
                <h2 className=' text-black font-semibold'>#NFT-000809</h2>
                <p className=' text-gray-400'>248 USDT Owner : 0 X 4...bh5</p>
            </div>
                
            </div>
            <div className='  bg-white rounded-lg p-4  w-[50%] md:w-[30%]   md:flex flex-none  items-center gap-2'>

            <div className=' w-12 h-12 rounded-full'>
              <img src={require('../../assets/image/1.png')}   className=' w-full rounded-full' />
            </div>

            <div>
                <h2 className=' text-black font-semibold'>#NFT-000809</h2>
                <p className=' text-gray-400'>248 USDT Owner : 0 X 4...bh5</p>
            </div>
                
            </div>
            <div className='  bg-white rounded-lg p-4  w-[50%] md:w-[30%]   md:flex flex-none  items-center gap-2'>

            <div className=' w-12 h-12 rounded-full'>
              <img src={require('../../assets/image/1.png')}   className=' w-full rounded-full' />
            </div>

            <div>
                <h2 className=' text-black font-semibold'>#NFT-000809</h2>
                <p className=' text-gray-400'>248 USDT Owner : 0 X 4...bh5</p>
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default LatestNfts