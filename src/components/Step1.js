import React, { useState } from 'react';
import validator from "validator";

function Step1({ formData, setFormData, handleStepChange }) {
  const [errorFields, setErrorFields] = useState({email:false, password:false, confirmPassword:false});

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
      
      // checking if value of first name and last name is empty show error else take to step 2
      if (validator.isEmpty(formData.email) || !validator.isEmail(formData.email)){
        setErrorFields({email:true, password:false, confirmPassword:false});
      }else if(validator.isEmpty(formData.password) || !validator.isStrongPassword(formData.password)){
        setErrorFields({email:false, password:true, confirmPassword:false});
      }else if(validator.isEmpty(formData.confirmPassword) || !validator.equals(formData.confirmPassword, formData.password) ){
        setErrorFields({email:false, password:false, confirmPassword:true});
      } else {
        handleStepChange(2);
      }
    };

  return (
    <div className="reg-step clearfix" id="reg-step-1">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Create an Account</h2>
        <form onSubmit={submitFormData}>
        <div className="form-group mb-3">
          <input
            type="email"
            inputMode="email"
            className="form-control"
            value={formData.email}
            placeholder="Email Address"
            style={{ border: errorFields.email ? "1px solid red" : "" }}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          {errorFields.email ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Please enter valid email.
                </span>
              ) : (
                ""
              )}
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            style={{ border: errorFields.password ? "1px solid red" : "" }}
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          {errorFields.password ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Please enter strong password.
                </span>
              ) : (
                ""
              )}
          <div className="pass-indi-holder">
            <span className="pass-indi bg-danger"></span>
            <span className="pass-indi bg-danger"></span>
            <span className="pass-indi bg-warning"></span>
            <span className="pass-indi bg-success"></span>
          </div>
          <div className="form-text">
            Must be 8 Characters <br />
            (At least 1 Uppercase, Special Symbol & Number)
          </div>
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            style={{ border: errorFields.confirmPassword ? "1px solid red" : "" }}
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
          />
          {errorFields.confirmPassword ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Confirm Password not matching with password.
                </span>
              ) : (
                ""
              )}
        </div>
        <button
          className="reg-btn-blue-1 w-100 next-reg-step-btn"
          type="submit"
        >
          Continue
        </button>
        </form>
        <div className="ortext">
          <p>Or Sign up with</p>
        </div>
        <div className="reg-quick-opt-btns">
          <a href="#" className="reg-quick-opt-btn me-2" title="Apple ID">
            <img
              src={process.env.PUBLIC_URL + '/images/Apple_logo_black_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
          <a href="#" className="reg-quick-opt-btn me-2" title="Google">
            <img
              src={process.env.PUBLIC_URL + '/images/Google_ G _Logo_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
          <a href="#" className="reg-quick-opt-btn" title="Discord">
            <img
              src={process.env.PUBLIC_URL + '/images/discord-icon_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Step1;
