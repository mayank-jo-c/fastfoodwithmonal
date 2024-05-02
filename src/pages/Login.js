import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePhoneNumberSubmit = (e) => {

    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;
    console.log("fun run")
    const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber,appVerifier)
    .then((confirmationResult) => {

        console.log("otp has been send")
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
        console.log("error; ",error)
        grecaptcha.reset(window.recaptchaWidgetId);
      // ...
    });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Use confirmationResult to confirm OTP
    if (window.confirmationResult) {
      window.confirmationResult.confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log("User:", user);
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log("Error:", error);
        });
    } else {
      console.log("Confirmation result not available.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {!isPhoneNumberEntered ? (
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button onClick={handlePhoneNumberSubmit} type="submit">Send OTP</button>
            <div id="recaptcha-container"></div> {/* ReCAPTCHA container */}
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="input-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                required
              />
            </div>
            <button type="submit">Verify OTP</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
