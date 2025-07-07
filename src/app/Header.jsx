import React from 'react'

function Header() {
  return (
    <div>
       {/* searcch bar */}
        <div className="flex items-center justify-between p-4 bg-[#ffffffdf] backdrop-blur-xs shadow-2xl shadow-[#00000015] z-40  fixed top-0 w-full ">
            <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3BED]"
            />
            <button className="px-4 py-2 text-white bg-[#7C3BED] rounded-lg hover:bg-[#6b2db0]">
                Search
            </button>
            </div>
    </div>
    </div>
  )
}

export default Header
