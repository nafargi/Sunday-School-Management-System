import React from 'react'

const Card = ({ title, data, stats, icon }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg shadow-[#00000009] p-6'>
      <div className='flex items-center justify-between '>
        <h1>{title}</h1>
        <div className="">
            {icon}
        </div>
      </div>
       <p className="text-xl">{data}</p>
       <p className="text-sm text-gray-500">{stats}</p>
    </div>
  )
}

export default Card
