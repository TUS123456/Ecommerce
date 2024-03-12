import React from 'react'
import Adminmenu from '../../components/Layout/Adminmenu'
import{useAuth} from '../../context/Authentication'
import Layout from '../../components/Layout/Layout';
const AdminDashoard = () => {
  const [auth]=useAuth();
  return (
    <Layout>
      <div className='contaier-fluid m-3 p-3'>
        <div className='row'>
        <div className='col-md-3'>
          <Adminmenu/>
        </div>
        <div className='col-md-9'>
          <div className='card'>
          <h1>
            {auth?.user?.name}
          </h1>

          </div>
        </div>

        </div>
      </div>
    </Layout>
  )
}

export default AdminDashoard
