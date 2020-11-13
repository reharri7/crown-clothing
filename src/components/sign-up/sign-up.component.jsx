import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    
    const [userCredentials, setUserCredentials] = useState(
        { 
        displayName: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    });

    const { 
        displayName, 
        email, 
        password, 
        confirmPassword 
    } = userCredentials;

    const handleSubmit = async event => {
        
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        if(password.length < 6 || confirmPassword.length < 6){
            alert("Password should be at least 6 characters");
            return;
        }
        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value});
    };

    return(
        <div className= 'sign-up'>
            <h2 className= 'title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={ handleSubmit }>
            <FormInput
                type='text'
                name='displayName'
                value={ displayName }
                onChange={ handleChange }
                label='Display Name'
                required
            >
            </FormInput>
            <FormInput
                type='text'
                name='email'
                value={ email }
                onChange={ handleChange }
                label= 'Email'
                required
            >
            </FormInput>
            <FormInput
                type='password'
                name='password'
                value={ password }
                onChange={ handleChange }
                label='Password (Minimum 6 characters)'
                required
            >
            </FormInput>
            <FormInput
                type='password'
                name='confirmPassword'
                value={ confirmPassword }
                onChange={ handleChange }
                label='Confirm Password'
                required
            >
            </FormInput>
            <CustomButtom type='submit'>SIGN UP</CustomButtom>
        </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);