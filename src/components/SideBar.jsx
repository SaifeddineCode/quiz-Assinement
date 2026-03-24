import React, { useEffect, useState } from 'react'


const SideBar = ({filterData,setFilterData,data,setFinalResut,setCurrentPage,sideBarIsOpen}) => {

  // const [filterData,setFilterData] = useState({
  //   postCode :"",
  //   registrationStatus:[],
  //   startDate:"",
  //   endDate:"",
  //   vendorType:[],
  //   ServiceOffering:[]
  // })

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
      serviceOffering: checked
        ? [...prev.serviceOffering, value]          // add if checked
        : prev.serviceOffering.filter((s) => s !== value) // remove if unchecked
    }));
};

  useEffect(()=>{
    console.log(sideBarIsOpen)
  },[sideBarIsOpen])

const handleFilter = () => {

  let result = [...data];

  // Filter by postcode
  if (filterData.postCode) {
    result = result.filter((item) =>
      item.postcode.toLowerCase().includes(filterData.postCode.toLowerCase())
    );
  }

  // Filter by registration status (Onboarded / Rejected)
  if (filterData.registrationStatus.length > 0) {
    result = result.filter((item) =>
      filterData.registrationStatus.includes(item.status)
    );
  }

  // Filter by date range
  if (filterData.startDate) {
    result = result.filter(
      (item) => new Date(item.signupDate) >= new Date(filterData.startDate)
    );
  }
  if (filterData.endDate) {
    result = result.filter(
      (item) => new Date(item.signupDate) <= new Date(filterData.endDate)
    );
  }

  // Filter by vendor type (Independent / Company)
  if (filterData.vendorType.length > 0) {
    result = result.filter((item) =>
      filterData.vendorType.includes(item.vendorType)
    );
  }

  // Filter by service offering (HouseKeeping / Window Cleaning / Car Valet)
  if (filterData.serviceOffering.length > 0) {
    result = result.filter((item) =>
      filterData.serviceOffering.includes(item.serviceOffering)
    );
  }

  setFinalResut(result);
  setCurrentPage(1)
};

  return (
    <div className={` ${sideBarIsOpen ? "flex" : "fixed top-0 left-[100%]" } sm:h-auto sm:overflow-none h-screen overflow-y-auto fixed top-0 left-0 sm:static sm:flex max-w-[70%] md:max-w-[25%] z-50 transition-all duration-300 ease-in-out    flex-col gap-10 p-5 bg-[#F4F7F9]  `}>
        {/* logo & title */}
       
        <div className='flex items-end '>
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
          onClick={()=>handleFilter()}
          className='text-white text-center shadow-sm bg-[#1A78F2] py-2 px-5 rounded-3xl '
          >
            Filter
          </button>
        </div>
    </div>
  )

}

export default SideBar