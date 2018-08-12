import React from 'react';
import './SocialLinks.css';
import { Modal } from './Modal';


export default class SocialLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <div className='StylesSocialLinks'>

                <a href='https://twitter.com/rban991?lang=en' target="_blank">
                    <img src="./assets/VS-Twitter.png" alt="..." className="VSTwitter" />
                </a>

                <a onClick={this.toggleModal}>
                    <img src="./assets/VS-Slack.png" alt="..." className="StocksWhatsAppChat" />
                </a>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    
                </Modal>
            </div>

        );
    }
}
//<Modal show={this.state.show} />

//           Place between two nearest divs 
//    <WhatsAppModal show={this.state.show} />

/* BETWEEN CLASS AND RENDER 

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false
    };
}

handleClose() {
    this.setState({ show: false });
}

handleShow() {
    this.setState({ show: true });
}
*/

// ON THE THUMBNAIL IMAGE I WANT THE MODAL TO RESPOND FROM 
// onClick={this.handleShow}   

/* BENEATHE THE THUMBNAIL 
<Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>

                        <h4>Popover in a modal</h4>
                        <p>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

*/