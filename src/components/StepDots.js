import React from 'react';

function StepDots(props) {
  const page = props.page;
  return (
    <div className="reg-steps-dots">
      <span
        className={`reg-steps-dot ${page === 1 ? 'active' : ''}`}
        data-id="#reg-step-1"
      ></span>
      <span
        className={`reg-steps-dot ${page === 2 ? 'active' : ''}`}
        data-id="#reg-step-2"
      ></span>
      <span
        className={`reg-steps-dot ${page === 3 ? 'active' : ''}`}
        data-id="#reg-step-3"
      ></span>
      <span
        className={`reg-steps-dot ${page === 4 ? 'active' : ''}`}
        data-id="#reg-step-4"
      ></span>
      <span
        className={`reg-steps-dot ${page === 5 ? 'active' : ''}`}
        data-id="#reg-step-5"
      ></span>
      <span
        className={`reg-steps-dot ${page === 6 ? 'active' : ''}`}
        data-id="#reg-step-6"
      ></span>
      <span
        className={`reg-steps-dot ${page === 7 ? 'active' : ''}`}
        data-id="#reg-step-7"
      ></span>
      <span
        className={`reg-steps-dot ${page === 8 ? 'active' : ''}`}
        data-id="#reg-step-8"
      ></span>
    </div>
  );
}

export default StepDots;
