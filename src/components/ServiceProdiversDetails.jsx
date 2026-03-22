// import React from 'react'
// import { CiUser } from "react-icons/ci";
// import { MdOutlineEmail } from "react-icons/md";



// const ServiceProdiversDetails = () => {
//   return (
//     <div className="bg-[#00000080] p-5 absolute  w-full h-full">
//         <div className='bg-white'>
//           {/* user details */}
//           <div>
//             <div className='flex gap-3 font-medium'>
//               <CiUser size={25} />
//               <h3>User Details</h3>
//             </div>
//             <div>
//               <div>
//                 <h3 className='font-bold text-xl'>CleanPro Solutions</h3>
//                 <div className='flex items-center gap-2'>
//                   <div><MdOutlineEmail /></div>
//                   <div>Contact@cleanpro.com</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//   )
// }

// export default ServiceProdiversDetails
import { useEffect, useState } from "react";
import { FiX, FiUser, FiMail, FiMapPin, FiPhone, FiCalendar, FiMessageSquare, FiEdit2 } from "react-icons/fi";

export default function ServiceProvidersDetails({isOpen,setIsOpen}) {
  const [note, setNote] = useState("");

  useEffect(()=>{
    console.log(isOpen)
  },[isOpen])

  return (
    <div className={`${isOpen ? "flex" : "hidden"} fixed inset-0 bg-black/40  items-center justify-center z-50`}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <FiUser size={15} />
            <span>User Details</span>
          </div>
          <button
          onClick={()=>setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Name & Badges */}
        <div className="flex items-start justify-between px-5 pb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">CleanPro Solutions</h2>
            <div className="flex items-center gap-1 text-gray-400 text-sm mt-0.5">
              <FiMail size={13} />
              <span>contact@cleanpro.com</span>
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-3 py-1">Customer</span>
            <span className="text-xs border border-gray-300 text-gray-600 rounded-full px-3 py-1">Invited</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Contact Information */}
        <div className="px-5 py-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Contact Information</h3>
          <div className="grid grid-cols-2 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiMail size={14} className="text-gray-400 shrink-0" />
              <span>lisa.anderson@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiPhone size={14} className="text-gray-400 shrink-0" />
              <span>+61-2-9876-5432</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiMapPin size={14} className="text-gray-400 shrink-0" />
              <span>United Kingdom</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiCalendar size={14} className="text-gray-400 shrink-0" />
              <span>Signed up 1/30/2024</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Customer Details */}
        <div className="px-5 py-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Customer Details</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <FiUser size={14} className="text-gray-400" />
            <span>Individual</span>
          </div>
          <p className="text-sm font-bold text-gray-900 mb-1">User Details</p>
          <div className="flex gap-2">
            <span className="text-xs bg-gray-100 text-gray-600 rounded-md px-2 py-1">housekeeping</span>
            <span className="text-xs bg-gray-100 text-gray-600 rounded-md px-2 py-1">car valet</span>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Internal Notes */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <FiMessageSquare size={15} />
              <span>Internal Notes</span>
            </div>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              <FiEdit2 size={13} />
              <span>Edit</span>
            </button>
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="No Note Added yet"
            className="w-full h-20 text-sm text-gray-400 placeholder-gray-300 resize-none outline-none border border-gray-100 rounded-lg p-2"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-5 pb-5">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-3 rounded-full transition-colors">
            Onboard
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 rounded-full transition-colors">
            Reject
          </button>
        </div>

      </div>
    </div>
  );
}