import React from 'react';
import './Authentication.css';
import { RegistrationModal } from './RegistrationModal';

export default class Authentication extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            isOpen: false,
            emailSignIn: '',
            passwordSignIn: '',
         };

         this.handleChange = this.handleChange.bind(this);
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
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

        const isInvalid =
        this.state.passwordSignIn === '' ||
        this.state.emailSignIn === '' ||
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.emailSignIn) !== true;
        
        
        const bottomRow = {
            display: 'inline-block',
            float: 'left',
            width: '155px',
            'marginTop': '1px',
          };

        return (
            <div>

                <div className='preLogin' >

                    <input name= 'emailSignIn' type='email' placeholder='Email' className='inputText' value={this.state.emailSignIn} onChange={this.handleChange}/>

                    <input name='passwordSignIn' type='password' placeholder='Password' className='inputText' value={this.state.passwordSignIn} onChange={this.handleChange}/>

                    <button className='authButtons' disabled={isInvalid} >
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
                    <p className='GoogleSignInText'  >Sign in with Google</p>
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
