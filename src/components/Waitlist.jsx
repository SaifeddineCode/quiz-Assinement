import React, { use, useEffect, useState } from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";



const Waitlist = () => {

  const [activeTab,setActiveTab] = useState("Service Providers")

  useEffect(()=>{
    console.log(activeTab)
  },[activeTab])

  // dummy Data , until we get real data from an api

  const data = [
  { id: 1, email: "john.doe@example.com", phoneNumber: "+1 (555) 123-4567", postcode: "10001", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2024-01-15", status: "Onboarded" },
  { id: 2, email: "jane.smith@gmail.com", phoneNumber: "+1 (555) 987-6543", postcode: "90210", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2024-02-20", status: "Rejected" },
  { id: 3, email: "mark.johnson@business.com", phoneNumber: "+44 7911 123456", postcode: "EC1A 1BB", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2024-03-10", status: "Onboarded" },
  { id: 4, email: "sara.lee@vendor.io", phoneNumber: "+33 6 12 34 56 78", postcode: "75001", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2024-04-05", status: "Onboarded" },
  { id: 5, email: "carlos.ruiz@shop.es", phoneNumber: "+34 612 345 678", postcode: "28001", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2024-05-18", status: "Rejected" },
  { id: 6, email: "emily.clark@store.co.uk", phoneNumber: "+44 7700 900123", postcode: "M1 1AE", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2024-06-01", status: "Onboarded" },
  { id: 7, email: "liam.brown@techsupply.com", phoneNumber: "+1 (415) 234-5678", postcode: "94102", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2024-06-15", status: "Onboarded" },
  { id: 8, email: "olivia.wilson@fashionco.com", phoneNumber: "+61 4 1234 5678", postcode: "2000", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2024-07-02", status: "Rejected" },
  { id: 9, email: "noah.taylor@foodbiz.com", phoneNumber: "+49 151 12345678", postcode: "10115", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2024-07-20", status: "Onboarded" },
  { id: 10, email: "ava.martin@homedeco.fr", phoneNumber: "+33 7 89 01 23 45", postcode: "69001", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2024-08-05", status: "Onboarded" },
  { id: 11, email: "william.hall@logistics.com", phoneNumber: "+1 (312) 456-7890", postcode: "60601", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2024-08-18", status: "Rejected" },
  { id: 12, email: "sophia.white@beautyplus.com", phoneNumber: "+39 333 1234567", postcode: "20121", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2024-09-01", status: "Onboarded" },
  { id: 13, email: "james.harris@autoparts.com", phoneNumber: "+1 (713) 567-8901", postcode: "77001", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2024-09-14", status: "Onboarded" },
  { id: 14, email: "mia.thomas@kidstore.com", phoneNumber: "+81 90-1234-5678", postcode: "100-0001", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2024-09-28", status: "Rejected" },
  { id: 15, email: "benjamin.scott@greenearth.com", phoneNumber: "+64 21 123 4567", postcode: "1010", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2024-10-05", status: "Onboarded" },
  { id: 16, email: "charlotte.lewis@sportzone.com", phoneNumber: "+27 82 123 4567", postcode: "2000", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2024-10-15", status: "Onboarded" },
  { id: 17, email: "henry.walker@techware.com", phoneNumber: "+1 (206) 678-9012", postcode: "98101", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2024-10-22", status: "Rejected" },
  { id: 18, email: "amelia.young@furnitopia.com", phoneNumber: "+46 70 123 45 67", postcode: "111 20", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2024-11-01", status: "Onboarded" },
  { id: 19, email: "lucas.allen@freshmart.com", phoneNumber: "+55 11 91234-5678", postcode: "01310-100", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2024-11-10", status: "Onboarded" },
  { id: 20, email: "harper.king@stylehub.com", phoneNumber: "+34 699 123 456", postcode: "08001", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2024-11-20", status: "Rejected" },
  { id: 21, email: "ethan.wright@medisupply.com", phoneNumber: "+1 (617) 789-0123", postcode: "02101", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2024-12-01", status: "Onboarded" },
  { id: 22, email: "ella.lopez@organicfarm.com", phoneNumber: "+52 55 1234 5678", postcode: "06600", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2024-12-10", status: "Onboarded" },
  { id: 23, email: "alexander.hill@buildpro.com", phoneNumber: "+44 7800 123456", postcode: "B1 1BB", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2024-12-18", status: "Rejected" },
  { id: 24, email: "grace.green@luxurywear.com", phoneNumber: "+39 347 1234567", postcode: "00187", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2025-01-05", status: "Onboarded" },
  { id: 25, email: "daniel.adams@techfix.com", phoneNumber: "+1 (408) 890-1234", postcode: "95101", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2025-01-15", status: "Onboarded" },
  { id: 26, email: "chloe.baker@petworld.com", phoneNumber: "+61 4 9876 5432", postcode: "3000", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2025-01-22", status: "Rejected" },
  { id: 27, email: "samuel.carter@powergrid.com", phoneNumber: "+49 160 98765432", postcode: "80331", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2025-02-01", status: "Onboarded" },
  { id: 28, email: "zoey.mitchell@artisan.com", phoneNumber: "+33 6 98 76 54 32", postcode: "33000", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2025-02-10", status: "Onboarded" },
  { id: 29, email: "jack.perez@cleantech.com", phoneNumber: "+1 (303) 901-2345", postcode: "80201", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2025-02-18", status: "Rejected" },
  { id: 30, email: "lily.roberts@bookstore.com", phoneNumber: "+44 7911 987654", postcode: "WC1A 1AA", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2025-03-01", status: "Onboarded" },
  { id: 31, email: "mason.turner@agritools.com", phoneNumber: "+91 98765 43210", postcode: "400001", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2025-03-08", status: "Onboarded" },
  { id: 32, email: "aria.phillips@gourmetco.com", phoneNumber: "+81 80-9876-5432", postcode: "530-0001", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2025-03-15", status: "Rejected" },
  { id: 33, email: "logan.campbell@safetyworks.com", phoneNumber: "+1 (214) 012-3456", postcode: "75201", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2025-03-22", status: "Onboarded" },
  { id: 34, email: "luna.parker@skincare.com", phoneNumber: "+82 10-1234-5678", postcode: "03000", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2025-04-01", status: "Onboarded" },
  { id: 35, email: "elijah.evans@printshop.com", phoneNumber: "+55 21 98765-4321", postcode: "20040-020", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2025-04-08", status: "Rejected" },
  { id: 36, email: "nora.edwards@homechef.com", phoneNumber: "+46 73 987 65 43", postcode: "411 01", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2025-04-15", status: "Onboarded" },
  { id: 37, email: "oliver.collins@fitnessplus.com", phoneNumber: "+1 (305) 123-6789", postcode: "33101", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2025-04-22", status: "Onboarded" },
  { id: 38, email: "penelope.stewart@ecopack.com", phoneNumber: "+27 71 987 6543", postcode: "8001", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2025-05-01", status: "Rejected" },
  { id: 39, email: "sebastian.sanchez@officepro.com", phoneNumber: "+34 666 987 654", postcode: "41001", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2025-05-10", status: "Onboarded" },
  { id: 40, email: "victoria.morris@luxbag.com", phoneNumber: "+33 6 11 22 33 44", postcode: "75008", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2025-05-18", status: "Onboarded" },
  { id: 41, email: "aiden.rogers@solartech.com", phoneNumber: "+61 4 5678 9012", postcode: "4000", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2025-05-25", status: "Rejected" },
  { id: 42, email: "scarlett.reed@toyland.com", phoneNumber: "+44 7700 654321", postcode: "E1 6RF", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2025-06-01", status: "Onboarded" },
  { id: 43, email: "jackson.cook@hardwareking.com", phoneNumber: "+1 (602) 234-5670", postcode: "85001", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2025-06-08", status: "Onboarded" },
  { id: 44, email: "aurora.morgan@flowermart.com", phoneNumber: "+49 176 12345678", postcode: "50667", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2025-06-15", status: "Rejected" },
  { id: 45, email: "wyatt.bell@dairyplus.com", phoneNumber: "+64 22 123 4567", postcode: "6011", vendorType: "Company", serviceOffering: "Car Valet", signupDate: "2025-06-22", status: "Onboarded" },
  { id: 46, email: "paisley.murphy@smartgadget.com", phoneNumber: "+82 10-9876-5432", postcode: "06000", vendorType: "Independent", serviceOffering: "HouseKeeping", signupDate: "2025-07-01", status: "Onboarded" },
  { id: 47, email: "lincoln.bailey@constructco.com", phoneNumber: "+52 81 1234 5678", postcode: "64000", vendorType: "Company", serviceOffering: "Window Cleaning", signupDate: "2025-07-08", status: "Rejected" },
  { id: 48, email: "hazel.rivera@wellnesshub.com", phoneNumber: "+91 87654 32109", postcode: "110001", vendorType: "Independent", serviceOffering: "Car Valet", signupDate: "2025-07-15", status: "Onboarded" },
  { id: 49, email: "grayson.cooper@autoshine.com", phoneNumber: "+1 (404) 345-6781", postcode: "30301", vendorType: "Company", serviceOffering: "HouseKeeping", signupDate: "2025-07-22", status: "Onboarded" },
  { id: 50, email: "stella.ward@papercraft.com", phoneNumber: "+39 320 1234567", postcode: "10121", vendorType: "Independent", serviceOffering: "Window Cleaning", signupDate: "2025-08-01", status: "Rejected" },
];

const filtredData = data.slice(0,10)

useEffect(()=>{
  console.log(filtredData)
},[])


  return (
    <div className='flex flex-col gap-5 flex-1'>
      {/* Header of wailtlist component */}
      <h3 className='text-3xl text-black mb-3'> Wailtlist</h3>
      <div className='flex justify-between'>
        {/* Tab */}
        <div className='flex gap-2'>
          <button
            onClick={()=>setActiveTab("Service Providers")}
            className={`${activeTab == "Service Providers" ? "bg-[#C8D5D9] border-[#C8D5D9] text-black rounded-lg px-2 py-1" : "border border-[black] rounded-lg px-2 py-1"}`}
          >Service Providers</button>
          <button
            onClick={()=>setActiveTab("Customers")}
            // className='border rounded-lg px-2 py-1'
            className={`${activeTab == "Customers" ? "bg-[#C8D5D9] border-[#C8D5D9] text-black rounded-lg px-2 py-1" : "border border-[black] rounded-lg px-2 py-1"}`}
          >Customers</button>
        </div>
        {/* Search input */}
        <div className='relative'>
          <input 
            className='border-[#D3D8DD] text-sm text-[#88939D] font-medium py-1 px-3 border'
            type='text' placeholder='Search User' />
            <button className='absolute right-0 border-[#D3D8DD] border-l px-1 py-[6px]' >
              <CiSearch />
            </button>
        </div>
      </div>
      {/* table */}
      <div className='w-full'>
        {activeTab == "Customers" ? 

          <h2>Nothing to show for this tab ...</h2>
        :
        
        <table className='w-full'>
          <thead className='bg-[#F4F7F9] border rounded-lg'>
            <tr className=''>
              <th className='p-3 w-37.5'>
                <input type='checkbox' />
              </th>
              <th className='p-3 w-37.5 text-left'>Email</th>
              <th className='p-3 w-37.5'>Phone Number</th>
              <th className='p-3 w-37.5'>Postcode</th>
              <th className='p-3 w-37.5'>Vendor Type</th>
              <th className='p-3 w-37.5'>Service Offering</th>
              <th className='p-3 w-37.5'>Signup Date</th>
              <th className='p-3 w-37.5'>Status</th>
              <th className='p-3 w-37.5'>Actions</th>
            </tr>
          </thead>
          <tbody className='border'>
            {/* <tr>
              <td>test@example.com</td>
            </tr> */}
            {filtredData.map((row)=>{
              return (
                 <tr className={`${row.id % 2 == 0 ? "bg-[#EAEEF3]" :"bg-white "}`} key={row.id}>
                    <td className='p-3 text-sm text-left text-[#2B3641]'>
                      <input type='checkbox' />
                    </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.email} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.phoneNumber} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.postcode} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.vendorType} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.serviceOffering} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.signupDate} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'> {row.status} </td>
                    <td className='p-3 text-sm text-left text-[#2B3641]'>  
                      <button className='flex justify-end w-full'>
                        <MdOutlineModeEdit size={20} />
                      </button>
                    </td>
                </tr> 
              )
            })}
          </tbody>
        </table> }
      </div>

    </div>
  )
}

export default Waitlist