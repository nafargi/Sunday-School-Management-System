import React from 'react'
import ParentalPermissions from './interests/ParentalPermissions'
import PermissionHistory from './interests/PermissionHistory'
import {MapPinIcon,ShieldCheckIcon, ShieldExclamationIcon,BookOpenIcon,HeartIcon,EnvelopeIcon} from '@heroicons/react/24/outline'

function interests() {
  return (
    <div>
       <div className=' p-6 '>
        <div className='mb-6'>
            <h2 className=" text-2xl ">Recent Achievements</h2>
              <p className='text-sm text-gray-500 '>Celebrating our children's accomplishments</p>
        </div>
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ParentalPermissions
            path = { <BookOpenIcon className="w-5 h-5 text-[#2563EB] " />}
            title="Photo Permission"
            description="Allow photos to be taken"
            permission="Allowed"
            color="bg-[#DBEAFE]"
            allowed='bg-green-500 text-white'
            stroke="#CA8A04"
          />
          <ParentalPermissions
           path = { <HeartIcon className="w-5 h-5 text-[#EA580C]" />}
            title="Snacks Permission"
            description="Allow snacks to be given"
            permission="Allowed"
             allowed='bg-green-500 text-white'
            color="bg-[#FFEDD5]"
            stroke="#16A34A"
          />
          <ParentalPermissions
            path = { <MapPinIcon className="w-5 h-5 text-[#16A34A]" />}
            title="Outings Permission"
            description="Allow participation in outings"
            permission="Allowed"
            allowed='bg-green-500 text-white'
            color="bg-[#DCFCE7]"
            stroke="#2563EB"
          />
          <ParentalPermissions
            path = { <EnvelopeIcon className="w-5 h-4 text-[#9333EA]" />}
            title="Social Media"
            description="Allow photos on social media"
            permission="Not Allowed"
            allowed='bg-red-600 text-white'
            color="bg-[#F3E8FF]"
            stroke="#2563EB"
          />
         
        </div>
    </div>

    <div className="p-6">
         <div className='mb-6'>
            <h2 className=" text-2xl ">Recent Achievements</h2>
              <p className='text-sm text-gray-500 '>Celebrating our children's accomplishments</p>
        </div>
        <div className="">
           


             <PermissionHistory
            path = { <ShieldCheckIcon className="w-5 h-4 text-[#9333EA]" />}
            title="Photo permission updated"
            description=" Changed from Not Allowed to Allowed"
            date="September 15, 2023"
            allowed='bg-red-600 text-white'
            color="bg-[#F3E8FF]"
            stroke="#2563EB"
          />
           <PermissionHistory
            path = { <ShieldExclamationIcon className="w-5 h-4 text-[#9333EA]" />}
            title="Social Media"
            description="Changed from Not Allowed to Allowed"
            date="September 5, 2023"
            allowed='bg-red-600 text-white'
            color="bg-[#F3E8FF]"
            stroke="#2563EB"
          />
        </div>
       
    </div>
    </div>
  )
}

export default interests
