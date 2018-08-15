import React from 'react';
import './Authentication.css';
import { RegistrationModal } from './RegistrationModal';

export default class Authentication extends React.Component {
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

        const bottomRow = {
            display: 'inline-block',
            float: 'left',
            width: '155px',
            'margin-top': '1px',
          };

        return (
            <div>

                <div className='preLogin' >

                    <input id='txtEmail' type='email' placeholder='Email' className='inputText' />

                    <input id='txtPassword' type='password' placeholder='Password' className='inputText' />

                    <button className='authButtons'>
                        Log In  <i className="fas fa-unlock-alt"></i>
                    </button>


                    <button className='authButtons' onClick={this.toggleModal} >
                        Sign Up 
                    </button>


                    <div style={bottomRow}>
                        <label className='rememberMe'>
                            Remember me
                        </label>
                        <input
                            className='rememberMeCheckbox'
                            name="isGoing"
                            type="checkbox"
                        />
                    </div>

                    <div style={bottomRow}>
                    <a className='forgottenPassword' >Forgotten your password ?</a>
                    </div>

                    <button className='VSGoogleSignInButton'>
                    <img className="VSGoogleSignIn" src="./assets/GoogleButton.png" alt="..." />
                    <p className='GoogleSignInText' >Sign in with Google</p>
                    </button>

                    <RegistrationModal show={this.state.isOpen}
                    onClose={this.toggleModal}> 
                     </RegistrationModal>

                </div>

            </div>
        )
    }
}

/* 
checked={this.state.isGoing}
onChange={this.handleInputChange} 
*/
