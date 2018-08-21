import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <p>known as the Dashboard</p>
            <br></br>
            <p>This is a very important <Link to="/About">About Us Page</Link></p>
            
        </div>                                                                      
    );
};

// <img src="/Assets/VSIcon.png" /> 

export default Dashboard;