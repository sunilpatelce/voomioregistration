import React, { useState } from 'react';
import validator from 'validator';

function Step5({ formData, setFormData, handleStepChange }) {
  const [errorFields, setErrorFields] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    country: false,
    dob: false,
    displayName: false,
  });

  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(formData.firstName)) {
      setErrorFields({
        firstName: true,
        lastName: false,
        phone: false,
        country: false,
        dob: false,
        displayName: false,
      });
    } else if (validator.isEmpty(formData.lastName)) {
      setErrorFields({
        firstName: false,
        lastName: true,
        phone: false,
        country: false,
        dob: false,
        displayName: false,
      });
    } else if (validator.isEmpty(formData.phone)) {
      setErrorFields({
        firstName: false,
        lastName: false,
        phone: true,
        country: false,
        dob: false,
        displayName: false,
      });
    } else if (validator.isEmpty(formData.country)) {
      setErrorFields({
        firstName: false,
        lastName: false,
        phone: false,
        country: true,
        dob: false,
        displayName: false,
      });
    } else if (validator.isEmpty(formData.dob)) {
      setErrorFields({
        firstName: false,
        lastName: false,
        phone: false,
        country: false,
        dob: true,
        displayName: false,
      });
    } else if (validator.isEmpty(formData.displayName)) {
      setErrorFields({
        firstName: false,
        lastName: false,
        phone: false,
        country: false,
        dob: false,
        displayName: true,
      });
    } else {
      handleStepChange(6);
    }
  };

  return (
    <div className="reg-step clearfix" id="reg-step-5">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Player Information</h2>
        <form onSubmit={submitFormData}>
          <div className="form-group mb-2">
            <label className="form-label">First Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              style={{ border: errorFields.firstName ? '1px solid red' : '' }}
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Last Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              style={{ border: errorFields.lastName ? '1px solid red' : '' }}
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Phone :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              style={{ border: errorFields.phone ? '1px solid red' : '' }}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Country :</label>
            <select
              className="form-select form-control"
              style={{ border: errorFields.country ? '1px solid red' : '' }}
              onChange={(e) => {
                setFormData({ ...formData, country: e.target.value });
              }}
            >
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="Korea">Korea</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Date of Birth :</label>
            <input
              type="text"
              className="form-control"
              placeholder="MM/DD/YYYY"
              id="inputAppDatetime"
              style={{ border: errorFields.dob ? '1px solid red' : '' }}
              value={formData.dob}
              onChange={(e) => {
                setFormData({ ...formData, dob: e.target.value });
              }}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Display Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Display Name"
              value={formData.displayName}
              style={{ border: errorFields.displayName ? '1px solid red' : '' }}
              onChange={(e) => {
                setFormData({ ...formData, displayName: e.target.value });
              }}
            />
            <div className="form-text mb-1">
              Up to 12 characters without spaces
            </div>
          </div>
          <button
            className="reg-btn-blue-1 w-100 next-reg-step-btn mt-3"
            type="submit"
          >
            Continue
          </button>
        </form>
        <div className="quick-offer-parent mt-3">
          <div className="quick-offer">
            <img
              src={process.env.PUBLIC_URL + '/images/coins-icon-1.png'}
              alt="coins"
              className="me-2"
              width="40"
              height="40"
            />
            <p>Complete Above Information & Get 25 Coin FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
