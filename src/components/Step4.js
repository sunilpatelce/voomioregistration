import React from 'react';

function Step4({ formData, setFormData, handleStepChange }) {
  return (
    <div className="reg-step clearfix has-reg-inner-steps" id="reg-step-4">
      <div className="reg-step-inner clearfix active">
        <img
          src={process.env.PUBLIC_URL + '/images/coins-icon-2.png'}
          alt="coins"
          width="120"
          height="120"
          className="shadow-lg mb-4 mx-auto d-table"
        />
        <p className="reg-text-1 text-center mb-0">
          Are you sure you want Play Now with Only{' '}
          <span className="text-danger">25 Coins</span>, Don’t you want to earn
          more <span className="text-success">FREE Coins</span> ?
        </p>
        <div className="btns-holder-1 d-flex mt-4">
          <button
            className="reg-btn-blue-1 me-sm-3 mb-3 mb-sm-0 flex-grow-1 col-sm-6 col-12"
            onClick={() => {
              handleStepChange(8);
            }}
          >
            Yes, Let me in
          </button>
          <button
            className="reg-btn-green-1 next-reg-step-btn flex-grow-1 col-sm-6 col-12"
            onClick={() => {
              handleStepChange(5);
            }}
          >
            No, Let me earn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
