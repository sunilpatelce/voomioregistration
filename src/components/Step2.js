import React, { useState } from 'react';
import validator from "validator";

function Step2({ formData, setFormData, handleStepChange }) {
  const [errorFields, setErrorFields] = useState({verificationCode:false});
  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    
    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(formData.verificationCode) || validator.isLength(formData.verificationCode) < 6 ){
      setErrorFields({verificationCode:true});
    } else {
      handleStepChange(3);
    }
  };
  return (
    <div className="reg-step clearfix" id="reg-step-2">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Verify Email</h2>
        <div className="form-text">
          You should receive an email from us with verification code
        </div>
        <h3 className="reg-step-title-2 my-3">Enter Code :</h3>
        <div className="form-group otp-form-group mb-3">

        <input
            type="text"
            className="form-control"
            placeholder="Verification Code"
            value={formData.verificationCode}
            inputMode="numeric" 
            style={{ border: errorFields.verificationCode ? "1px solid red" : "" }}
            onChange={(event) =>
              setFormData({ ...formData, verificationCode: event.target.value })
            }
          />
          {errorFields.verificationCode ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Please enter valid Verification Code.
                </span>
              ) : (
                ""
              )}
          {/* <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" /> */}
        </div>
        <div className="form-text mb-1">
          Not seeing your verification code ?
        </div>
        <a href="#" className="link-blue-1 mb-4 d-table">
          Send New Code
        </a>
        <button className="reg-btn-blue-1 w-100 next-reg-step-btn mb-3" onClick={() => {
            handleStepChange(3);
          }}>
          Verify
        </button>
        <div className="quick-offer-parent">
          <div className="quick-offer">
            <img
              src={process.env.PUBLIC_URL + '/images/coins-icon-1.png'}
              alt="coins"
              className="me-2"
              width="40"
              height="40"
            />
            <p>Verify Email & Get 25 Coin FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
