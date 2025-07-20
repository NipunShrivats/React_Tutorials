import React, { useState } from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas'

import { LuEye } from "react-icons/lu";
{/* <LuEye /> */}

import { LuEyeClosed } from "react-icons/lu";
{/* <LuEyeClosed /> */}

export default function RegForm() {

  const [showPass, setShowpass] = useState(false);

  const initialValues={
    name:"",
    email:"",
    password:"",
    confirm_password:"",
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values, action)=>{
      // console.log(values)
      action.resetForm()
      return values

    }
  })
  console.log(errors)

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" >Name</label>
                <input type="text" 
                autoComplete='off' 
                name="name" 
                id="name" 
                placeholder='name' 
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {
                  errors.name && touched.name?
                 (<p style={{color:"red", 
                  fontSize:".8rem", 
                  fontStyle:"italic", 
                  marginTop:"1px"}}>{errors.name}</p>):null
                }
            </div>

            <div>
                <label htmlFor="email" >Email</label>
                <input type="email" 
                autoComplete='off'
                name="email" 
                id="email" 
                placeholder='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {
                  errors.email && touched.email?
                 (<p style={{color:"red", 
                  fontSize:".8rem", 
                  fontStyle:"italic", 
                  marginTop:"1px"}}>{errors.email}</p>):null
                }
            </div>

            <div>
                <label htmlFor="password" >Password</label>
                <input type={showPass?"text": "password"}
                autoComplete='off'
                name="password" 
                id="password" 
                placeholder='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <button type='button' onClick={()=>setShowpass(prev=> !prev)}>{showPass?<LuEye />:<LuEyeClosed />}</button>
                {
                  errors.password && touched.password?
                 (<p style={{color:"red", 
                  fontSize:".8rem", 
                  fontStyle:"italic", 
                  marginTop:"1px"}}>{errors.password}</p>):null
                }
            </div>

            <div>
                <label htmlFor="password" >Password</label>
                <input type="password" 
                autoComplete='off'
                name="confirm_password" 
                id="confirm_password" 
                placeholder='confirm password'
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {
                  errors.confirm_password && touched.confirm_password?
                 (<p style={{color:"red", 
                  fontSize:".8rem", 
                  fontStyle:"italic", 
                  marginTop:"1px"}}>{errors.confirm_password}</p>):null
                }
            </div>

            <div>
              <a href="#">
                Want to register uisng gmail?
              </a>
              <button type='submit'>Register</button>
            </div>
        </form>
        </>
  )
}
