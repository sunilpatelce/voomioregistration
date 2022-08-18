import React from 'react';

function Step3({ formData, setFormData, handleStepChange }) {
  return (
    <div className="reg-step clearfix has-reg-inner-steps" id="reg-step-3">
      <div className="reg-step-inner clearfix active">
        <img
          src={process.env.PUBLIC_URL + '/images/coins-icon-2.png'}
          alt="coins"
          width="120"
          height="120"
          className="shadow-lg mb-4 mx-auto d-table"
        />
        <p className="reg-text-1 text-center mb-0">
          Play now with complementary Coins
        </p>
        <p className="reg-text-1 text-center opacity-50 my-1">or</p>
        <p className="reg-text-1 text-center mb-0">
          Earn more coins by setting up your Profile
        </p>
        <div className="btns-holder-1 d-flex mt-4">
          <button
            className="reg-btn-blue-1 inner-next-reg-step-btn me-sm-3 mb-3 mb-sm-0 flex-grow-1 col-sm-6 col-12"
            onClick={() => {
              handleStepChange(4);
            }}
          >
            Play Now
          </button>
          <button
            className="reg-btn-green-1 next-reg-step-btn flex-grow-1 col-sm-6 col-12"
            onClick={() => {
              handleStepChange(5);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
