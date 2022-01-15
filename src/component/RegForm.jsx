import React, { useState } from  'react';


const RegForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [firstNameError, setFirstNameError] = useState("");
    // const [lastNameError, setLastNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };


    const lengthValidatorNames = input => {
        if(input.length > 2) {
            return true;
        }
        else {
            return false;
        }
    }

    const lengthValidatorEmail = input => {
        if(input.length > 5) {
            return true;
        }
        else {
            return false;
        }
    }

    const lengthValidatorPasswords = input => {
        if(input.length > 7) {
            return true;
        }
        else {
            return false;
        }
    }

    const matchPasswords = input => {
        if(password == confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    const allValid = input => {
        return lengthValidatorNames(firstName)
            && lengthValidatorNames(lastName)
            && lengthValidatorEmail(email)
            && lengthValidatorPasswords(password)
            && lengthValidatorPasswords(confirmPassword)
            && matchPasswords()
    }

    return(
    <div>
        <form className="w-25 mx-auto" onSubmit={ createUser }>
            <h1>Register</h1>
            <div className="form-group">
                <label>First Name: </label>
                <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value) } />
                <span className="alert-danger">{!lengthValidatorNames(firstName) && firstName.length > 0 && "Name must be at least 3 characters!"}</span>
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value) } />
                <span className="alert-danger">{!lengthValidatorNames(lastName) && lastName.length > 0 && "Name must be at least 3 characters!"}</span>
            </div>
            <div className="form-group">
                    <label>Email Address: </label>
                    <input className="form-control" type="text" onChange={ (e) => setEmail(e.target.value) } />
                    <span className="alert-danger">{!lengthValidatorEmail(email) && email.length > 0 && "Email must be at least 6 characters!"}</span>
                </div>
            <div className="form-group">
                <label>Password: </label>
                <input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value) } />
                <span className="alert-danger">{!lengthValidatorPasswords(password) && password.length > 0 && "Password must be at least 8 characters!"}</span>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input className="form-control" type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                <span className="alert-danger">{!lengthValidatorPasswords(confirmPassword) && confirmPassword.length > 0 && "Password must be at least 8 characters!"}</span><br></br>
                <span className="alert-danger">{!matchPasswords() && confirmPassword.length > 0 && "Passwords must match!"}</span>
            </div><br></br>
            {
                allValid(RegForm)
                    ? <input className="btn btn-success" type="submit" value="Register User" /> 
                    : <input className="btn btn-secondary" type="submit" value="Register User" disabled/> 
            }
        </form><br/>

        <div>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirmed Password: { confirmPassword }</p>
        </div>
    </div>
    );


};

export default RegForm;