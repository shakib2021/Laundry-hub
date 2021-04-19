import React from 'react';
import Myorders from '../Myorders/Myorders';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    document.title="Dashboard | Laundry-Hub"
    return (
        <div className="row dash">
         <div className="col-lg-12 col-sm-6 col-md-12 mb-5">
              <Myorders></Myorders>
            </div>
        </div>
    );
};

export default Dashboard;