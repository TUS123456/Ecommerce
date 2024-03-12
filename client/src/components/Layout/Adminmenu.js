import React from 'react'
import { NavLink } from 'react-bootstrap'

const Adminmenu = () => {
  return (
    <>
   <div className='text-center'>
   <div classname="list-group">
  <NavLink to="/dashboard/admin/create-category" classname="list-group-item list-group-item-action">Create  Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" classname="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashboard/admin/user" classname="list-group-item list-group-item-action">Users</NavLink>
   </div>
   </div>
   </>
  )
}

export default Adminmenu
