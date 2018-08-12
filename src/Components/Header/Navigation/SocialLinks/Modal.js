import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export class Modal extends React.Component  {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
         <a onClick={this.props.onClose} className='closeModal'><i className="fas fa-times" ></i></a>

         <img src="./assets/VS-Slack.png" alt="..." className="modalImage" />

          <h4>View Stocks Chat</h4>
          <p>Select the following link to take part in stocks and investments conversations with other ViewStocks.co.uk users</p>
          <div className="well">
              <p><a href='https://chat.whatsapp.com/4iT3WKMh97y6Xixx6mjqTf'>https://slack.com/4iT3WKMh97y6Xixx6mjqTf</a></p>
          </div>

            <button onClick={this.props.onClose}>
            Close <i className="fas fa-times"></i>
            </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};


/*
import './WhatsAppModal.css';

export class WhatsAppModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: true
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        console.log(this.props.show);

        return (
            <div className="modal" show={this.props.show} >
                <div className="modal-header" closeButton>
                    <h5 className="modal-title">Modal heading</h5>
                </div>

                <div className="modal-body">
                    <h4>Text in a modal</h4>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>

                    <h4>Popover in a modal</h4>
                    <p>
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Close</button>
                </div>
            </div>

        );
    }
}

*/



























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

// Bit that I did 
/* 

            <div>
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>  Duis mollis, est non commodo luctus, nisi erat porttitor ligula. </p>
                    <h4>Popover in a modal</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClick}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
*/