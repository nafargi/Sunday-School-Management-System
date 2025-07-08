import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
// Import all images for age1 (Little Lights)
import child1 from '../../assets/age1/1.jpg';
import child2 from '../../assets/age1/2.jpg';
import child3 from '../../assets/age1/3.jpg';
import child4 from '../../assets/age1/4.jpg';
import child5 from '../../assets/age1/5.jpg';
import child26 from '../../assets/age1/26.jpg';

// Import all images for age2 (Bright Stars)
import child6 from '../../assets/age2/6.jpg';
import child7 from '../../assets/age2/7.jpg';
import child8 from '../../assets/age2/8.jpg';
import child9 from '../../assets/age2/9.jpg';
import child10 from '../../assets/age2/10.jpg';
import child27 from '../../assets/age2/27.jpg';

// Import all images for age3 (Young Explorers)
import child11 from '../../assets/age3/11.jpg';
import child12 from '../../assets/age3/12.jpg';
import child13 from '../../assets/age3/13.jpg';
import child14 from '../../assets/age3/14.jpg';
import child15 from '../../assets/age3/15.jpg';
import child28 from '../../assets/age3/28.jpg';

// Import all images for age4 (Faith Champions)
import child16 from '../../assets/age4/16.jpg';
import child17 from '../../assets/age4/17.jpg';
import child18 from '../../assets/age4/18.jpg';
import child19 from '../../assets/age4/19.jpg';
import child20 from '../../assets/age4/20.jpg';
import child29 from '../../assets/age4/29.jpg';

// Import all images for age5 (Kingdom Leaders)
import child21 from '../../assets/age5/21.jpg';
import child22 from '../../assets/age5/22.jpg';
import child23 from '../../assets/age5/23.jpg';
import child24 from '../../assets/age5/24.jpg';
import child25 from '../../assets/age5/25.jpg';
import child30 from '../../assets/age5/30.jpg';

// Create the image mapping object
const imageMap = {
  'age1/1': child1,
  'age1/2': child2,
  'age1/3': child3,
  'age1/4': child4,
  'age1/5': child5,
  'age1/26': child26,
  
  'age2/6': child6,
  'age2/7': child7,
  'age2/8': child8,
  'age2/9': child9,
  'age2/10': child10,
  'age2/27': child27,
  
  'age3/11': child11,
  'age3/12': child12,
  'age3/13': child13,
  'age3/14': child14,
  'age3/15': child15,
  'age3/28': child28,
  
  'age4/16': child16,
  'age4/17': child17,
  'age4/18': child18,
  'age4/19': child19,
  'age4/20': child20,
  'age4/29': child29,
  
  'age5/21': child21,
  'age5/22': child22,
  'age5/23': child23,
  'age5/24': child24,
  'age5/25': child25,
  'age5/30': child30
};

const ListIInfo = ({ id, photo, folder, name,ageGroup,attendance, onToggleAttendance  }) => {
  const imageKey = `${folder}/${photo}`;
  const imageSrc = imageMap[imageKey] || null;
  

  return (
    <div className='flex items-center   hover:bg-gray-50 '>

      <div className="grid grid-cols-12 gap-2 p-3  w-full justify-center border-l border-r border-b border-gray-200 ">
        <div className="col-span-0 flex items-center">
            <p className="w-8  text-gray-500">{id}</p>
        </div>
        <div className=" col-span-2 ">
        {imageSrc ? (
            <img 
                src={imageSrc} 
                alt={`${name}'s profile`}
                className='w-10 h-10 rounded-full object-cover border border-gray-200'  
            />
            ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                <span className=" text-gray-500">No photo</span>
            </div>
            )}
         </div>
        <div className="col-span-4 flex items-center">
          <h2 className='text-sm  text-gray-800'>{name}</h2>
        </div>
        
        <div className="md:col-span-3 flex items-center ">
          <p className='  text-gray-700'>{ageGroup}</p>
        </div>
        
         <div
          onClick={onToggleAttendance}
          className="col-span-2 flex items-center cursor-pointer space-x-2"
        >
          {attendance === 'Present' ? (
            <>
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
              <p className="text-green-600">Present</p>
            </>
          ) : (
            <>
              <XCircleIcon className="w-5 h-5 text-red-500" />
              <p className="text-red-600">Absent</p>
            </>
          )}
        </div>
        
        
      </div>
    </div>
  );
};

export default ListIInfo;