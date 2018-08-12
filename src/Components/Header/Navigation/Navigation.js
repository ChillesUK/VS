import React from 'react';
import './Navigation.css';
//import '~/node_modules/bootstrap/dist/bootstrap.css';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-left nav-tabs"  style={{ marginLeft: -2 }}>


                    <li className="nav-item">
                        <NavLink to='/Dashboard' activeClassName="activeNavLink">
                        <i className="fas fa-chart-bar" style={{ paddingRight: 6 }}></i>Dashboard
                        </NavLink>
                    </li>


                <li className="nav-item">
                    <NavLink to='/World-Markets' activeClassName="activeNavLink">
                    <i className="fas fa-globe-americas" style={{ paddingRight: 6 }}></i>World Markets
                        </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to='/About' activeClassName="activeNavLink">
                    <i className="fas fa-newspaper" style={{ paddingRight: 6 }}></i>About
                        </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to='/Compare-Stock-Brokers' activeClassName="activeNavLink">
                    <i className="fas fa-balance-scale" style={{ paddingRight: 6 }}></i>Compare Brokers
                        </NavLink>
                </li>

                </ul>
            </div >
        );
    }
}

// import { NavLink } from 'react-router-dom';
// Then within the <li>'s componentClass={NavLink}