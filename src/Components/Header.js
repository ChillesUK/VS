import React from 'react';
import { Link, Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
// import { Link } from 'react-bootstrap';
import './Header.css';
import Navigation from './Navigation';

export default class Header extends React.Component {
    render() {
        return (
            <div >
                <Grid fluid className="HeaderBackground" >
                    <Row >
                        <Col >
                            <Image className="VSLogo" src="./assets/VSLogo.png" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Navigation />
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

// Got a problem here Joe - where I don't lnow how to set a URL on my image 