import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './SocialLinks.css';

export default class SocialLinks extends React.Component {
    render() {
        return (
            <div className='StylesSocialLinks'>
                <Image className="VSTwitter" src="./assets/VS-Twitter.png" />
                <Image className="StocksWhatsAppChat" src="./assets/Stocks-WhatsApp-Chat.png" />
            </div>



        );
    }
}

// <Image className="StocksWhatsAppChat" src="./assets/Stocks-WhatsApp-Chat.png" />