import React, { useEffect, useState } from "react";
export default function PersonalInfo({
  formData,
  setFormData,
  page,
  setPage,
  nextPage,
}) {

  function onChange(event){
    const {name,value}=event.target
    setFormData({...formData,[name]:value})
  }
  const [formErrors,setFormErrors]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)
  
  useEffect(()=>{
    console.log(page+"page")
    if(Object.keys(formErrors).length===0 && isSubmit===true)
     nextPage();
     console.log(Object.keys(formErrors).length)
  },[formErrors])


  function onSubmit(e){
    e.preventDefault();
    setIsSubmit(true)
    const errors={}
    var pattern = new RegExp(/^[0-9\b]+$/);
     const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i);
     const nameRegex=new RegExp(/^[a-zA-Z ]*$/)
    if(!nameRegex.test(formData.username))
     errors.username="Enter a valid name"
    if(!pattern.test(formData.phone))
    errors.phone="Enter a valid mobile number"
    else if(formData.phone.length<10 || formData.phone.length>10)
    errors.phone="Phone number must contain 10 digits"
    
    setFormErrors(errors)

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" required name="username" value={formData.username} onChange={onChange} placeholder="Full Name*"/>
        <div>{formErrors.username}</div>
      </div>
      <div>
        <input type="email" name="email" required value={formData.email} onChange={onChange} placeholder="Email Address*"/>
        <div>{formErrors.email}</div>
      </div>
      <div>
        <input type="tel" required name="phone" value={formData.phone} onChange={onChange} placeholder="Mobile Number*" />
        <div>{formErrors.phone}</div>
      </div>
      <div className="form-submit">
        <input
          type="submit"
          value="NEXT"
        />
      </div>
    </form>
  );
}
