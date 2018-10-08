import React from 'react';
import PropTypes from 'prop-types';
import '../Navigation/SocialLinks/Modal.css';
import './RegistrationModal.css';
import { auth } from '../../../firebase';

export class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleSubmit() will attempt to create a user within Firebase 

  handleSubmit = (event) => {
    event.preventDefault();

    let email = this.state.email;
    let password = this.state.passwordOne;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .catch(returnedError => {
        var errorCode = returnedError.code;
        var errorMessage = returnedError.message;

        this.setState({
          error: 'Error : ' + errorMessage
        });
      });
  }

  // handleChange() simply updates state
  handleChange(event) {
    // Console.Log the field being changed by the user
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    // Validation below 
    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === '' ||
      this.state.email === '' ||
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) !== true;
      

    const RegModalInput = {
      'minHeight': '26px',
      'fontSize': '12px',
      'padding': '0 15px',
      'marginLeft': '35px',
      width: '-webkit-fill-available',
      'marginRight': '35px',
    };

    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
          <a onClick={this.props.onClose} className='closeModal'><i className="fas fa-times" ></i></a>

          <img src="./assets/VS-Registration.png" alt="..." className="modalImage" />

          <h4 className='RegModalHeading'>Registration</h4>
          <p className='RegModalText'>Find and follow your own stocks easily by setting up an account</p>

              <form onSubmit={this.handleSubmit}>

              <h5 className='RegModalSubHeading' >Email</h5>
              <input style={RegModalInput} name="email" type='email' placeholder="Email Address" className='inputText' value={this.state.email} onChange={this.handleChange} autoComplete="email"/>

              <h5 className='RegModalSubHeading'>Password</h5>
              <input style={RegModalInput} name="passwordOne" type='password' placeholder="Enter Password" className='inputText' value={this.state.passwordOne} onChange={this.handleChange} autoComplete="new-password"/>

              <h5 className='RegModalSubHeading'>Confirm Password</h5>
              <input style={RegModalInput} name="passwordTwo" type='password' placeholder="Confirm Password" className='inputText' value={this.state.passwordTwo} onChange={this.handleChange} autoComplete="new-password"/>

    { /* Issue with hitting enter here - closing the modal because it hits the <Close> Button */}
    
              <button className='RegModalButton' style={{ marginLeft: 35 }} onClick={this.props.onClose}>
                Close <i className="fas fa-times"> </i>
              </button>

              <button className='RegModalButton' disabled={isInvalid} type="submit">
                Sign Up <i className="fas fa-user-plus"></i>
              </button>

              </form>
              <p className='error' style={{ marginLeft: 35 }}> {this.state.error} </p>

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
