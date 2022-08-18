import React, { useState } from 'react';
import validator from 'validator';

function Step6({ formData, setFormData, handleStepChange }) {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isMarketingChecked, setIsMarketingChecked] = useState(false);


  const [errorFields, setErrorFields] = useState({
    terms: false,
    marketing: false
  });
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (!isTermsChecked) {
      setErrorFields({
        terms: true,
        marketing: false
      });
    } else if (!isMarketingChecked) {
      setErrorFields({
        terms: false,
        marketing: true
      });
    } else {
      handleStepChange(7);
    }
  };

  return (
    <div className="reg-step clearfix reg-terms-step" id="reg-step-6">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3 text-center">
          Terms of Service Agreement
        </h2>
        <form onSubmit={submitFormData}>
        
        <div className="reg-terms-holder mb-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos
            eveniet debitis rerum accusantium esse ea quod magni quaerat dolorem
            fugit rem sint aliquid consequatur fugiat, vero minima assumenda
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magni, autem! Corrupti aut dolores quis nulla accusamus
            dolorem at ipsa tempore maiores, eum odio nemo ut debitis
            exercitationem magni nihil nobis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugiat cumque harum reiciendis, non
            debitis architecto odio earum velit qui reprehenderit aspernatur
            voluptas tempora. Iure cum provident eveniet itaque amet magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusamus ab totam ut! Quisquam porro enim atque. Aut magni eum
            placeat, veniam enim optio consequatur magnam. Ut non odit ab!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusamus ab totam ut! Quisquam porro enim atque. Aut magni eum
            placeat, veniam enim optio consequatur magnam. Ut non odit ab! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            adipisci, nemo possimus dolorem aut rerum rem iusto architecto est
            error, repudiandae fugit. Pariatur porro, sit beatae totam dolorum
            unde! Officiis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos
            eveniet debitis rerum accusantium esse ea quod magni quaerat dolorem
            fugit rem sint aliquid consequatur fugiat, vero minima assumenda
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magni, autem! Corrupti aut dolores quis nulla accusamus
            dolorem at ipsa tempore maiores, eum odio nemo ut debitis
            exercitationem magni nihil nobis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugiat cumque harum reiciendis, non
            debitis architecto odio earum velit qui reprehenderit aspernatur
            voluptas tempora. Iure cum provident eveniet itaque amet magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusamus ab totam ut! Quisquam porro enim atque. Aut magni eum
            placeat, veniam enim optio consequatur magnam. Ut non odit ab!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            accusamus ab totam ut! Quisquam porro enim atque. Aut magni eum
            placeat, veniam enim optio consequatur magnam. Ut non odit ab! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            adipisci, nemo possimus dolorem aut rerum rem iusto architecto est
            error, repudiandae fugit. Pariatur porro, sit beatae totam dolorum
            unde! Officiis!
          </p>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            value="Terms"
            checked={isTermsChecked}
            style={{ border: errorFields.terms ? '1px solid red' : '' }}
            id="terms"
            onChange={(e) => {
              setIsTermsChecked(!isTermsChecked);
              setFormData({ ...formData, terms: e.target.value });
            }}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the terms and conditions and privacy policy.
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            value="Marketing"
            checked={isMarketingChecked}
            style={{ border: errorFields.marketing ? '1px solid red' : '' }}
            id="marketing"
            onChange={(e) => {
              setIsMarketingChecked(!isMarketingChecked);
              setFormData({ ...formData, marketing: e.target.value });
            }}
          />
          <label className="form-check-label" htmlFor="marketing">
            I agree to receive marketing emails from Voomio
          </label>
        </div>
        <button
          className="reg-btn-blue-1 w-100 next-reg-step-btn mt-3 mx-auto"
          type="submit"
        >
          Continue
        </button>
        </form>

        <div className="quick-offer-parent mt-5">
          <div className="quick-offer">
            <img
              src={process.env.PUBLIC_URL + '/images/coins-icon-1.png'}
              alt="coins"
              className="me-2"
              width="40"
              height="40"
            />
            <p>Agree to the terms and conditions & Get 25 Coin FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step6;
