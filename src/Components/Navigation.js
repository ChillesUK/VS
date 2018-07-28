import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';
import SocialLinks from './SocialLinks';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className='HeaderBar' >
            <Navbar >
                <Nav pullLeft bsStyle="tabs" >
                    <NavItem style={{borderLeft: 0 }} eventKey={1} componentClass={NavLink} href='/Dashboard' to='/Dashboard'>
                    Dashboard
                    </NavItem>
                    <NavItem eventKey={2} componentClass={NavLink} href='/World-Markets' to='/World-Markets'>
                    World Markets
                    </NavItem>
                    <NavItem eventKey={3} componentClass={NavLink} href='/About' to='/About'>
                    About
                    </NavItem>
                    <NavItem eventKey={4} componentClass={NavLink} href='/Compare-Stock-Brokers' to='/Compare-Stock-Brokers'>
                    Compare Brokers
                    </NavItem>
                </Nav>
            </Navbar>
            <SocialLinks />   
            </div>
        );
    }
}
