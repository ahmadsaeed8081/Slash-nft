import React, { useState } from 'react'
import {PiCopySimpleFill} from 'react-icons/pi';

        
import {FiEdit} from 'react-icons/fi';
import { t } from 'i18next';
const Profile = ({usdt_balance}) => {

  const [image,setImage] = useState('');

  console.log(image);
  const [imageCrop,setImageCrop] = useState('');
 


const [preview ,setPreview] = useState({})

console.log(preview);
if(image){
  const reader = new FileReader()
   reader.readAsDataURL(image[0])
  reader.onload = () =>{
      setPreview(reader.result)
  }
}
  return (
    <div className=' w-full   mb-36  grid  grid-cols-1  md:grid-cols-1 gap-12'>
        <div className=' bg-[#FCD06D]   rounded-b-3xl p-5 py-12'> 

             <div className='mx-auto text-center'>
             <h2 className=' text-2xl text-white'>{t('My_Profile')}</h2>
             <div className='w-36  h-36 text-center  mx-auto my-5 border-2 border-yellow-500  mb-3 rounded-full  overflow-hidden'>

           
                <img 
                
         

                src={!preview?require('../../assets/image/logo.png'):preview} className='w-full h-full' />
              </div>

           <div className='mx-auto'>
           <input
           

           onChange={(e)=>setImage(e.target.files)}
      
           
           type='file'      />
           </div>

           <button className="primary-btn  my-3 disabled py-2" type="button"  disabled >Upload Image</button>




               
             <div className=' bg-gray-200 my-3 flex py-1 px-3 justify-between items-center  rounded-2xl   w-52 mx-auto'>

                <p className=' text-xl font-semibold'>John Deo</p>

                <FiEdit    />

            </div>  
             {/* <p className=' mb-2'>0xdC45730-213u-daf-as</p> */}
            <button className='     bg-[#DA3D4D]  rounded-lg w-72 py-3 text-lg text-white'>{t('BALANCE')} : {usdt_balance/10**6} USDT</button>
             </div>

        </div>

        <div className=' w-[100%] sm:w-[50%] mx-auto  p-6 shadow-lg rounded-md'>
        <div>
            <h1 className=' text-3xl'>{t('Referral')}</h1>

<div className=' bg-white  mt-3  w-80 mx-auto'>
    
<div className=' border-yellow-500 rounded-lg border p-4  flex justify-between items-center'>
                <p>https://www.invitelinkhere.com</p>


                <PiCopySimpleFill color='orange' className=' text-2xl'  />
            </div>

            <button className='primary-btn w-full mt-4 py-2'>{t('SEND INVITE')}</button>
</div>


        </div>
        </div>
        <div className='  w-[100%] sm:w-[50%] mx-auto  p-6 shadow-lg rounded-md'>
        <div>
            <h1 className=' text-3xl'>{t('Commissions')}</h1>
              
<div className="pt-7">
  
<span>No commissions yet</span>
</div>
               



        </div>
        </div>

        <div className='  w-[100%] sm:w-[50%] mx-auto  p-6 shadow-lg rounded-md'>
        <div>
            <h1 className=' text-3xl'>My NFTs</h1>
          
<div className=' bg-white  mt-3  w-80 mx-auto'>

  <span >{t('TOTAL_VALUE')}</span>

  <div className="flex gap-2 my-2">
    <div  className=" flex justify-center items-center bg-gray-300 w-[30px] h-[30px] rounded-md ">
    <img  src={require('../../assets/image/tether.png')} width="20px" />
    </div>
    <h1 className="text-2xl"> 0 UST</h1>
  </div>
    
<div className=' border-yellow-500 rounded-lg border p-4  flex justify-between items-center'>
                <p>{t('OWNED')}</p>

            </div>

            <button className='primary-btn w-full py-2 mt-4'>{t('SEND INVITE')}</button>
</div>


        </div>
        </div>
    </div>
  )
}

export default Profile