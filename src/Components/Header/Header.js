import React from 'react';
// import { Link } from 'react-bootstrap';
import './Header.css';
import Navigation from './Navigation/Navigation';
import SocialLinks from './Navigation/SocialLinks/SocialLinks';
import Authentication from './Authentication/Authentication';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="HeaderBackground">

                <div className="row">
                    <div className="col">
                        <div>
                            <Link to='/Dashboard'  style={{ border: '1px', padding: '3px' }}>
                                <img className="VSLogo" src="./assets/VSLogo.png" alt="..." />
                            </Link>
                        </div>

                        <div>
                            <Authentication />
                        </div>

                    </div>
                </div>

                <div className="row HeaderBar">
                    <div>
                        <Navigation />
                    </div>
                    <div>
                        <SocialLinks />
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        );
    }
}

// Got a problem here Joe - where I don't lnow how to set a URL on my image

// <Image src="./assets/VSLogo.png" onClick="/Dashboard" />
// <Thumbnail className="VSLogo" href="/Dashboard" alt src="./assets/VSLogo.png" />

/*
   <a target="_self" href="/Dashboard">
                        <Image className="VSLogo" src="./assets/VSLogo.png" />
                        </a>
*/