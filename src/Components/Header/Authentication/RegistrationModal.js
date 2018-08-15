import React from 'react';
import PropTypes from 'prop-types';
import '../Navigation/SocialLinks/Modal.css';
import './RegistrationModal.css';

export class RegistrationModal extends React.Component  {
  render() {

    const RegModalInput = {
      'min-height': '30px',
      'font-size': '12px',
      'padding': '0 15px',
      'margin-left': '35px',
      width: '-webkit-fill-available',
      'margin-right': '35px',
    };

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
         <a onClick={this.props.onClose} className='closeModal'><i className="fas fa-times" ></i></a>

         <img src="./assets/VS-Registration.png" alt="..." className="modalImage" />

          <h4 className='RegModalHeading'>Registration</h4>
          <p className='RegModalText'>Find and follow your stocks easily with a ViewStocks.co.uk account</p>
          <h5 className='RegModalSubHeading' >Email</h5>
          <input style={RegModalInput} id='txtEmail' type='email' className='inputText' />
          <h5 className='RegModalSubHeading'>Password</h5>
          <input style={RegModalInput} id='txtPassword' type='password' className='inputText' />

            <button className='RegModalButton'>
            Sign Up
            </button>
        </div>
      </div>
    );
  }
}

RegistrationModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
