import React from 'react'
import Card from '../../app/Card'
function EmergencyData() {
     const data = [
    {
      title: 'Total Children',
      data: '8',
       icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-primary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75">
                </path>
              </svg>
            ),
      stats: 'All registered children',
    },
    {
      title: 'Children with Allergies',
      data: '3',
       icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert h-4 w-4 text-[#f43f5e]"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
    ),
      stats: '38% of children',
    },
    {
      title: 'Medical Conditions',
      data: '44',
      icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-4 w-4 text-[#f43f5e]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          ),      border: ' border-[#3BC0ED]',
      stats: '88% of children',
    },
    
  ];
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
         {data.map((group, idx) => (
                  <Card key={idx} {...group} />
                ))}
      </div>
  )
}

export default EmergencyData
