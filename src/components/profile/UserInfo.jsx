import React from 'react'
import img1 from '../../assets/age2/6.jpg'
function UserInfo() {
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg shadow-[#00000009]  border border-gray-200 '>
       <div className="flex flex-col items-center border-b border-gray-200 mb-4 py-4 ">
           <img src={img1} 
                alt=""
                className='rounded-full w-40 h-40 border-4 border-purple-500 mb-2' />

              <h1 className="text-2xl">Biruk Tasdkan </h1>
              <p className="text-sm text-gray-500">7 years old</p>
       </div>

       <div className="flex flex-col space-y-2 ">
         <div className="flex gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-2 h-4 w-4 mt-0.5 text-[#3b82f6]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
            <div className="">
                <p className="text-sm">Date of Birth</p>
                <p className="text-sm text-gray-500">5/12/20-16</p>
            </div>
         </div>

          <div className="flex gap-2 ">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2 h-4 w-4 mt-0.5 text-[#3b82f6]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>            
             <div className="">
                <p className="text-sm ">Emergency Contact</p>
                <p className="text-sm text-gray-500">Mary Thompson (Mother)</p>
                <p className="text-sm text-gray-500">(555) 123-4567</p>
            </div>
         </div>

          <div className="flex gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 h-4 w-4 mt-0.5 text-[#3b82f6]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>            <div className="">
                 <p className="text-sm ">Email</p>
                <p className="text-sm text-gray-500">mary.thompson@example.com</p>
            </div>
         </div>

          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-2 h-4 w-4 mt-0.5 text-[#3b82f6]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div className="">
                <p className="text-sm">Address</p>
                <p className="text-sm text-gray-500">123 Main St, Anytown, USA</p>
            </div>
         </div>

          <div className="flex gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert mr-2 h-4 w-4 mt-0.5 text-[#f43f5e]"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>            <div className="">
                <p className="text-sm ">Allergies</p>
                <p className="text-sm text-gray-500">None</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default UserInfo
