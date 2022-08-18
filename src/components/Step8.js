import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../shared/hooks/http-hook';
//import validator from "validator";

function Step8({ formState, setFormData, handleStepChange }) {
  //const [error, setError] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const nav = useNavigate();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      //console.log(formState)
      let formData = {
        email: formState.email,
        password: formState.password,
        verificationCode: formState.verificationCode,
        firstName: formState.firstName,
        lastName: formState.lastName,
        phone: formState.phone,
        country: formState.country,
        dob: formState.dob,
        displayName: formState.displayName,
        terms: formState.terms,
        marketing: formState.marketing,
      };
     

      await sendRequest(
        `${process.env.REACT_APP_BACKEND_API}/user/register`,
        'POST',
        JSON.stringify(formData),
        {
          'Content-type': 'application/json; charset=UTF-8',
        }
      );

      //nav('/');

      // fetch(`${process.env.REACT_APP_BACKEND_API}/user/register`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     title: 'test',
      //     body: 'fsfs',
      //     userId: Math.random().toString(36).slice(2),
      //  }),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      // })
      //    .then((response) => response.json())
      //    .then((data) => {
      //       console.log(data);
      //       // Handle data
      //    })
      //    .catch((err) => {
      //       console.log(err.message);
      //    });
    } catch (err) {}
  };

  return (
    <div className="reg-step clearfix container" id="reg-step-8">
      <form encType="multipart/form-data" onSubmit={formSubmitHandler}>
        <div className="reg-step-inner clearfix">
          <h2 className="reg-step-title-1 mb-3">Select Your Avatar</h2>
          <div className="reg-avatar-selector-con clearfix">
            <div className="reg-avatar-selector-col-1 clearfix">
              <div className="reg-selected-avatar-preview-holder clearfix">
                <img
                  src={process.env.PUBLIC_URL + '/images/placeholder.jpg'}
                  alt="Avatar"
                  className="object-fit-cover w-100 h-100 reg-selected-avatar-preview"
                />
              </div>
              <p className="reg-username">@cryptopunk</p>
            </div>
            <div className="reg-avatar-selector-col-2 clearfix">
              <div className="reg-avatar-selector-col-2-inner clearfix">
                <div className="row clearfix">
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/images/image.jpg'}
                        alt="Queen Bee"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Queen Bee</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/images/avatars-KavzB06IdWwLRfS7-NzQoQA-t500x500.jpg'
                        }
                        alt="Neon Droid"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Neon Droid</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + '/images/0021978667_10.jpg'
                        }
                        alt="Neon Beard"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Neon Beard</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/images/167148.jpg'}
                        alt="Capped Man"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Capped Man</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/images/image.jpg'}
                        alt="Queen Bee"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Queen Bee</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/images/avatars-KavzB06IdWwLRfS7-NzQoQA-t500x500.jpg'
                        }
                        alt="Neon Droid"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Neon Droid</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + '/images/0021978667_10.jpg'
                        }
                        alt="Neon Beard"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Neon Beard</p>
                      </div>
                    </a>
                  </div>
                  <div className="reg-avatar-selector-item col-xl-3 col-lg-4 col-md-6 clearfix mb-3">
                    <a
                      href="#"
                      className="reg-avatar-selector-item-inner clearfix"
                    >
                      <img
                        src={process.env.PUBLIC_URL + '/images/167148.jpg'}
                        alt="Capped Man"
                        className="object-fit-cover w-100 h-100"
                      />
                      <div className="reg-avatar-selector-cntnt-holder">
                        <p>Capped Man</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btns-holder-1 d-flex mt-4 align-items-center justify-content-end">
            <a href="#" className="reg-link-2 d-table me-4">
              Skip for Now
            </a>
            <button className="reg-btn-blue-1" type="submit">
              Save & Play
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Step8;
