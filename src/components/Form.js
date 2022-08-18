import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import StepDots from './StepDots';

function Form() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    dob: '',
    displayName: '',
    terms: '',
    marketing: '',
  });

  const PageDisplay = () => {
    if (page === 1) {
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 2) {
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 3) {
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 4) {
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 5) {
      return (
        <Step5
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 6) {
      return (
        <Step6
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else if (page === 7) {
      return (
        <Step7
          formData={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    } else {
      return (
        <Step8
          formState={formData}
          setFormData={setFormData}
          handleStepChange={handleStepChange}
        />
      );
    }
  };

  const handleStepChange = (page) => {
    //console.log(page)
    setPage(page);
  };

  return (
    <div className="App">
      <div className="reg-cntnt-holder clearfix">
        <div className="reg-header clearfix cp-fade-down">
          <a href="#" className="d-table mx-auto">
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              width="137"
              height="94"
              alt="Voomio"
              className="mw-100 h-auto"
            />
          </a>
        </div>
        <div className="reg-page-bg-holder clearfix">
          <video
            src={
              process.env.PUBLIC_URL +
              '/videos/041474787-people-playing-poker-casino-compressed.mp4'
            }
            poster={process.env.PUBLIC_URL + '/images/v-bg-poster.jpg'}
            autoPlay
            loop
            muted="muted"
            className="object-fit-cover h-100 w-100"
            id="bannervideo"
          />
          <div className="reg-page-bg-backdrop"></div>
        </div>

        <div className="reg-page-cntnt-holder clearfix position-relative">
          <div className="container clearfix cp-fade-up">
            <StepDots page={page} />
            <div className="reg-steps-holder position-relative">
              {PageDisplay()}
            </div>
          </div>
        </div>
      </div>

      {/* <a href="#" id="to-top">
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36 91.3" style="enable-background:new 0 0 36 91.3;" xml:space="preserve">
            <g transform="translate(0,-952.36218)">
                <path d="M17.2,952.8l-17,16c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l15.3-14.4v86.8c0,0.6,0.4,1,1,1
                    s1-0.4,1-1v-86.7l15.3,14.4c0.4,0.4,1.1,0.3,1.4,0c0.4-0.4,0.4-1,0-1.4l-17-16C18.1,952.5,17.5,952.6,17.2,952.8L17.2,952.8z"></path>
            </g>
        </svg>
    </a> */}
    </div>
  );
}

export default Form;
