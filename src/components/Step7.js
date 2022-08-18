import React, { useState } from 'react';
import validator from "validator";

function Step7({ formData, setFormData, handleStepChange }) {
  const [error, setError] = useState(false);
  return (
    <div className="reg-step clearfix has-reg-inner-steps" id="reg-step-7">
      <div className="reg-step-inner clearfix active">
        <h2 className="reg-step-title-1 mb-0 text-center">
          Connect to Wallet &
        </h2>
        <div className="quick-offer-parent">
          <div className="quick-offer">
            <p className="text-center">
              Get 25 Coins FREE + 200 Additional Coins
            </p>
          </div>
        </div>
        <a href="#" className="reg-wallet-cnct-btn">
          <div className="reg-wallet-cnct-img-holder">
            <img src={process.env.PUBLIC_URL + '/images/metamask-logo 1.png'} alt="Metamask" />
          </div>
          <div className="reg-wallet-cnct-cntnt-holder">
            <p>Metamask Wallet</p>
          </div>
        </a>
        <a href="#" className="reg-wallet-cnct-btn active">
          <div className="reg-wallet-cnct-img-holder">
            <img src={process.env.PUBLIC_URL + '/images/ronin-wallet 1.png'} alt="Ronin" />
          </div>
          <div className="reg-wallet-cnct-cntnt-holder">
            <p>Ronin Wallet</p>
          </div>
        </a>
        <a href="#" className="reg-wallet-cnct-btn">
          <div className="reg-wallet-cnct-img-holder">
            <img src={process.env.PUBLIC_URL + '/images/coinbase-wallet 1.png'} alt="Coinbase" />
          </div>
          <div className="reg-wallet-cnct-cntnt-holder">
            <p>Coinbase Wallet</p>
          </div>
        </a>
        <a href="#" className="reg-wallet-cnct-btn">
          <div className="reg-wallet-cnct-img-holder">
            <img src={process.env.PUBLIC_URL + '/images/fiatmoney.png'} alt="Fiat Money" />
          </div>
          <div className="reg-wallet-cnct-cntnt-holder">
            <p>Fiat Money</p>
          </div>
        </a>
        <button className="reg-btn-blue-1 w-100 inner-next-reg-step-btn mt-3 mx-auto" onClick={() => {
            handleStepChange(8);
          }}>
          Continue
        </button>
        <a
          href="#"
          className="reg-link-2 next-reg-step-btn mt-4 mx-auto d-table"
        >
          Skip for Now
        </a>
      </div>
      <div className="reg-step-inner clearfix">
        <img
          src="images/output-onlinegiftools1.gif"
          alt="check"
          width="240"
          height="354"
          className="mb-4 mx-auto d-table h-auto"
        />
        <h2 className="reg-step-title-1 mb-0 text-center text-success">
          Congratulations !
        </h2>
        <h2 className="reg-step-title-2 mb-0 text-center">
          You’ve Earned 300 Coins
        </h2>

        <button className="reg-btn-blue-1 w-100 next-reg-step-btn mt-5 mx-auto">
          Continue & Select Avatar
        </button>
      </div>
    </div>
  );
}

export default Step7;
