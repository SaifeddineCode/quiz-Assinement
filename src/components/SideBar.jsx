import React, { useEffect, useState } from 'react'

const SideBar = () => {

  const [filterData,setFilterData] = useState({
    postCode :"",
    registrationStatus:[],
    startDate:"",
    endDate:"",
    vendorType:[],
    ServiceOffering:[]
  })

  // const [selected, setSelected] = useState([]);

  // const handleChange = (e) => {
  //   const { value, checked } = e.target;
  //   setSelected((prev) =>
  //     checked ? [...prev, value] : prev.filter((item) => item !== value)
  //   );
  // };

  // const handleStatusChange = (e) =>{

  //   setFilterData((prev) =>({
  //     ...prev,
  //     registrationStatus : prev.registrationStatus.map((status)=>{
  //       if(status === e.target.value){
  //         return;
  //       }
  //       return [...prev.registrationStatus,e.target.value]
  //     })
  //   }))
  
  // }
const handleStatusChange = (e) => {
    const { value, checked } = e.target;

    setFilterData((prev) => ({
      ...prev,
      registrationStatus: checked
        ? [...prev.registrationStatus, value]          // add if checked
        : prev.registrationStatus.filter((s) => s !== value) // remove if unchecked
    }));
};

const handleVendorTypeChange = (e) => {
    const { value, checked } = e.target;

    setFilterData((prev) => ({
      ...prev,
      vendorType: checked
        ? [...prev.vendorType, value]          // add if checked
        : prev.vendorType.filter((s) => s !== value) // remove if unchecked
    }));
};

const handleServiceOfferingChange = (e) => {
    const { value, checked } = e.target;

    setFilterData((prev) => ({
      ...prev,
      ServiceOffering: checked
        ? [...prev.ServiceOffering, value]          // add if checked
        : prev.ServiceOffering.filter((s) => s !== value) // remove if unchecked
    }));
};

  useEffect(()=>{
    console.log(filterData)
  },[filterData])

  return (
    <div className='flex flex-col gap-10 p-5 bg-[#F4F7F9] max-w-[25%]'>
        {/* logo & title */}
        <div className='flex items-end ' >
            <img src="/gler.svg" />
            <h4 className='text-[#1A78F2] font-medium '>Admin Panel</h4>
        </div>
        <div className='bg-[#D3D8DD] text-black font-bold rounded-lg px-3 py-2' >User Management</div>
        {/* post code */}
        <div>
          <h4>Post Code</h4>
          <input 
          onChange={(e)=>setFilterData((prev)=>({...prev,postCode:e.target.value}))}
          placeholder='ZIP'
          className="bg-white w-1/2 px-3 py-1 rounded-sm text-black border "
          type='text'  />
        </div>
        {/* Registration Status */}
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold'>Registartion status</h4>
          <div>
            <input 
              // checked={filterData.registrationStatus === "on"}
              // onChange={(e)=>setFilterData((prev)=>({...prev,registrationStatus:[...prev.registrationStatus,e.target.value]}))}
              onChange={(e)=>handleStatusChange(e)}
              className='w-5 h-5 ' value={"Onboarded"} name="Onboarded" type='checkbox' id="Onboarded" />
            <label htmlFor="Onboarded"> Onboarded</label>
          </div>
          <div>
            <input
              // onChange={(e)=>setFilterData((prev)=>({...prev,registrationStatus:[...prev.registrationStatus,e.target.value]}))}
              onChange={(e)=>handleStatusChange(e)}
              className='w-5 h-5 ' value="Rejected" name="Rejected" type='checkbox' id="Rejected" />
            <label  htmlFor="Rejected"> Rejected</label>
          </div>
        </div>
        {/* Date Registered */}
        <div className=''>
          <h4 className='font-medium mb-3'>Date Registered</h4>
          {/* start */}
          <div className='flex gap-3'>
            <div className='relative w-1/2'>
              <input 
               onChange={(e)=>setFilterData((prev)=>({...prev,startDate:e.target.value}))}
                className='rounded-sm w-full  border-3 font-medium py-2 px-4 border-[#1A78F2]'
                type='Date'
                placeholder='Start'
                name='start'
                />
              <label className='absolute -top-2.5 left-4 text-sm text-[#1A78F2]  bg-[#F4F7F9]'>Date</label>
              <div className='text-sm text-center text-[#4E4636]'>MM/DD/YYYY</div>
            </div>
            {/* end */}
            <div className='relative w-1/2'>
              <input 
                onChange={(e)=>setFilterData((prev)=>({...prev,endDate:e.target.value}))}
                className='rounded-sm w-full border-3 py-2 px-4 border-[#1A78F2]'
                type='Date'
                placeholder='Start'
                name='end'
                />
              <label className='absolute -top-2.5 left-4 text-sm text-[#1A78F2]  bg-[#F4F7F9]'>Date</label>
              <div className='text-sm text-center text-[#4E4636]'>MM/DD/YYYY</div>
            </div>
          </div>
        </div>
        {/* Vendor Type */}
        <div className='flex flex-col gap-3'> 
          <h4 className='font-bold'>Vendor Type</h4>
          <div>
            <input
            onChange={(e)=>handleVendorTypeChange(e)}
            className='w-5 h-5 mr-2 '  value="Independent" name="Independent" type='checkbox' id="Independent" />
            <label htmlFor="Independent"> Independent</label>
          </div>
          <div>
            <input
              onChange={(e)=>handleVendorTypeChange(e)}
              className='w-5 h-5 mr-2 ' value="Company" name="Company" type='checkbox' id="Company" />
            <label  htmlFor="Company"> Company</label>
          </div>
        </div>
        {/* Service Offering */}
        <div className='flex flex-col gap-3'> 
          <h4 className='font-bold'>Service Offering</h4>
          <div>
            <input
            onChange={(e)=>handleServiceOfferingChange(e)}
            className='w-5 h-5 mr-2 '  value="HouseKeeping" name="HouseKeeping" type='checkbox' id="HouseKeeping" />
            <label htmlFor="HouseKeeping"> HouseKeeping</label>
          </div>
          <div>
            <input
              onChange={(e)=>handleServiceOfferingChange(e)}
              className='w-5 h-5 mr-2 ' value="Window Cleaning" name="Window Cleaning" type='checkbox' id="Window Cleaning" />
            <label  htmlFor="Window Cleaning"> Window Cleaning</label>
          </div>
          <div>
            <input
              onChange={(e)=>handleServiceOfferingChange(e)}
              className='w-5 h-5 mr-2 ' value="Car Valet" name="Car Valet" type='checkbox' id="Car Valet" />
            <label  htmlFor="Car Valet"> Car Valet</label>
          </div>
        </div>
        {/* Button filter */}
        <div className='text-center'>
          <button
          className='text-white text-center shadow-sm bg-[#1A78F2] py-2 px-5 rounded-3xl '
          >
            Filter
          </button>
        </div>
    </div>
  )

}

export default SideBar